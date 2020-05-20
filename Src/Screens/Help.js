import React from 'react';
import {
    AsyncStorage, Image, StatusBar, View, Text, StyleSheet,
    Button, Alert, NetInfo, Platform
} from 'react-native';
import { responsiveFontSize, responsiveHeight } from "react-native-responsive-dimensions"
import Spinner from 'react-native-spinkit';


export class Help_activity extends React.Component {
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
                <Text>Help tab</Text>
            </View>
        )
    }
}
