import {
    createAppContainer,
} from 'react-navigation';

import {createStackNavigator} from 'react-navigation-stack';
import Todos from './Todos';
import Welcome from './Welcome';
import Login from './Login';
import React, {Component} from 'react';
import {Provider} from 'react-redux'
import store from '../redux/store';


const screen = createStackNavigator(
    {
        Login: Login,
        Welcome: Welcome,
        Todos: Todos,
    }, {initialRouteName: 'Login'});
const AppContainer = createAppContainer(screen);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        );
    }
}

export default App
