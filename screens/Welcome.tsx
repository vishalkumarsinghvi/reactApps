import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';
import {NavigationParams, NavigationScreenProp, NavigationState} from 'react-navigation';

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>,

}

interface IState {
    data: any,
}

export default class Welcome extends Component<Props, IState> {

    username = this.props.navigation.getParam('username', 'xyz');

    constructor(props: any) {
        super(props);
        this.state = {
            data: null,
        }
    }

    getTodo = () => {
      this.props.navigation.navigate('Todos')
    };

    render() {
        return (
            <View>
                <View style={{alignItems: 'center'}}>
                    <Text>{this.username}</Text>
                </View>

                <View>
                    <Button title={'Todos'} onPress={this.getTodo}/>
                </View>

            </View>
        );
    }
}
