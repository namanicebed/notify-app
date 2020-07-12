import React, {Component} from 'react';
import {Text, View, SafeAreaView, StatusBar} from 'react-native';
import Header from './components/Header';
import AppStateContext from '../../AppStateContext';
import {StackActions} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import {FAB} from 'react-native-paper';

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
        const fingerprint = await AsyncStorage.getItem('@user_fingerprint');
        pin || fingerprint
          ? this.props.navigation.dispatch(StackActions.replace('Auth'))
          : null;
      }
    }, 0);

    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <View style={{flex: 1}}>
          <Header navigation={this.props.navigation} />
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
            onPress={() => this.props.navigation.navigate('AddNote')}
          />
        </View>
      </SafeAreaView>
    );
  }
}
export default HomeScreen;
