import React, {Component, useState} from 'react';
import {Text, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
const Header = (props) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
      }}>
      <Feather
        name="menu"
        color="#1D1D1D"
        size={25}
        onPress={() => props.navigation.openDrawer()}
      />
      <View style={{alignItems: 'center'}}>
        <Text
          style={{
            color: '#1D1D1D',
            fontSize: 18,
            fontFamily: 'Poppins-Medium',
          }}>
          Notes
        </Text>
        <Text
          style={{
            color: '#1D1D1D',
            fontSize: 12,
            fontFamily: 'Poppins-Regular',
          }}>
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
