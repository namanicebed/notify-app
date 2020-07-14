import React, {Component} from 'react';
import {Image, View, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles';
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
      <View style={styles.mainView}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../../assets/notes.png')}
            style={{width: '75%', height: '75%'}}
            resizeMode={'contain'}
          />
        </View>
        <Text style={styles.textStyle}>Notes</Text>
      </View>
    );
  }
}
export default SplashScreen;
