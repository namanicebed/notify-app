import React, {Component, useState, useEffect, useContext} from 'react';
import {Text, View, SafeAreaView, StatusBar} from 'react-native';
import Header from './components/Header';
import AppStateContext from '../../AppStateContext';
import {StackActions} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import {FAB} from 'react-native-paper';
import RenderNotes from './components/RenderNotes';

export default HomeScreen = ({navigation}) => {
  const appStateContext = useContext(AppStateContext);
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      var notes = JSON.parse(await AsyncStorage.getItem('@user_notes'));
      console.log(notes);
      notes ? setNotes(notes) : null;
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    setTimeout(async () => {
      if (appStateContext == 'background') {
        const pin = await AsyncStorage.getItem('@user_pin');
        const fingerprint = await AsyncStorage.getItem('@user_fingerprint');
        pin || fingerprint
          ? navigation.dispatch(StackActions.replace('Auth'))
          : null;
      }
    }, 0);
  });

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={{flex: 1}}>
        <Header navigation={navigation} notes={notes.length} data={notes} />
        {notes.length == 0 ? (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                color: 'rgba(0,0,0,0.6)',
                fontSize: 15,
              }}>
              Create your first note by clicking + button
            </Text>
          </View>
        ) : (
          <RenderNotes notes={notes.reverse()} editable />
        )}
        <FAB
          style={{
            position: 'absolute',
            margin: 16,
            alignSelf: 'center',
            bottom: 0,
          }}
          color="#fff"
          icon="plus"
          theme={{
            colors: {
              accent: '#3A3A3A',
            },
          }}
          onPress={() => navigation.navigate('AddNote', {notes})}
        />
      </View>
    </SafeAreaView>
  );
};
