import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default class EPage extends Component {
    static navigationOptions = {
        title: 'E'
    }

    render () {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#DC7A77'}}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('F')}>
                    <Text style={{color: '#fff'}}>GO F</Text>
                </TouchableOpacity>
            </View>
        )
    }
}