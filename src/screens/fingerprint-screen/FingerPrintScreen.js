import React, {Component} from 'react';
import {Text, View, Image, Dimensions, Platform} from 'react-native';
import Modal from 'react-native-modal';
import Ripple from 'react-native-material-ripple';
import FingerprintScanner from 'react-native-fingerprint-scanner';
import AsyncStorage from '@react-native-community/async-storage';

class FingerPrintModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: true,
      errorMessageLegacy: undefined,
      biometricLegacy: undefined,
      error: false,
      verified: false,
    };
  }

  componentDidMount() {
    if (Platform.OS == 'android') {
      this.authLegacy();
      // if (this.requiresLegacyAuthentication()) {
      //   this.authLegacy();
      // } else {
      //   this.authCurrent();
      // }
    }
  }

  requiresLegacyAuthentication() {
    return Platform.Version < 23;
  }

  componentWillUnmount = () => {
    FingerprintScanner.release();
  };

  authCurrent() {
    FingerprintScanner.authenticate({
      title: 'Authenticate your Biometrics',
    }).then(() => {
      this.setState({verified: true});
    });
  }

  authLegacy() {
    FingerprintScanner.authenticate({
      onAttempt: this.handleAuthenticationAttemptedLegacy,
    })
      .then(async () => {
        this.setState({verified: true});
        await AsyncStorage.setItem('@user_fingerprint', 'true');
        setTimeout(() => {
          this.setState({isVisible: false});
          this.props.navigation.pop();
        }, 700);
      })
      .catch((error) => {
        this.setState({
          errorMessageLegacy: error.message,
          biometricLegacy: error.biometric,
          error: true,
        });
        setTimeout(() => {
          this.setState({isVisible: false});
          this.props.navigation.pop();
        }, 700);
      });
  }

  handleAuthenticationAttemptedLegacy = (error) => {
    this.setState({errorMessageLegacy: error.message, error: true});
  };

  render() {
    return (
      <Modal
        isVisible={this.state.isVisible}
        style={{flex: 1, alignItems: 'center'}}>
        <View
          style={{
            height: '40%',
            width: '80%',
            alignItems: 'center',
            backgroundColor: '#fff',
            borderRadius: 10,
          }}>
          <View
            style={{
              margin: 10,
              flex: 1,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{alignItems: 'center'}}>
              <Text
                style={{
                  color: '#404040',
                  fontFamily: 'Poppins-Medium',
                  fontSize: 18,
                }}>
                Fingerprint
              </Text>
              <Text
                style={{
                  color: '#404040',
                  fontFamily: 'Poppins-Medium',
                  fontSize: 18,
                }}>
                Authentication
              </Text>
            </View>
            <View>
              <View
                style={{
                  alignSelf: 'center',
                  width: 80,
                  height: 87,
                  backgroundColor: this.state.verified
                    ? '#80E374'
                    : this.state.error
                    ? '#F86363'
                    : '#3A3A3A',
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../../assets/biometric.png')}
                  style={{height: 60, width: 42}}
                  resizeMode="cover"
                />
              </View>
              <Text
                style={{
                  marginTop: 14,
                  fontFamily: 'Poppins-Regular',
                  color: this.state.verified
                    ? '#80E374'
                    : this.state.error
                    ? '#F86363'
                    : '#B5B5B5',
                  fontSize: 16,
                }}>
                {this.state.verified
                  ? 'Fingerprint Verified'
                  : this.state.error
                  ? 'Fingerprint not verified'
                  : 'Touch Sensor'}
              </Text>
            </View>
            <Ripple
              style={{
                width: Dimensions.get('window').width * 0.7,
                height: 55,
                justifyContent: 'center',
                alignItems: 'center',
                borderTopWidth: 1,
                borderColor: '#eee',
              }}
              onPress={() => {
                setTimeout(() => {
                  this.setState({isVisible: false});
                  this.props.navigation.pop();
                }, 200);
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  color: '#404040',
                }}>
                Cancel
              </Text>
            </Ripple>
          </View>
        </View>
      </Modal>
    );
  }
}
export default FingerPrintModal;
