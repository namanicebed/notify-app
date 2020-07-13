import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Ripple from 'react-native-material-ripple';
import stringToHslColor from '../../../utils/stringToHslColor';
import {useNavigation} from '@react-navigation/native';

export default ListItem = (props) => {
  const navigation = useNavigation();
  return (
    <Ripple
      activeOpacity={0.5}
      onPress={() =>
        navigation.navigate('AddNote', {item: props.data, notes: props.notes})
      }
      style={{
        width: '45%',
        marginHorizontal: 10,
        borderRadius: 10,
        backgroundColor: stringToHslColor(props.data.title, 90, 88),
        marginTop: 10,
      }}>
      <View style={{margin: 20}}>
        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            color: '#1D1D1D',
            fontSize: 18,
          }}>
          {props.data.title}
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins-Light',
            color: '#1D1D1D',
            fontSize: 14,
            marginRight: 10,
            marginTop: 10,
          }}>
          {props.data.content}
        </Text>
        <Text
          style={{
            // fontFamily: 'Poppins-Regular',
            color: '#1D1D1D',
            fontSize: 14,
            marginRight: 10,
            marginTop: 15,
          }}>
          {props.data.date}
        </Text>
      </View>
    </Ripple>
  );
};
