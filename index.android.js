// Main Index.js file for the app.//

import React, { Component } from 'react';
//import { connect } from 'react-redux';
import { Scene, Router } from 'react-native-router-flux';
//import { View } from 'react-native';
import { AppRegistry } from 'react-native';
import HomeS from './src/components/screens/HomeS';
import S1 from './src/components/screens/S1';
import S2 from './src/components/screens/S2';
import S3 from './src/components/screens/S3';
import S4 from './src/components/screens/S4';
import S5 from './src/components/screens/S5';

export default class CT extends Component {
    render() {
        return(
            <Router key="root">
                <Scene>
                    <Scene key = "HomeS" Component = { HomeS } title = "HomeS" initial = { true } />
                    <Scene key = "S1" Component = { S1 } title = "S1" />
                    <Scene key = "S2" Component = { S2 } title = "S2" />
                    <Scene key = "S2" Component = { S2 } title = "S2" />
                    <Scene key = "S3" Component = { S3 } title = "S3" />
                    <Scene key = "S4" Component = { S4 } title = "S4" />
                    <Scene key = "S5" Component = { S5 } title = "S5" />
                </Scene>
            </Router>
        );
    }
}




AppRegistry.registerComponent(`CT`, () => CT);
