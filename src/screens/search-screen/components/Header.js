import React, {Component} from 'react';
import {Text, View, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

export default Header = (props) => {
  const navigation = useNavigation();
  const searchFilterFunction = (textValue) => {
    if (textValue == '') {
      props.filterCallback(null);
    } else {
      const filterData = props.notes.filter((item) => {
        const titleData = item.title.toUpperCase();
        const contentData = item.content.toUpperCase();
        const textData = textValue.toUpperCase();
        return (
          titleData.indexOf(textData) > -1 || contentData.indexOf(textData) > -1
        );
      });

      props.filterCallback(filterData);
    }
  };
  return (
    <View style={styles.mainView}>
      <MaterialIcons
        name="arrow-back"
        color="#1D1D1D"
        size={25}
        onPress={() => navigation.pop()}
      />
      <TextInput
        style={styles.inputStyle}
        onChangeText={(text) => searchFilterFunction(text)}
        placeholder="Search Here..."
        placeholderTextColor="rgba(29, 29, 29, 0.4)"
      />
    </View>
  );
};
