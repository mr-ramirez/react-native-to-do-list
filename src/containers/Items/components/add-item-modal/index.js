// @flow
import React, { useState } from 'react';

import {
  Modal, Text, TextInput, TouchableHighlight, View,
} from 'react-native';

import { mergeDateAndTime } from '../../helpers';

import Styles from './styles';
import ItemModalActionsContainer from '../item-modal_actions-container';
import ItemModalDatePickersContainer from '../item-modal_date-pickers-container';
import ItemModalDescriptionContainer from '../item-modal_description-container';
import ItemModalErrorMessage from '../item-modal_error-message';
import ItemModalHeader from '../item-modal_header';

type AddItemModalPropsType = {
  addItem: (string, string) => void,
  closeModal: () => void,
  isOpen: boolean
};

export default function AddItemModal(props: AddItemModalPropsType): Object {
  const { addItem, isOpen, closeModal } = props;

  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState(new Date());
  const [dueTime, setDueTime] = useState(new Date());
  const [errorMessage, setErrorMessage] = useState('');

  const onSave = () => {
    if (description === '') {
      setErrorMessage('Description is empty');
      return;
    }

    const mergedDateAndTime = mergeDateAndTime(dueDate, dueTime);
    addItem(description, mergedDateAndTime);
    clean();
  };

  const clean = () => {
    setDescription('');
    setDueDate(new Date());
    setDueTime(new Date());
    setErrorMessage('');
  };

  const onClose = () => {
    clean();
    closeModal();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isOpen}
    >
      <View style={{ flex: 2 }} />

      <View style={Styles.FormContainer}>
        <ItemModalHeader onClose={onClose} title="Add new item" />

        <ItemModalDescriptionContainer description={description} onChangeDescription={setDescription} />

        <ItemModalDatePickersContainer date={dueDate} setDate={setDueDate} setTime={setDueTime} time={dueTime} />

        <ItemModalErrorMessage errorMessage={errorMessage} />

        <ItemModalActionsContainer onSave={onSave} />
      </View>


      <View style={{ flex: 2 }} />
    </Modal>
  );
}
