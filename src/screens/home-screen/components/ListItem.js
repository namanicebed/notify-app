import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Ripple from 'react-native-material-ripple';
import stringToHslColor from '../../../utils/stringToHslColor';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';

export default ListItem = (props) => {
  const navigation = useNavigation();
  return (
    <Ripple
      activeOpacity={0.5}
      onPress={() =>
        props.editable
          ? navigation.navigate('AddNote', {
              item: props.data,
              notes: props.notes,
            })
          : null
      }
      style={[
        styles.listItem.mainView,
        {
          backgroundColor: stringToHslColor(props.data.title, 90, 88),
        },
      ]}>
      <View style={{margin: 20}}>
        <Text style={styles.listItem.textStyle}>{props.data.title}</Text>
        <Text
          style={[
            styles.listItem.textStyle,
            {
              fontSize: 14,
              marginRight: 10,
              marginTop: 10,
            },
          ]}>
          {props.data.content}
        </Text>
        <Text
          style={[
            styles.listItem.textStyle,
            {
              fontSize: 14,
              marginRight: 10,
              marginTop: 15,
            },
          ]}>
          {props.data.date}
        </Text>
      </View>
      {props.data.pinned ? (
        <AntDesign
          name="pushpino"
          size={17}
          color="#1D1D1D"
          style={{position: 'absolute', top: 15, right: 15}}
        />
      ) : (
        <View />
      )}
    </Ripple>
  );
};
