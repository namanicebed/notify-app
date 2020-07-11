import React, {Component} from 'react';
import {Image, View, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
class SplashScreen extends Component {
  componentDidMount() {
    setTimeout(async () => {
      const pin = await AsyncStorage.getItem('@user_pin');
      console.log(pin);
      if (pin) {
        this.props.navigation.navigate('Auth');
      } else {
        this.props.navigation.navigate('Home');
      }
    }, 1000);
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
        }}>
        <View
          style={{
            height: 100,
            width: 100,
            backgroundColor: '#3A3A3A',
            justifyContent: 'flex-end',
            alignItems: 'center',
            borderRadius: 50,
          }}>
          <Image
            source={require('../../../assets/notes.png')}
            style={{width: '75%', height: '75%'}}
            resizeMode={'contain'}
          />
        </View>
        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            fontSize: 25,
            color: '#404040',
            marginTop: 18,
          }}>
          Notes
        </Text>
      </View>
    );
  }
}
export default SplashScreen;
