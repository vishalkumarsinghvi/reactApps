import {
    createAppContainer,
} from 'react-navigation';

import {createStackNavigator} from 'react-navigation-stack';
import Todos from './Todos';
import Welcome from './Welcome';
import Login from './Login';


const screen = createStackNavigator(
    {
        Login: Login,
        Welcome: Welcome,
        Todos: Todos,
    }, {initialRouteName: 'Login'});
export default createAppContainer(screen);
