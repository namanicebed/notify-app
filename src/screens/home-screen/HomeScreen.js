import React, {Component} from 'react';
import {Text, View, SafeAreaView, StatusBar} from 'react-native';
import Header from './components/Header';
import AppStateContext from '../../AppStateContext';
import {StackActions} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pin: null,
    };
  }

  static contextType = AppStateContext;
  render() {
    setTimeout(async () => {
      if (this.context == 'background' || this.context == 'inactive') {
        const pin = await AsyncStorage.getItem('@user_pin');
        pin
          ? this.props.navigation.dispatch(StackActions.replace('Auth'))
          : null;
      }
    }, 0);

    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <Header navigation={this.props.navigation} />
      </SafeAreaView>
    );
  }
}
export default HomeScreen;
