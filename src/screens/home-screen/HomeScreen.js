import React, {Component} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import Header from './components/Header';
class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <Header navigation={this.props.navigation} />
      </SafeAreaView>
    );
  }
}
export default HomeScreen;
