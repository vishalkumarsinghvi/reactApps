import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';
import {NavigationParams, NavigationScreenProp, NavigationState} from 'react-navigation';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import store from '../redux/store';

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>,
    dispatch:Dispatch
}

interface IState {
    data: any,
    username: string
}
/* get data from props navigation
* username = this.props.navigation.getParam('username', 'xyz')
* */
 class Welcome extends Component<Props, IState> {

    constructor(props: any) {
        super(props);
        this.state = {
            data: null,
            username: store.getState().login.username,
        }
    }

    getTodo = () => {
        this.props.navigation.navigate('Todos')
    };

    render() {
        return (
            <View>
                <View style={{alignItems: 'center'}}>
                    <Text>{this.state.username}</Text>
                </View>

                <View>
                    <Button title={'Using Redux-Saga Get Todos list'} onPress={this.getTodo}/>
                </View>

            </View>
        );
    }
}

const mapStateToProps = (state:IState) => {
    return {username: state.username}
};
export default connect(mapStateToProps)(Welcome)
