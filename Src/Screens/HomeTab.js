import React from 'react';
import {
    AsyncStorage, Image, StatusBar, View, Text, StyleSheet,
    Button, Alert, NetInfo, Platform
} from 'react-native';
import { responsiveFontSize, responsiveHeight } from "react-native-responsive-dimensions"
import Spinner from 'react-native-spinkit';
import Feather  from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/Ionicons';  


export class Home_Activity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wpData: null
        }
    }
    static navigationOptions = {
        header: null,
        tabBarIcon: ({ tintColor, focused }) => (
            <Feather
              name={focused ? 'ios-settings' : 'md-settings'}
              color={tintColor}
              size={25}
            />
          )
    };


    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#fff" }}>
                <Text>HomeTab</Text>
                <Feather
                    name='home'
                    color={"#000"}
                    size={25}
                />
            </View>
        )
    }
}
