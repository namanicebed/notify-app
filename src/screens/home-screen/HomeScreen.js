import React, {Component, useState, useEffect, useContext} from 'react';
import {Text, View, SafeAreaView, StatusBar} from 'react-native';
import {FAB} from 'react-native-paper';
import {StackActions} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

//@import screens
import Header from './components/Header';
import RenderNotes from './components/RenderNotes';

//@import Context
import AppStateContext from '../../AppStateContext';

// @import Styles
import styles from './styles';

export default HomeScreen = ({navigation}) => {
  const appStateContext = useContext(AppStateContext);
  const [notes, setNotes] = useState([]);

  //Add on focus handler
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      var notes = JSON.parse(await AsyncStorage.getItem('@user_notes'));
      console.log(notes);
      notes ? setNotes(notes) : null;
    });
    return unsubscribe;
  }, [navigation]);

  //add check for pin
  useEffect(() => {
    setTimeout(async () => {
      if (appStateContext == 'background') {
        const pin = await AsyncStorage.getItem('@user_pin');
        // const fingerprint = await AsyncStorage.getItem('@user_fingerprint');
        pin ? navigation.dispatch(StackActions.replace('Auth')) : null;
      }
    }, 0);
  });

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={{flex: 1}}>
        <Header navigation={navigation} notes={notes.length} data={notes} />
        {notes.length == 0 ? (
          <View style={styles.view}>
            <Text style={styles.textStyle}>
              Create your first note by clicking + button
            </Text>
          </View>
        ) : (
          <RenderNotes notes={notes.reverse()} editable />
        )}
        <FAB
          style={styles.fabStyle}
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
