import React from 'react'
import { StackNavigator, NavigationActions } from 'react-navigation'
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator'
import { enhance } from 'react-navigation-addons'
import APage from './pages/APage'
import BPage from './pages/BPage'
import CPage from './pages/CPage'
import DPage from './pages/DPage'
import EPage from './pages/EPage'
import FPage from './pages/FPage'

/**
 * 处理跳转重复触发
 * @param getStateForAction
 * @returns {function(*=, *=)}
 */
export const navigateOnce = function (getStateForAction) {
    return (action, state) => {
        const {type, routeName} = action

        return (
            state && type === NavigationActions.NAVIGATE && routeName === state.routes[state.routes.length - 1].routeName
        ) ? null : getStateForAction(action, state)
    }
}

const routes = {
    A: {
        screen: APage
    },
    B: {
        screen: BPage
    },
    C: {
        screen: CPage
    },
    D: {
        screen: DPage
    },
    E: {
        screen: EPage
    },
    F: {
        screen: FPage
    }
}

const Router = enhance(StackNavigator)(routes, {
    initialRouteName: 'A',
    transitionConfig: () => ({
        screenInterpolator: (props) => CardStackStyleInterpolator.forHorizontal(props)
    })
})

Router.router.getStateForAction = navigateOnce(Router.router.getStateForAction)

export default Router
