// @flow

import React, {PureComponent} from 'react';
import {
  Modal,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import {Card, Button, Icon} from '../../../core-ui';
import {LIGHT_GREY, BLACK} from '../../../constants/colors';
import CATEGORIES from '../../../constants/categories';
import categoryToIconName from '../../../generals/utils/categoryToIconName';

import type {Category} from '../../../types';

type Props = {
  showCategories: boolean;
  selectedCategory: ?Category;
  onCategorySelect: (selectedCategory: Category) => void;
  onCancel: () => void;
};

export default class SelectCategory extends PureComponent<Props, *> {
  render() {
    let {
      showCategories,
      selectedCategory,
      onCategorySelect,
      onCancel,
    } = this.props;
    return (
      <Modal
        animationType="fade"
        transparent={false}
        visible={showCategories}
        onRequestClose={onCancel}
      >
        <Text style={styles.modalHeaderText}>Select Category</Text>
        <ScrollView style={{flex: 1}}>
          <View style={styles.categoryCardWrapper}>
            {CATEGORIES.map((categoryName, index) => (
              <Card
                style={[
                  styles.categoryCard,
                  categoryName === selectedCategory
                    ? {
                      backgroundColor: LIGHT_GREY,
                    }
                    : {},
                ]}
                key={index}
              >
                <TouchableOpacity
                  style={{alignItems: 'center'}}
                  onPress={() => onCategorySelect(categoryName)}
                >
                  <Icon name={categoryToIconName(categoryName)} size="medium" />
                  <Text style={styles.categoryText}>{categoryName}</Text>
                </TouchableOpacity>
              </Card>
            ))}
          </View>
        </ScrollView>
        <View style={{flexDirection: 'row'}}>
          <Button text="Cancel" onPress={onCancel} style={styles.button} />
        </View>
      </Modal>
    );
  }
}

let styles = StyleSheet.create({
  modalHeaderText: {
    fontSize: 20,
    color: BLACK,
    fontWeight: '500',
    fontFamily: 'Roboto-Regular',
    alignSelf: 'center',
    padding: 20,
  },
  categoryCardWrapper: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  categoryCard: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
    height: 90,
    margin: 15,
  },
  categoryText: {
    fontSize: 12,
    marginTop: 10,
  },
  button: {
    flex: 1,
    height: 40,
    margin: 20,
    marginBottom: 20,
    borderRadius: 4,
  },
});
