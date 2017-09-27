import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default class BPage extends Component {
    static navigationOptions = {
        title: 'B'
    }

    render () {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#E37E6A'}}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('C')}>
                    <Text style={{color: '#fff'}}>GO C</Text>
                </TouchableOpacity>
            </View>
        )
    }
}