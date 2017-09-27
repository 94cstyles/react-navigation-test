import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { NavigationActions } from 'react-navigation'

export default class DPage extends Component {
    static navigationOptions = {
        title: 'D'
    }

    render () {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#B89E79'}}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Text style={{color: '#fff'}}>goBack()</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.goBack(2)}>
                    <Text style={{color: '#fff'}}>goBack(2)</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.goBack('A')}>
                    <Text style={{color: '#fff'}}>goBack('A')</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.dispatch(NavigationActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({routeName: 'A'})
                    ]
                }))}>
                    <Text style={{color: '#fff'}}>reset -> [A]</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.dispatch(NavigationActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({routeName: 'E'})
                    ]
                }))}>
                    <Text style={{color: '#fff'}}>reset -> [E]</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.dispatch(NavigationActions.reset({
                    index: 1,
                    actions: [
                        NavigationActions.navigate({routeName: 'E'}),
                        NavigationActions.navigate({routeName: 'F'})
                    ]
                }))}>
                    <Text style={{color: '#fff'}}>reset -> [E, F]</Text>
                </TouchableOpacity>
            </View>
        )
    }
}