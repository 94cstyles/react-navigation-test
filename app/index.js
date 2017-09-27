import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import Router from './router'

export default class App extends Component {
    render () {
        return (
            <View style={{flex: 1}}>
                <StatusBar
                    translucent={true}
                    barStyle="dark-content"
                    backgroundColor="transparent"/>
                <Router/>
            </View>
        )
    }
}
