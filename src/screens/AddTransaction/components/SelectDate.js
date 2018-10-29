// @flow

import React, {PureComponent} from 'react';
import {Modal, View, Text, StyleSheet} from 'react-native';
import {Calendar} from 'react-native-calendars';

import {Button} from '../../../core-ui';
import {BLACK} from '../../../constants/colors';

type Props = {
  showCalendar: boolean;
  selectedDate: ?string;
  onDateSelected: (selectedDate: {dateString: string}) => void;
  onCancel: () => void;
};

export default class SelectDate extends PureComponent<Props> {
  render() {
    let {selectedDate, showCalendar, onCancel, onDateSelected} = this.props;
    return (
      <Modal
        animationType="fade"
        transparent={false}
        visible={showCalendar}
        onRequestClose={onCancel}
      >
        <View style={{flex: 1}}>
          <Text style={styles.modalHeaderText}>Select Date</Text>
          <Calendar
            current={new Date()}
            markedDates={
              selectedDate && {
                [selectedDate]: {selected: true},
              }
            }
            onDayPress={onDateSelected}
            monthFormat="MMMM yyyy"
            onPressArrowLeft={(substractMonth) => substractMonth()}
            onPressArrowRight={(addMonth) => addMonth()}
          />
          <View style={{flex: 1, flexDirection: 'row'}}>
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
