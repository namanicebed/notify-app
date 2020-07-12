import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

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
        <MaterialIcons
          name="arrow-back"
          color="#1D1D1D"
          size={25}
          onPress={() => this.props.navigation.pop()}
        />
        <View style={{alignItems: 'center', flexDirection: 'row'}}>
          <Ionicons
            name="md-arrow-undo-outline"
            color="#1D1D1D"
            size={23}
            style={{marginRight: 20}}
          />
          <Ionicons
            name="md-arrow-redo-outline"
            color="#1D1D1D"
            size={23}
            style={{marginRight: 20}}
          />
          <MaterialIcons name="done" color="#1D1D1D" size={25} />
        </View>
      </View>
    );
  }
}
export default Header;
