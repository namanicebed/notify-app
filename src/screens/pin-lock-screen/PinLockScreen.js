import React, {Component} from 'react';
import {Text, View, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-community/async-storage';

var pin = 0;

class PinLockScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      verify: false,
      verified: false,
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.safeAreaStyle}>
        <View style={{flex: 1}}>
          <MaterialIcons
            name="arrow-back"
            color="#000000"
            size={25}
            style={{marginLeft: 20, marginTop: 20}}
            onPress={() => this.props.navigation.pop()}
          />
          <View
            style={{
              flex: 0.5,
              justifyContent: 'center',
              alignItems: 'center',
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
                fontSize: 18,
                color: '#404040',
                marginTop: 18,
              }}>
              {this.state.verify
                ? 'Confirm Security Pin'
                : 'Set Your Security Pin'}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
              }}>
              {this.dot(this.state.text.length <= 0 ? false : true)}
              {this.dot(this.state.text.length <= 1 ? false : true)}
              {this.dot(this.state.text.length <= 2 ? false : true)}
              {this.dot(this.state.text.length <= 3 ? false : true)}
            </View>
          </View>
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
            }}>
            <View style={[styles.container, this.props.style]}>
              {this.Row([1, 2, 3])}
              {this.Row([4, 5, 6])}
              {this.Row([7, 8, 9])}
              <View style={[styles.row, this.props.rowStyle]}>
                {this.props.decimal ? (
                  this.Cell('.')
                ) : (
                  <View style={{flex: 1}} />
                )}
                {this.Cell(0)}
                {this.Backspace()}
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  dot(fill) {
    return (
      <View
        style={{
          height: 10,
          width: 10,
          borderRadius: 5,
          backgroundColor: fill ? '#404040' : '#fff',
          borderColor: fill ? '#fff' : '#404040',
          borderWidth: fill ? 0 : 1,
          marginRight: 15,
        }}
      />
    );
  }

  Backspace() {
    return (
      <TouchableOpacity
        accessibilityLabel="backspace"
        style={styles.backspace}
        onPress={() => {
          this.onPress('back');
        }}>
        <Ionicons name="backspace-outline" size={28} />
      </TouchableOpacity>
    );
  }

  Row(numbersArray) {
    let cells = numbersArray.map((val) => this.Cell(val));
    return <View style={styles.row}>{cells}</View>;
  }

  Cell(symbol) {
    return (
      <TouchableOpacity
        style={styles.cell}
        key={symbol}
        accessibilityLabel={symbol.toString()}
        onPress={() => {
          this.onPress(symbol.toString());
        }}>
        <Text style={styles.number}>{symbol}</Text>
      </TouchableOpacity>
    );
  }

  async onPress(val) {
    let curText = this.state.text;
    if (isNaN(val)) {
      if (val === 'back') {
        curText = curText.slice(0, -1);
        this.setState({text: curText});
      } else {
        curText += val;
      }
    } else {
      curText += val;
    }
    if (this.state.text.length < 3) {
      this.setState({text: curText});
    }
    if (this.state.text.length == 3) {
      this.setState({text: curText});
      setTimeout(() => {
        pin = this.state.text;
        this.setState({verify: true, text: ''});
      }, 200);
      if (this.state.verify) {
        setTimeout(() => {
          this.verifyPin();
        }, 200);
      }
    }
  }
  async verifyPin() {
    if (this.state.text == pin) {
      this.setState({verified: true});
      await AsyncStorage.setItem('@user_pin', pin);
      Toast.show('Pin changed');
      this.props.navigation.pop();
    } else {
      this.setState({verified: false});
      setTimeout(() => {
        this.setState({text: ''});
        Toast.show('Enter correct pin');
      }, 200);
    }
  }
  componentWillUnmount() {
    pin = 0;
  }
}
export default PinLockScreen;
