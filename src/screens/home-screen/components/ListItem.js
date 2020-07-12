import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Ripple from 'react-native-material-ripple';
import stringToHslColor from '../../../utils/stringToHslColor';

class ListItem extends Component {
  render() {
    console.log(this.props);
    return (
      <Ripple
        activeOpacity={0.5}
        onPress={() =>
          this.props.navigation.navigate('AddNote', {item: this.props.data})
        }
        style={{
          //   width: '45%',
          marginHorizontal: 10,
          borderRadius: 10,
          backgroundColor: stringToHslColor(this.props.data.title, 90, 88),
          marginTop: 10,
        }}>
        <View style={{margin: 20}}>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              color: '#1D1D1D',
              fontSize: 18,
            }}>
            {this.props.data.title}
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Light',
              color: '#1D1D1D',
              fontSize: 14,
              marginRight: 10,
              marginTop: 10,
            }}>
            {this.props.data.content}
          </Text>
        </View>
      </Ripple>
    );
  }
}
export default ListItem;
