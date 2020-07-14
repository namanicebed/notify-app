import React, {Component} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import Header from './components/Header';
import RenderNotes from '../home-screen/components/RenderNotes';
class SearchScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterArray: null,
    };
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <Header
          notes={this.props.route.params.notes}
          filterCallback={(filterArray) => this.setState({filterArray})}
        />
        <RenderNotes notes={this.state.filterArray} editable={false} />
      </SafeAreaView>
    );
  }
}
export default SearchScreen;
