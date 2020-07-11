import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerComponent from '../components/DrawerComponent';
import HomeScreen from '../screens/home-screen';

const Drawer = createDrawerNavigator();

export default function HomeNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={({navigation}) => (
        <DrawerComponent navigation={navigation} />
      )}>
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
}
