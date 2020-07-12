import React, {Component} from 'react';
import {Text, View, SafeAreaView, TextInput, Dimensions} from 'react-native';
import Header from './components/Header';
import moment from 'moment';
class AddNotes extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <Header navigation={this.props.navigation} />
        <View style={{flex: 1, marginTop: 30, marginHorizontal: 30}}>
          <Text
            style={{
              fontSize: 13,
              color: '#1D1D1D',
              opacity: 0.4,
              fontFamily: 'Poppins-Regular',
            }}>
            {moment().format('ll')}
          </Text>
          <TextInput
            style={{
              fontSize: 25,
              fontFamily: 'Poppins-Medium',
              marginTop: 16,
              color: '#1D1D1D',
            }}
            placeholder="Title here..."
            selectionColor="#1D1D1D"
            placeholderTextColor="rgba(29, 29, 29, 0.3)"
          />
          <View
            style={{
              marginTop: 20,
              height: 1,
              width: '100%',
              backgroundColor: '#e8e8e8',
            }}
          />
          <TextInput
            style={{
              fontSize: 15,
              fontFamily: 'Poppins-Light',
              marginTop: 15,
              color: '#1D1D1D',
            }}
            multiline
            placeholderTextColor="#707070"
            placeholder="Content"
            selectionColor="#1D1D1D"
          />
        </View>
      </SafeAreaView>
    );
  }
}
export default AddNotes;
