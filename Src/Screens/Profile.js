import React from 'react';
import {
    AsyncStorage, Image, StatusBar, View, Text, StyleSheet,
    Button, Alert, NetInfo, Platform
} from 'react-native';
import { responsiveFontSize, responsiveHeight } from "react-native-responsive-dimensions"
import Spinner from 'react-native-spinkit';


export class Profile_activity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wpData: null
        }
    }
    static navigationOptions = {
        header: null,
    };


    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#fff" }}>
                <Text>Profile_activity tab</Text>
            </View>
        )
    }
}
