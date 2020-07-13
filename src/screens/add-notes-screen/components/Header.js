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

  const updateAsyncStorage = async () => {
    await AsyncStorage.setItem('@user_notes', JSON.stringify(props.notes));
    props.modalCallback(false);
    Toast.show('Note Saved');
    navigation.pop();
  };

  const saveNotes = async () => {
    props.notes.push({
      id: props.notes.length + 1,
      title: props.title,
      content: props.content,
      pinned: false,
      date: moment().format('ll'),
    });
    updateAsyncStorage();
  };

  const saveAndPop = async () => {
    var editedNote = {
      ...props.notes[props.id - 1],
      title: props.title,
      content: props.content,
    };
    props.notes[props.id - 1] = editedNote;
    console.log(props.notes);
    updateAsyncStorage();
  };
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
              : props.modalCallback(true)
            : navigation.pop();
        }}
      />
      {props.edited ? (
        <View style={{alignItems: 'center', flexDirection: 'row'}}>
          <AntDesign
            name={pinned ? 'pushpin' : 'pushpino'}
            onPress={async () => {
              setPin(!pinned);
              props.notes[props.id - 1].pinned = !pinned;
              // console.log(!pinned);
              await AsyncStorage.setItem(
                '@user_notes',
                JSON.stringify(props.notes),
              );
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
