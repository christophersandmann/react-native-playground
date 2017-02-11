import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, TouchableHighlight} from 'react-native';

export default class Component2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name
        }
    }

    static defaultProps = {
        name: 'No name was given - sad'
    }

    impressed() {
        console.log('i´m pressed');
    }

    goBack() {
        this.props.navigator.push({id: 'TextOutput'});
    }

    render() {
        return (
            <View>
                <Text style={styles.textColor}>Hello, it´s me => {this.state.name}</Text>
                <View style={styles.container}>
                    <TouchableHighlight underlayColor="orange" style={styles.flex1} onPress={this.impressed}>
                        <View><Text>Flex-Box 1</Text></View>
                    </TouchableHighlight>
                    <View style={styles.flex2}><Text>Flex-Box 2</Text></View>
                    <TouchableHighlight style={styles.flex3} onPress={() => this.goBack()}>
                        <View><Text>Flex-Box 3 (go back)</Text></View>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textColor: {
        color: 'green'
    },
    container: {
        flexDirection: 'row',
        height: 100
    },
    flex1: {
        flex: 1,
        backgroundColor: 'red'
    },
    flex2: {
        flex: 1,
        backgroundColor: 'orange'
    },
    flex3: {
        flex: 1,
        backgroundColor: 'green'
    }
});

AppRegistry.registerComponent('Component2', () => Component2);