import React, {Component} from 'react';
import {Button, FlatList, Text, View} from 'react-native';
import {NavigationParams, NavigationScreenProp, NavigationState} from 'react-navigation';
import CircleProgress from "../components/CircleProgress";

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>,

}

interface IState {
    data: any,
    loaded: boolean,
    error: any,
}

export default class Todos extends Component<Props, IState> {

    username = this.props.navigation.getParam('username', 'xyz');
    baseUrl = 'https://jsonplaceholder.typicode.com';

    constructor(props: any) {
        super(props);
        this.state = {
            data: null,
            loaded: false,
            error: null,
        }
    }

    getTodo = () => {
        this.setState({loaded: true});
        let url = this.baseUrl + '/todos';
        let request = new Request(url, {method: 'GET'});
        fetch(request)
            .then(response => response.json())
            .then(this.showData)
            .catch()
    };

    showData = (data: any) => {
        let loaded = !this.state.loaded;
        this.setState({data, loaded})
    };

    render() {
        return (
            <View>
                <View style={{alignItems: 'center'}}>
                    <Text>{this.username}</Text>
                </View>

                <View>
                    <Button title={'Get Todo'} onPress={this.getTodo}/>
                </View>
                <View>
                    {this.state.loaded && <CircleProgress/>}
                </View>
                <View>
                    <FlatList data={this.state.data}
                              renderItem={({item}) => <Text>{item.id + ' ' + item.title}</Text>}/>
                </View>

            </View>
        );
    }
}
