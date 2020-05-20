import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { SplashScreen } from './Screens/SplashScreen';
import { Home_Activity } from './Screens/HomeTab'
import { createStackNavigator, createBottomTabNavigator, createMaterialTopTabNavigator, } from 'react-navigation';
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
import { Tips_activity } from './Screens/Tips';
import { Help_activity } from './Screens/Help';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/Ionicons';
import { Profile_activity } from './Screens/Profile';


console.disableYellowBox = true;

const MainApp = createMaterialTopTabNavigator(
  {
    Home: {
      screen: Home_Activity,
      navigationOptions: {
        tabBarLabel: 'Training',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon name="ios-home" color={tintColor} size={15} />
        )
      }
    },

    Tips: {
      screen: Tips_activity,
      navigationOptions: {
        tabBarLabel: 'Tips',
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons name="lightbulb-on" color={tintColor} size={22} />
        )
      }
    },

    Help: {
      screen: Help_activity,
      navigationOptions: {
        tabBarLabel: 'Help',
        tabBarIcon: ({ tintColor }) => (
          <Entypo name="help-with-circle" color={tintColor} size={22} />
        )
      }
    },

    Profile: {
      screen: Profile_activity,
      navigationOptions: {
        tabBarLabel: 'Me',
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons name="account-edit" color={tintColor} size={22} />
        )
      }
    },
  },
  {
    tabBarOptions: {
      tabBarPosition: "bottom",
      inactiveTintColor: "black", showIcon: true,
      activeTintColor: "#fff",
      style: {
        backgroundColor: '#1a73e8',
        borderTopWidth: 1,
        borderTopColor: '#D3D3D3',
        maxHeight: responsiveHeight(10),
      },
      labelStyle: {
        fontSize: responsiveFontSize(1.2)
      },
      indicatorStyle: {
        backgroundColor: 'red',
      },
    },
    swipeEnabled: true,
    tabBarPosition: "bottom",
    activeTintColor: "#000",

  },
);


export default MainApp;