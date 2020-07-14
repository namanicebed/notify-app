import React, {Component, useState} from 'react';
import {Text, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';

const Header = (props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerStyle.mainView}>
      <Feather
        name="menu"
        color="#1D1D1D"
        size={25}
        onPress={() => props.navigation.openDrawer()}
      />
      <View style={{alignItems: 'center'}}>
        <Text style={styles.headerStyle.textStyle}>Notes</Text>
        <Text style={[styles.headerStyle.textStyle, {fontSize: 12}]}>
          {props.notes} Notes
        </Text>
      </View>
      <Ionicons
        name="search"
        color="#1D1D1D"
        size={25}
        onPress={() => navigation.navigate('SearchScreen', {notes: props.data})}
      />
    </View>
  );
};
export default Header;
