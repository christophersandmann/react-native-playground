import React, {Component} from 'react';
import {AppRegistry, Text, View, TouchableHighlight} from 'react-native';

export default class TextOutput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name
        }
    }

    static defaultProps = {
        name: 'No name was given - sad'
    }

    onPress() {
        this.props.navigator.push({id: 'Component2'});
    }

    render() {
        return (
            <TouchableHighlight onPress={() => this.onPress()}>
                <View>
                    <Text>Hello, it´s me => {this.state.name}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}

AppRegistry.registerComponent('TextOutput', () => TextOutput);