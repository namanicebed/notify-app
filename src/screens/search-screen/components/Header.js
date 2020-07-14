import React, {Component} from 'react';
import {Text, View, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

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
        onPress={() => navigation.pop()}
      />
      <TextInput
        style={{
          width: '88%',
          fontFamily: 'Poppins-Regular',
          color: '#1D1D1D',
          fontSize: 17,
        }}
        onChangeText={(text) => searchFilterFunction(text)}
        placeholder="Search Here..."
        placeholderTextColor="rgba(29, 29, 29, 0.4)"
      />
    </View>
  );
};
