import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default class CPage extends Component {
    static navigationOptions = {
        title: 'C'
    }

    render () {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#946635'}}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('D')}>
                    <Text style={{color: '#fff'}}>GO D</Text>
                </TouchableOpacity>
            </View>
        )
    }
}