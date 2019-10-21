import React from 'react';
import { Platform } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';
import { DrawerActions } from 'react-navigation';


let { Ionicons,FontAwesome }     = require('react-native-vector-icons');


import WelcomeScreen from './screens/Welcome';
import HomeScreen from './screens/Home';
import ProfileScreen from './screens/Profile';
import FavoritesScreen from './screens/Favorites';
import SettingsScreen from './screens/Settings';
import Login from './screens/authentication/Login';
import Register from './screens/authentication/Register';
import ForgetPassword from './screens/authentication/ForgetPassword';

import Drawer from './Drawer/Drawer'

import { HamburgerIcon, SettingsIcon, BackIcon } from './components/icons';

import { colors } from './utils/constants';


/*
const AppMainTab = TabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      drawerLabel: 'Sweet home',
      drawerIcon: ({ tintColor }) => (
        <FontAwesome name="home" size={23} color={tintColor} />
      ),
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="home" size={23} color={tintColor} />
      ),
      headerStyle: {
        backgroundColor: colors.PINK_100,
      },
      headerTitle: 'Sweet Home',
      headerTitleStyle: {
        color: colors.WHITE,
      },
      headerLeft: <HamburgerIcon onPress={() => navigation.navigate('DrawerOpen')} />,
    })
  },
  Favorites: {
    screen: FavoritesScreen,
    navigationOptions: ({ navigation }) => ({
      drawerLabel: 'Favorites',
      drawerIcon: ({ tintColor }) => (
        <FontAwesome name="heartbeat" size={23} color={tintColor} />
      ),
      tabBarLabel: 'Favorites',
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="heartbeat" size={23} color={tintColor} />
      ),
      headerStyle: {
        backgroundColor: colors.PINK_100,
      },
      headerTitle: 'Favorites',
      headerTitleStyle: {
        color: colors.WHITE,
      },
      headerLeft: <HamburgerIcon onPress={() => navigation.navigate('DrawerOpen')} />,
    })
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: ({ navigation }) => ({
      drawerLabel: 'Profile',
      drawerIcon: ({ tintColor }) => (
        <FontAwesome name="user-circle" size={23} color={tintColor} />
      ),
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="user-circle" size={23} color={tintColor} />
      ),
      headerStyle: {
        backgroundColor: colors.PINK_100,
      },
      headerTitle: 'Profile',
      headerTitleStyle: {
        color: colors.WHITE,
      },
      headerLeft: <HamburgerIcon onPress={() => navigation.navigate('DrawerOpen')} />,
      headerRight: <SettingsIcon onPress={() => navigation.navigate('Settings')} />,
    })
  },
}, {
  tabBarOptions: {
    activeTintColor: colors.WHITE,
    inactiveTintColor: colors.PINK_50,
    inactiveBackgroundColor: colors.PINK_100,
    activeBackgroundColor: colors.PINK_100,
    showIcon: true,
    showLabel: Platform.OS === 'ios',
    indicatorStyle: {
      backgroundColor: colors.PINK_300,
    },
    style: {
      backgroundColor: colors.PINK_100,
    },
    upperCaseLabel: false,
  },
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: false,
});

const AppMainStack = StackNavigator({
  Home: { screen: AppMainTab },
  Settings: { screen: SettingsScreen },
}, {
  cardStyle: {
    backgroundColor: colors.PINK_50,
  },
  mode: 'modal',
});


const AppDrawer = DrawerNavigator({
  Home: {
    screen: AppMainStack,
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: ({ navigation }) => ({
      drawerLabel: 'Settings',
      drawerIcon: ({ tintColor }) => (
        <Ionicons name="md-settings" size={23} color={tintColor} />
      ),
      headerStyle: {
        backgroundColor: colors.PINK_100,
      },
      headerTitle: 'Settings',
      headerTitleStyle: {
        color: colors.WHITE,
      },
      headerLeft: <BackIcon onPress={() => navigation.goBack()} />,
    })
  },
}, {
  contentComponent: props =>
    (<CustomDrawerContent
      {...props}
    />),
  contentOptions: {
    activeBackgroundColor: colors.PINK_100,
    activeTintColor: colors.WHITE,
    inactiveTintColor: colors.PINK_200,
  },
});

const Navigator = TabNavigator({
  Welcome: { screen: WelcomeScreen },
  Main: { screen: AppDrawer },
}, {
  navigationOptions: {
    tabBarVisible: false,
  },
  swipeEnabled: false,
});

export default Navigator;

title: 'Login',  // Title to appear in status bar
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: '#229E85',
        height: 44,
        elevation: null
      }

*/

