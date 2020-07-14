import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';

// @import ListItem
import ListItem from './ListItem';

class RenderNotes extends Component {
  render() {
    //   // console.log(this.props)
    //   return (
    //     <FlatGrid
    //       itemDimension={130}
    //       style={{flex: 1, marginTop: 10}}
    //       data={this.props.notes}
    //       spacing={8}
    //       renderItem={({item, index}) => {
    //         return (
    //           <ListItem
    //             data={item}
    //             notes={this.props.notes}
    //             editable={this.props.editable}
    //           />
    //         );
    //       }}
    //       // extraData={this.props.data}
    //       // keyExtractor={(item, index) => index.toString()}
    //     />
    //   );
    return (
      <FlatList
        numColumns={2}
        style={{flex: 1, marginTop: 10}}
        data={this.props.notes}
        spacing={8}
        renderItem={({item, index}) => {
          if (item)
            return (
              <ListItem
                data={item}
                notes={this.props.notes}
                editable={this.props.editable}
              />
            );
          else return <View />;
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  }
}
export default RenderNotes;
