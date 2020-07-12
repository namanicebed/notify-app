import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

class Header extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 20,
        }}>
        <Feather
          name="menu"
          color="#1D1D1D"
          size={25}
          onPress={() => this.props.navigation.openDrawer()}
        />
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              color: '#1D1D1D',
              fontSize: 18,
              fontFamily: 'Poppins-Medium',
            }}>
            Notes
          </Text>
          <Text
            style={{
              color: '#1D1D1D',
              fontSize: 12,
              fontFamily: 'Poppins-Regular',
            }}>
            {this.props.notes} Notes
          </Text>
        </View>
        <Ionicons name="search" color="#1D1D1D" size={25} />
      </View>
    );
  }
}
export default Header;
