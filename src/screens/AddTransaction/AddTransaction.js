// @flow

import React, {Fragment, Component} from 'react';
import {View} from 'react-native';

import {Card} from '../../core-ui';
import {ItemList} from '../../components';
import {categoryToIconName} from '../../generals/utils';

import SelectCategory from './components/SelectCategory';
import SelectDate from './components/SelectDate';
import CashflowStat from './components/CashflowStat';
import AddTransactionDetail from './components/AddTransactionDetail';

import type {Category} from '../../types';

type State = {
  transactionAmount: number;
  selectedCategory: ?Category;
  selectedDate: ?string;
  showCalendar: boolean;
  showCategories: boolean;
  showTransactionDetail: boolean;
  transactionDetail: ?string;
  tempTransactionDetail: ?string;
  selectedTransactionType: 'INCOME' | 'EXPENSE';
};

export default class AddTransaction extends Component<{}, State> {
  state = {
    transactionAmount: 0,
    selectedCategory: null,
    selectedDate: null,
    showCalendar: false,
    showCategories: false,
    showTransactionDetail: false,
    transactionDetail: null,
    tempTransactionDetail: null,
    selectedTransactionType: 'EXPENSE',
  };

  render() {
    return (
      <View style={{padding: 10}}>
        {this._renderCashflowStat()}
        {this._renderItemList()}
        {this._renderModals()}
      </View>
    );
  }

  _renderCashflowStat() {
    let {selectedTransactionType, transactionAmount} = this.state;
    return (
      <CashflowStat
        selectedTransactionType={selectedTransactionType}
        transactionAmount={transactionAmount}
        onAmountChange={(transactionAmount) =>
          this.setState({transactionAmount: Number(transactionAmount)})
        }
        onSelectTransactionType={(transactionType) =>
          this.setState({
            selectedTransactionType: transactionType,
          })
        }
      />
    );
  }

  _renderItemList() {
    let {selectedDate, selectedCategory, transactionDetail} = this.state;
    let parsedSelectedDate =
      selectedDate && new Date(selectedDate).toDateString();
    return (
      <Card>
        <ItemList
          itemName={selectedCategory || 'Choose category...'}
          iconName={
            selectedCategory ? categoryToIconName(selectedCategory) : 'tag'
          }
          onPress={() => {
            this.setState({
              showCategories: true,
            });
          }}
          separator
        />
        <ItemList
          itemName={parsedSelectedDate || 'Select date...'}
          iconName="calendar"
          onPress={() => {
            this.setState({
              showCalendar: true,
            });
          }}
          separator
        />
        <ItemList
          itemName={transactionDetail || 'Add transaction detail...'}
          iconName="align-left"
          onPress={() => {
            this.setState({
              showTransactionDetail: true,
            });
          }}
        />
      </Card>
    );
  }

  _renderModals() {
    let {
      selectedCategory,
      selectedDate,
      transactionDetail,
      tempTransactionDetail,
      showCategories,
      showCalendar,
      showTransactionDetail,
    } = this.state;
    return (
      <Fragment>
        <SelectCategory
          showCategories={showCategories}
          selectedCategory={selectedCategory}
          onCategorySelect={this._onCategorySelect}
          onCancel={() => this._onToggleModal('Categories')}
        />
        <SelectDate
          showCalendar={showCalendar}
          selectedDate={selectedDate}
          onDateSelected={(day: {dateString: string}) => {
            this.setState({
              selectedDate: day.dateString,
              showCalendar: false,
            });
          }}
          onCancel={() => this._onToggleModal('Calendar')}
        />
        <AddTransactionDetail
          showTransactionDetail={showTransactionDetail}
          transactionDetail={transactionDetail}
          tempTransactionDetail={tempTransactionDetail}
          onChangeText={this._onTransactionDetailTextChange}
          onCancel={this._onTransactionDetailCancel}
          onBack={() => this._onToggleModal('TransactionDetail')}
          onSave={this._onTransactionDetailSave}
        />
      </Fragment>
    );
  }

  _onCategorySelect = (selectedCategory: Category) =>
    this.setState({
      selectedCategory,
      showCategories: false,
    });

  _onTransactionDetailTextChange = (text) =>
    this.setState({
      tempTransactionDetail: text,
    });

  _onTransactionDetailCancel = () => {
    this.setState({
      showTransactionDetail: false,
      tempTransactionDetail: null,
    });
  };

  _onTransactionDetailSave = () => {
    let {tempTransactionDetail, transactionDetail} = this.state;
    this.setState({
      showTransactionDetail: false,
      transactionDetail:
        tempTransactionDetail === null
          ? transactionDetail
          : tempTransactionDetail,
      tempTransactionDetail: null,
    });
  };

  _onToggleModal = (
    modalType: 'Categories' | 'Calendar' | 'TransactionDetail'
  ) => {
    this.setState({
      [`show${modalType}`]: !this.state[`show${modalType}`],
    });
  };
}
