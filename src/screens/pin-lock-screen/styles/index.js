import {StyleSheet, Dimensions, Platform} from 'react-native';
const {height, width} = Dimensions.get('window');

export default styles = {
  safeAreaStyle: {flex: 1, backgroundColor: '#fff'},
  container: {
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
    alignItems: 'flex-start',
  },
  row: {
    flexDirection: 'row',
    marginTop: 25,
  },
  number: {
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
  backspace: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cell: {
    flex: 1,
    justifyContent: 'center',
  },
};
