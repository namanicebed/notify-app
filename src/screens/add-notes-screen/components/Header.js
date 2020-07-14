import React, {Component, useState} from 'react';
import {Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-community/async-storage';
import Toast from 'react-native-simple-toast';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';

export default Header = (props) => {
  const navigation = useNavigation();
  const [pinned, setPin] = useState(props.pinned);

  const updateAsyncStorage = async (notes) => {
    await AsyncStorage.setItem('@user_notes', JSON.stringify(notes));
    props.modalCallback(false, false);
    Toast.show('Note Saved');
    navigation.pop();
  };

  const saveNotes = async () => {
    const notes = props.notes.reverse();
    notes.push({
      title: props.title,
      content: props.content,
      pinned: false,
      date: moment().format('ll'),
    });
    updateAsyncStorage(notes);
  };

  const saveAndPop = async () => {
    var editedNote = {
      ...props.notes[props.notes.indexOf(props.item)],
      title: props.title,
      content: props.content,
    };
    const notes = props.notes.reverse();
    notes[props.notes.indexOf(props.item)] = editedNote;
    updateAsyncStorage(notes);
  };

  // const deleteNote = () => {

  // };
  return (
    <View
      style={{
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
      }}>
      <MaterialIcons
        name="arrow-back"
        color="#1D1D1D"
        size={25}
        onPress={() => {
          props.title != '' || props.content != ''
            ? props.edited
              ? saveAndPop() //logic to save and pop
              : props.modalCallback(true, false)
            : navigation.pop();
        }}
      />
      {props.edited ? (
        <View style={{alignItems: 'center', flexDirection: 'row'}}>
          <AntDesign
            name={pinned ? 'pushpin' : 'pushpino'}
            onPress={async () => {
              setPin(!pinned);
              const notes = [...props.notes];
              notes.reverse();
              notes[notes.indexOf(props.item)].pinned = !pinned;
              await AsyncStorage.setItem('@user_notes', JSON.stringify(notes));
              pinned ? Toast.show('Note Un Pinned') : Toast.show('Note Pinned');
            }}
            color="#1D1D1D"
            size={23}
            style={{marginRight: 20}}
          />
          <AntDesign
            name="delete"
            color="#1D1D1D"
            size={23}
            onPress={() => props.modalCallback(true, true)}
            // style={{marginRight: 20}}
          />
        </View>
      ) : (
        <View style={{alignItems: 'center', flexDirection: 'row'}}>
          <Ionicons
            name="md-arrow-undo-outline"
            color="#1D1D1D"
            size={23}
            style={{marginRight: 20}}
          />
          <Ionicons
            name="md-arrow-redo-outline"
            color="#1D1D1D"
            size={23}
            style={{marginRight: 20}}
          />
          <MaterialIcons
            name="done"
            color="#1D1D1D"
            size={25}
            onPress={saveNotes}
          />
        </View>
      )}
    </View>
  );
};
