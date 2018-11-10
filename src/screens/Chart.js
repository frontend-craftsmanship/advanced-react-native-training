// @flow

import * as React from 'react';
import {View, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import {
  VictoryChart,
  VictoryTheme,
  VictoryAxis,
  VictoryTooltip,
  VictoryGroup,
  VictoryLine,
  VictoryScatter,
  VictoryVoronoiContainer,
} from 'victory-native';
import type {NavigationScreenProp, NavigationRoute} from 'react-navigation';

import {DropDown, Icon, Text} from '../core-ui';
import BalanceCard from './Dashboard/components/BalanceCard';
import {
  BLACK,
  BLUE_SEA,
  LIGHT_BORDER,
  LIGHT_GREY,
  MAIN_TEXT,
  RED,
  WHITE,
} from '../constants/colors';
import {ANUAL_FINANCE_STATEMENTS} from '../constants/fixture';

type State = {
  year: string;
  isYearShown: boolean;
  externalMutations: ?{
    childName: string;
    target: Array<string>;
    eventKey: string;
    mutation: () => void;
    callback: () => void;
  };
};

const YEARS = [
  {label: '2016', value: '2016'},
  {label: '2017', value: '2017'},
  {label: '2018', value: '2018'},
  {label: '2019', value: '2019'},
  {label: '2020', value: '2020'},
];

class Chart extends React.Component<{}, State> {
  static navigationOptions = ({
    navigation,
  }: {
    navigation: NavigationScreenProp<NavigationRoute>;
  }) => {
    return {
      headerTitle: 'Chart',
      headerLeft: (
        <View style={{paddingHorizontal: 20}}>
          <Icon
            name="bars"
            size={18}
            color={BLACK}
            onPress={() => {
              navigation.toggleDrawer && navigation.toggleDrawer();
            }}
          />
        </View>
      ),
    };
  };

  constructor() {
    super();
    this.state = {
      year: '2020',
      isYearShown: false,
      externalMutations: undefined,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        {this._renderYears()}
        {this._renderBalanceCards()}
        {this._renderChart()}
      </View>
    );
  }

  _renderYears() {
    let {isYearShown, year} = this.state;
    return (
      <TouchableOpacity
        onPress={() => this.setState({isYearShown: !isYearShown})}
        style={{
          alignSelf: 'flex-end',
          justifyContent: 'center',
          marginRight: -12,
          zIndex: 1,
        }}
      >
        <DropDown
          visible={isYearShown}
          selectedOption={year}
          options={YEARS}
          onPress={(data) =>
            this.setState({year: data, isYearShown: !isYearShown})
          }
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: 100,
            marginTop: 10,
            borderColor: LIGHT_BORDER,
          }}
        >
          <Text style={{paddingRight: 5}}>{year}</Text>
          <Icon name="caret-down" size="medium" color={MAIN_TEXT} />
        </View>
      </TouchableOpacity>
    );
  }

  _renderBalanceCards() {
    return (
      <View style={{flexDirection: 'row', padding: 5}}>
        <BalanceCard title="Income" amount="$13,500.00" color={BLUE_SEA} />
        <BalanceCard title="Expense" amount="$49,000.00" color={RED} />
      </View>
    );
  }

  _renderChart() {
    let {year} = this.state;
    return (
      <VictoryChart
        theme={VictoryTheme.material}
        height={400}
        width={400}
        domainPadding={20}
        animate={{onLoad: {duration: 1000}}}
        containerComponent={<VictoryVoronoiContainer />}
      >
        <VictoryAxis
          dependentAxis
          domain={[0, 500]}
          tickFormat={(tick) => `$${tick}`}
        />
        <VictoryAxis
          style={{
            axisLabel: {fontSize: 14, padding: 30},
            axis: {stroke: '#756f6a'},
          }}
          tickValues={ANUAL_FINANCE_STATEMENTS[year].income.map(
            (datum) => datum.x
          )}
        />
        <VictoryGroup
          labels={(d) => `${d.y}`}
          labelComponent={
            <VictoryTooltip style={{fontSize: 14, fontColor: '#4080D7'}} />
          }
          data={ANUAL_FINANCE_STATEMENTS[year].income}
        >
          <VictoryLine
            interpolation="catmullRom"
            style={{
              data: {
                stroke: '#4080D7',
                strokeWidth: 3,
              },
            }}
          />
          <VictoryScatter style={{data: {fill: LIGHT_GREY}}} size={3} />
        </VictoryGroup>
        <VictoryGroup
          labels={(d) => `y: ${d.y}`}
          labelComponent={<VictoryTooltip style={{fontSize: 10}} />}
          data={ANUAL_FINANCE_STATEMENTS[year].expense}
        >
          <VictoryLine
            interpolation="catmullRom"
            style={{
              data: {
                stroke: '#C80A23',
                strokeWidth: 3,
                strokeLinecap: 'round',
              },
            }}
          />
          <VictoryScatter
            size={(d, a) => {
              return a ? 6 : 3;
            }}
          />
        </VictoryGroup>
      </VictoryChart>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: WHITE,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'transparent',
    padding: 5,
  },
  shadow: Platform.select({
    ios: {
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 3},
      shadowOpacity: 0.5,
      shadowRadius: 1,
    },
    android: {
      elevation: 4,
    },
  }),
});
export default Chart;
