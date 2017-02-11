import React, {Component} from 'react';
import {AppRegistry, Text, View, Navigator} from 'react-native';

import TextOutput from './app/components/TextOutput/TextOutput'
import Component2 from './app/components/Component2/component2'

export default class rnp extends Component {
    renderScene(route, navigator) {
        switch (route.id) {
            case 'TextOutput':
                return (<TextOutput navigator={navigator} name='Chris'/>)
            case 'Component2':
                return (<Component2 navigator={navigator}/>)
        }
    }

    render() {
        return (
           <Navigator
                initialRoute={{id: 'TextOutput'}}
                renderScene={this.renderScene}
                configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
           />
        );
    }
}


AppRegistry.registerComponent('rnp', () => rnp);