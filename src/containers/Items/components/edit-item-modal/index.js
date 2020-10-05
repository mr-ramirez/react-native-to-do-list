// @flow
import React, { useEffect, useState } from 'react';
import moment from 'moment';

import {
  Modal, Text, TextInput, TouchableHighlight, View,
} from 'react-native';

import type { ItemType } from '../../../types';

import { mergeDateAndTime, convertDateStringIntoDateObject } from '../../helpers';

import Styles from './styles';
import ItemModalActionsContainer from '../item-modal_actions-container';
import ItemModalDatePickersContainer from '../item-modal_date-pickers-container';
import ItemModalDescriptionContainer from '../item-modal_description-container';
import ItemModalErrorMessage from '../item-modal_error-message';
import ItemModalHeader from '../item-modal_header';

type EditItemModalPropsType = {
  editItem: (ItemType) => void,
  itemToEdit: ItemType,
  closeModal: () => void,
  isOpen: boolean
};

export default function AddItemModal(props: EditItemModalPropsType): Object {
  const {
    editItem, isOpen, itemToEdit, closeModal,
  } = props;

  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState(new Date());
  const [dueTime, setDueTime] = useState(new Date());
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(
    () => {
      const dateObject = convertDateStringIntoDateObject(itemToEdit.dueDate);
      setDescription(itemToEdit.description);
      setDueDate(dateObject);
      setDueTime(dateObject);
    },
    [itemToEdit.id, itemToEdit.description, itemToEdit.dueDate],
  );

  const onSave = () => {
    if (description === '') {
      setErrorMessage('Description is empty');
      return;
    }

    const mergedDateAndTime = mergeDateAndTime(dueDate, dueTime);

    editItem({
      ...itemToEdit,
      description,
      dueDate: mergedDateAndTime,
    });

    clean();
    closeModal();
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
        <ItemModalHeader onClose={onClose} title="Edit item" />

        <ItemModalDescriptionContainer description={description} onChangeDescription={setDescription} />

        <ItemModalDatePickersContainer date={dueDate} setDate={setDueDate} setTime={setDueTime} time={dueTime} />

        <ItemModalErrorMessage errorMessage={errorMessage} />

        <ItemModalActionsContainer onSave={onSave} />
      </View>


      <View style={{ flex: 2 }} />
    </Modal>
  );
}
