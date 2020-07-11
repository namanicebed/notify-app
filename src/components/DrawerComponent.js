import React, {Component} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import Ripple from 'react-native-material-ripple';

import MaterialCommIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
        <View>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              fontSize: 18,
              marginTop: 36,
              color: '#3A3A3A',
              alignSelf: 'center',
            }}>
            Notes App
          </Text>
          <Ripple
            onPress={() => {
              this.props.navigation.closeDrawer();
              this.props.navigation.navigate('AddPin');
            }}
            style={{marginTop: 50}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                margin: 10,
                marginHorizontal: 30,
              }}>
              <MaterialCommIcons
                name="form-textbox-password"
                size={25}
                color="#1D1D1D"
              />
              <Text
                style={{
                  color: '#1D1D1D',
                  marginLeft: 20,
                  fontFamily: 'Poppins-Regular',
                  fontSize: 16,
                }}>
                Pin
              </Text>
            </View>
          </Ripple>
          <Ripple
            onPress={() => {
              this.props.navigation.closeDrawer();
              this.props.navigation.navigate('AddFingerprint');
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                margin: 10,
                marginHorizontal: 30,
              }}>
              <MaterialCommIcons name="fingerprint" size={25} color="#1D1D1D" />
              <Text
                style={{
                  color: '#1D1D1D',
                  marginLeft: 20,
                  fontFamily: 'Poppins-Regular',
                  fontSize: 16,
                }}>
                Biometric
              </Text>
            </View>
          </Ripple>
          <MaterialCommIcons
            name="close"
            color="#000000"
            size={22}
            style={{position: 'absolute', top: 22, right: 21.6}}
            onPress={() => this.props.navigation.closeDrawer()}
          />
        </View>
      </SafeAreaView>
    );
  }
}
export default App;
