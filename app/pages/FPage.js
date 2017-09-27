import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default class FPage extends Component {
    static navigationOptions = {
        title: 'F'
    }

    render () {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#E65E38'}}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack('A')}>
                    <Text style={{color: '#fff'}}>goBack('A')</Text>
                </TouchableOpacity>
            </View>
        )
    }
}