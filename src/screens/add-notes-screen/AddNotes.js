import React, {Component} from 'react';
import {Text, View, SafeAreaView, TextInput, Dimensions} from 'react-native';
import Header from './components/Header';
import moment from 'moment';
import Modal from './Modal';
class AddNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.route
        ? props.route.params.item
          ? props.route.params.item.title
          : ''
        : '',
      content: props.route
        ? props.route.params.item
          ? props.route.params.item.content
          : ''
        : '',
      isVisible: false,
      deleteModal: false,
    };
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <Header
          edited={
            this.props.route.params
              ? this.props.route.params.item
                ? true
                : false
              : false
          }
          item={this.props.route ? this.props.route.params.item : null}
          title={this.state.title}
          content={this.state.content}
          pinned={
            this.props.route
              ? this.props.route.params.item
                ? this.props.route.params.item.pinned
                : false
              : false
          }
          modalCallback={(isVisible, deleteModal) =>
            this.setState({isVisible, deleteModal})
          }
          notes={this.props.route.params.notes}
        />
        <View style={{flex: 1, marginTop: 30, marginHorizontal: 30}}>
          <Text
            style={{
              fontSize: 13,
              color: '#1D1D1D',
              opacity: 0.4,
              fontFamily: 'Poppins-Regular',
            }}>
            {this.props.route.params
              ? this.props.route.params.item
                ? this.props.route.params.item.date
                : moment().format('ll')
              : moment().format('ll')}
          </Text>
          <TextInput
            style={{
              fontSize: 25,
              fontFamily: 'Poppins-Medium',
              marginTop: 16,
              color: '#1D1D1D',
            }}
            value={this.state.title}
            onChangeText={(title) => this.setState({title})}
            placeholder="Title here..."
            selectionColor="#1D1D1D"
            placeholderTextColor="rgba(29, 29, 29, 0.3)"
          />
          <View
            style={{
              marginTop: 20,
              height: 1,
              width: '100%',
              backgroundColor: '#e8e8e8',
            }}
          />
          <TextInput
            style={{
              fontSize: 15,
              fontFamily: 'Poppins-Light',
              marginTop: 15,
              color: '#1D1D1D',
            }}
            multiline
            value={this.state.content}
            onChangeText={(content) => this.setState({content})}
            placeholderTextColor="#707070"
            placeholder="Content"
            selectionColor="#1D1D1D"
          />
        </View>
        <Modal
          isVisible={this.state.isVisible}
          modalCallback={(isVisible) => this.setState({isVisible})}
          notes={this.props.route.params.notes}
          title={this.state.title}
          content={this.state.content}
          deleteModal={this.state.deleteModal}
          item={this.props.route ? this.props.route.params.item : null}
        />
      </SafeAreaView>
    );
  }
}
export default AddNotes;
