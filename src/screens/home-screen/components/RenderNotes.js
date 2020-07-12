import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import ListItem from './ListItem';
class RenderNotes extends Component {
  render() {
    // console.log(this.props)
    return (
      <FlatGrid
        itemDimension={200}
        style={{flex: 1, marginTop: 10}}
        data={this.props.notes}
        spacing={10}
        renderItem={({item, index}) => {
          return <ListItem data={item} />;
        }}
        // extraData={this.props.data}
        // keyExtractor={(item, index) => index.toString()}
      />
    );
  }
}
export default RenderNotes;
