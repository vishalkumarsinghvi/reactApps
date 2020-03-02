import React, {Component} from 'react';
import {View} from 'react-native';
import {
    createAppContainer,
} from 'react-navigation';

import {Provider} from 'react-redux'
import store from '../redux/store';

import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Todos from './Todos';
import Welcome from './Welcome';
import Login from './Login';
import Splash from './Splash';
import Radio from './Radio';


// const tab1 = createStackNavigator(
//     {
//         Login: Login,
//         Welcome: Welcome,
//         Todos: Todos,
//     }, {initialRouteName: 'Login'});
//
// const tab2 = createStackNavigator(
//     {
//         Login: Login,
//         Welcome: Welcome,
//         Todos: Todos,
//     }, {initialRouteName: 'Welcome'});

const TabNavigator = createMaterialBottomTabNavigator(
    {
        Login: {
            screen: Login,
            navigationOptions: {
                tabBarLabel: 'Login',
                tabBarIcon: ({tintColor}) => (
                    <View>
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>
                    </View>),
            }
        },
        Welcome: {
            screen: Welcome,
            navigationOptions: {
                tabBarLabel: 'Welcome',
                tabBarIcon: ({tintColor}) => (
                    <View>
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-person'}/>
                    </View>),
                activeColor: '#f60c0d',
                inactiveColor: '#f65a22',
                barStyle: {backgroundColor: '#f69b31'},
            }
        },
        Todos: {
            screen: Todos,
            navigationOptions: {
                tabBarLabel: 'Todos',
                tabBarIcon: ({tintColor}) => (
                    <View>
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-images'}/>
                    </View>),
                activeColor: '#615af6',
                inactiveColor: '#46f6d7',
                barStyle: {backgroundColor: '#67baf6'},
            }
        },
        Radio: {
            screen: Radio,
            navigationOptions: {
                tabBarLabel: 'Radio',
                tabBarIcon: ({tintColor}) => (
                    <View>
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-radio'}/>
                    </View>),
                activeColor: '#611af6',
                inactiveColor: '#4616d7',
                barStyle: {backgroundColor: '#17FFf6'},
            }
        },
    },
    {
        initialRouteName: 'Login',
        activeColor: '#f0edf6',
        inactiveColor: '#226557',
        barStyle: {backgroundColor: '#3BAD87'},
    },
);
const AppContainer = createAppContainer(TabNavigator);

interface MyState {
    isVisible: boolean
}

class App extends Component<{}, MyState> {

    constructor(props: any) {
        super(props);
        this.state = {isVisible: true}
    }

    hideSplashScreen = () => {
        this.setState({isVisible: false})
    };

    componentDidMount(): void {
        var that = this;
        setTimeout(function () {
            that.hideSplashScreen()
        }, 2000);
    }

    render() {
        return (
            <Provider store={store}>
                {this.state.isVisible ? <Splash/> : <AppContainer/>}
            </Provider>
        );
    }
}

export default App
