import {StyleSheet} from 'react-native';
export default styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontFamily: 'Poppins-Medium',
    color: 'rgba(0,0,0,0.6)',
    fontSize: 15,
  },
  fabStyle: {
    position: 'absolute',
    margin: 16,
    alignSelf: 'center',
    bottom: 0,
  },
});
