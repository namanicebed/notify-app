import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Modal from 'react-native-modal';
import Ripple from 'react-native-material-ripple';
import AsyncStorage from '@react-native-community/async-storage';
import Toast from 'react-native-simple-toast';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';

const ModalView = (props) => {
  const navigation = useNavigation();
  return (
    <Modal
      isVisible={props.isVisible}
      onBackdropPress={() => props.modalCallback(false, false)}
      onBackButtonPress={() => props.modalCallback(false, false)}
      style={{
        flex: 1,
        margin: 0,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: '80%',
          height: 150,
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#fff',
          borderRadius: 10,
        }}>
        <View style={{margin: 10, flex: 0.6, justifyContent: 'center'}}>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              fontSize: 16,
              color: '#1D1D1D',
            }}>
            {props.deleteModal
              ? 'Delete Note?'
              : 'Do you wish to discard or save?'}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            flex: 0.4,
            borderTopWidth: 1,
            borderColor: '#e8e8e8',
            width: '100%',
            justifyContent: 'space-between',
          }}>
          <Ripple
            onPress={async () => {
              if (props.deleteModal) {
                // console.log(props.notes);
                const notes = [...props.notes];
                notes.reverse();
                const alteredNotes = notes.splice(notes.indexOf(props.item), 1);
                console.log(notes);
                await AsyncStorage.setItem(
                  '@user_notes',
                  JSON.stringify(notes),
                );
                props.modalCallback(false, false);
                Toast.show('Note Deleted');
                navigation.pop();
              } else {
                const notes = props.notes.reverse();
                notes.push({
                  title: props.title,
                  content: props.content,
                  pinned: false,
                  id: props.notes.length + 1,
                  date: moment().format('ll'),
                });
                // console.log(props.notes);
                await AsyncStorage.setItem(
                  '@user_notes',
                  JSON.stringify(notes),
                );
                props.modalCallback(false, false);
                Toast.show('Note Saved');
                navigation.pop();
              }
            }}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flex: 0.5,
              height: '100%',
              borderColor: '#e8e8e8',
              borderRightWidth: 1,
            }}>
            <Text>{props.deleteModal ? 'Delete' : 'Save'}</Text>
          </Ripple>
          <Ripple
            onPress={() => {
              if (props.deleteModal) {
                props.modalCallback(false, false);
              } else {
                props.modalCallback(false, false);
                navigation.pop();
              }
            }}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flex: 0.5,
              height: '100%',
            }}>
            <Text>{props.deleteModal ? 'Cancel' : 'Discard'}</Text>
          </Ripple>
        </View>
      </View>
    </Modal>
  );
};
export default ModalView;
