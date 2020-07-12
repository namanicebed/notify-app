import React, {Component} from 'react';
import {Text, View, SafeAreaView, StatusBar} from 'react-native';
import Header from './components/Header';
import AppStateContext from '../../AppStateContext';
import {StackActions} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import {FAB} from 'react-native-paper';
import RenderNotes from './components/RenderNotes';

class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pin: null,
      notes: [],
    };
  }

  async componentDidMount() {
    var notes = [
      {
        title: 'Heath',
        content:
          'It is a long established fact that a reader will be distracted by the readabl',
        date: 'June 5th, 2020',
        pinned: false,
      },
      {
        title: 'Get a head..',
        content: 'There are many variations of passages',
        date: 'June 5th, 2020',
        pinned: false,
      },
      {
        title: 'Jet a head..',
        content:
          'There are many variations of passages akdhfajsidf jakdjsfk jdjsakf jksdfj jka dkfj ',
        date: 'June 5th, 2020',
        pinned: false,
      },
      {
        title: 'Lamao noob',
        content: 'There are many variations of passages adf a akdfd',
        date: 'June 5th, 2020',
        pinned: false,
      },
      {
        title: 'Loll Bro',
        content: 'There are many variations',
        date: 'June 5th, 2020',
        pinned: false,
      },
      {
        title: 'Lajdj jak df',
        content:
          'There are many variations of passages ajdfa jfad fjasf djfkaj asf asjasf jfkjfklas fjk fjadkj akfjskj aklf fk d',
        date: 'June 5th, 2020',
        pinned: false,
      },
    ];

    await AsyncStorage.setItem('@user_notes', JSON.stringify(notes));
    // var notes = await AsyncStorage.getItem('@user_notes');
    var notes = JSON.parse(await AsyncStorage.getItem('@user_notes'));

    this.setState({notes});
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
          <Header
            navigation={this.props.navigation}
            notes={this.state.notes.length}
          />
          <RenderNotes notes={this.state.notes} />
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