const LoginStack = createStackNavigator({
  Login: { screen: Login ,
    navigationOptions: ({ navigation }) => ({
      headerForceInset: { top: 'never', bottom: 'never' },
      header: null,
    })
  },
  ForgetPassword: { screen: ForgetPassword ,
    navigationOptions: ({ navigation }) => ({
      headerForceInset: { top: 'never', bottom: 'never' },
      title: 'ForgetPassword',  // Title to appear in status bar
      headerTintColor: "#fff",
            headerStyle: {
                backgroundColor: '#229E85',
                height: 44,
                elevation: null
            }
    })
  },
  Register: { screen: Register ,
    navigationOptions: ({ navigation }) => ({
      headerForceInset: { top: 'never', bottom: 'never' },
      title: 'Register',  // Title to appear in status bar
      headerTintColor: "#fff",
            headerStyle: {
                backgroundColor: '#229E85',
                height: 44,
                elevation: null
            }
    })
  },
}, {
  cardStyle: {
    backgroundColor: colors.PINK_50,
  },
 mode: 'modal',
});


const HomeStack = createStackNavigator({
  Home: { screen: HomeScreen ,
    navigationOptions: ({ navigation }) => ({
      headerForceInset: { top: 'never', bottom: 'never' },
      title: 'Home',  // Title to appear in status bar
      headerLeft: <HamburgerIcon onPress={() => navigation.openDrawer()} />,
      headerTintColor: "#fff",
            headerStyle: {
                backgroundColor: '#229E85',
                height: 44,
                elevation: null
            }
    })
  },
}, {
  cardStyle: {
    backgroundColor: colors.PINK_50,
  },
 /* mode: 'modal',*/
});

const FavStack = createStackNavigator({
  Favorite: { screen: FavoritesScreen ,
    navigationOptions: ({ navigation }) => ({
      headerForceInset: { top: 'never', bottom: 'never' },
      title: 'Favorites',  // Title to appear in status bar
      
      headerLeft: <HamburgerIcon onPress={() => navigation.openDrawer()} />,
      headerTintColor: "#fff",
            headerStyle: {
                backgroundColor: '#229E85',
                height: 44,
                elevation: null
            }
    })
  },
}, {
  cardStyle: {
    backgroundColor: colors.PINK_50,
  },
 /* mode: 'modal',*/
});

const SettingStack = createStackNavigator({
  Settings: { screen: SettingsScreen ,
    navigationOptions: ({ navigation }) => ({
      headerForceInset: { top: 'never', bottom: 'never' },
      title: 'Settings',  // Title to appear in status bar
      headerLeft: <HamburgerIcon onPress={() => navigation.openDrawer()} />,
      headerTintColor: "#fff",
            headerStyle: {
                backgroundColor: '#229E85',
                height: 44,
                elevation: null
            }
    })
  },
}, {
  cardStyle: {
    backgroundColor: colors.PINK_50,
  },
 /* mode: 'modal',*/
});

const ProfileStack = createStackNavigator({
  Profile: { screen: ProfileScreen ,
    navigationOptions: ({ navigation }) => ({
      headerForceInset: { top: 'never', bottom: 'never' },
      title: 'Profile',  // Title to appear in status bar
      headerLeft: <HamburgerIcon onPress={() => navigation.openDrawer()} />,
      headerTintColor: "#fff",
            headerStyle: {
                backgroundColor: '#229E85',
                height: 44,
                elevation: null
            }
    })
  },
}, {
  cardStyle: {
    backgroundColor: colors.PINK_50,
  },
 /* mode: 'modal',*/
});
 
const AppDrawer = createDrawerNavigator({
  Home: {
    screen: HomeStack,
  },
  Favorite: {
    screen: FavStack,
  },
  Profile :{
    screen: ProfileStack,
  },
  Settings: {
    screen: SettingStack,
  }
}, {
  //DrawerMenu
  contentComponent: props =>
  (<Drawer
    {...props}
  />),
  contentOptions: {
    activeBackgroundColor: colors.PINK_100,
    activeTintColor: colors.WHITE,
    inactiveTintColor: colors.PINK_200,
  },
});


const Navigator = createStackNavigator({
  Login: { screen:LoginStack },
  Home: { screen: AppDrawer },
  Settings: { screen: SettingsScreen },
}, {
  headerMode: 'none',
  mode: 'modal',
  navigationOptions: {
    gesturesEnabled: false,
  },
});

const App = createAppContainer(Navigator);

export default App;