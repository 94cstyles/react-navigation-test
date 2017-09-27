import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default class APage extends Component {
    static navigationOptions = {
        title: 'A'
    }

    render () {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#4B4949'}}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('B')}>
                    <Text style={{color: '#fff'}}>GO B</Text>
                </TouchableOpacity>
            </View>
        )
    }
}