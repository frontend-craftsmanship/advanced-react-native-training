// @flow

import React, {PureComponent} from 'react';
import {Modal, Text, View, TextInput, StyleSheet} from 'react-native';

import {Button} from '../../../core-ui';
import {GREEN, BLACK} from '../../../constants/colors';

type Props = {
  showTransactionDetail: boolean;
  transactionDetail: ?string;
  tempTransactionDetail: ?string;
  onChangeText: (text: string) => void;
  onCancel: () => void;
  onSave: () => void;
  onBack: () => void;
};

export default class AddTransactionDetail extends PureComponent<Props> {
  render() {
    let {
      showTransactionDetail,
      transactionDetail,
      tempTransactionDetail,
      onChangeText,
      onSave,
      onCancel,
      onBack,
    } = this.props;
    return (
      <Modal
        animationType="fade"
        transparent={false}
        visible={showTransactionDetail}
        onRequestClose={onBack}
      >
        <View style={{flex: 1}}>
          <Text style={styles.modalHeaderText}>Add Transaction Detail</Text>
          <TextInput
            multiline
            placeholder=". . . ."
            defaultValue={transactionDetail}
            value={tempTransactionDetail}
            onChangeText={onChangeText}
            style={{
              fontSize: 24,
              padding: 25,
            }}
          />
          <View style={{flexDirection: 'row', flex: 1}}>
            <Button
              text="Save"
              onPress={onSave}
              style={[
                styles.button,
                {backgroundColor: GREEN, alignSelf: 'flex-end'},
              ]}
            />
            <Button
              text="Cancel"
              onPress={onCancel}
              style={[styles.button, {alignSelf: 'flex-end'}]}
            />
          </View>
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
  button: {
    flex: 1,
    height: 40,
    margin: 20,
    marginBottom: 20,
    borderRadius: 4,
  },
});
