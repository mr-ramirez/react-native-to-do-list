// @flow
import React, { useState } from 'react';

import {
  Modal, Text, TextInput, TouchableHighlight, View,
} from 'react-native';

import Styles from './styles';
import ItemModalActionsContainer from '../item-modal_actions-container';
import ItemModalDatePickersContainer from '../item-modal_date-pickers-container';
import ItemModalDescriptionContainer from '../item-modal_description-container';
import ItemModalHeader from '../item-modal_header';

type ItemModalPropsType = {
  addItem: (string, string) => void,
  closeModal: () => void,
  isOpen: boolean
};

export default function ItemModal(props: ItemModalPropsType): Object {
  const { addItem, isOpen, closeModal } = props;

  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState(new Date());
  const [dueTime, setDueTime] = useState(new Date());

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isOpen}
    >
      <View style={{ flex: 2 }} />

      <View style={Styles.FormContainer}>
        <ItemModalHeader onClose={closeModal} title="Add new item" />

        <ItemModalDescriptionContainer description={description} onChangeDescription={setDescription} />

        <ItemModalDatePickersContainer date={dueDate} setDate={setDueDate} setTime={setDueTime} time={dueTime} />

        <ItemModalActionsContainer
          description={description}
          date={dueDate}
          time={dueTime}
          addItem={addItem}
        />
      </View>


      <View style={{ flex: 2 }} />
    </Modal>
  );
}
