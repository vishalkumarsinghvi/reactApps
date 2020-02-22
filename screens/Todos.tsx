import React, {Component} from 'react';
import {Button, FlatList, SafeAreaView, Text, View} from 'react-native';
import {NavigationParams, NavigationScreenProp, NavigationState} from 'react-navigation';
import CircleProgress from '../components/CircleProgress';
import store from '../redux/store';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {getTodo} from '../redux/todo/todoAction';

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>,
    dispatch: Dispatch
}

interface IState {
    todoList: any,
    loaded: boolean,
    error: any,
    username: string,
}

class Todos extends Component<Props, IState> {

    baseUrl = 'https://jsonplaceholder.typicode.com';

    constructor(props: any) {
        super(props);
        this.state = {
            todoList: [],
            loaded: false,
            error: null,
            username: store.getState().todo.username,
        };
    }


    getTodo = () => {
        this.setState({loaded: true, username: store.getState().login.username});
        const url = this.baseUrl + '/todos';
        const request = new Request(url, {method: 'GET'});
        fetch(request)
            .then(response => response.json())
            .then(this.showData)
            .catch()
    };

    showData = (todoList: []) => {
        const loaded = !this.state.loaded;
        this.props.dispatch(getTodo(todoList, this.state.username));
        this.setState({todoList, loaded})
    };

    render() {
        return (
            <SafeAreaView>
                <View>
                    <View style={{alignItems: 'center'}}>
                        <Text>{this.state.username}</Text>
                    </View>

                    <View>
                        <Button title={'Get Todo'} onPress={this.getTodo}/>
                    </View>
                    <View>
                        {this.state.loaded && <CircleProgress/>}
                    </View>
                    <View>
                        <FlatList data={store.getState().todo.todoList}
                                  renderItem={({item}) => <Text>{item.id + ' ' + item.title}</Text>}
                                  legacyImplementation={true}/>
                    </View>

                </View>
            </SafeAreaView>
        );
    }
}

// this method is using as a set render() or this.setState furthere help like we can get data from redux to react
const mapStateToProps = (state: any) => {
    return {username: state.username, todoList: state.todoList}
};

export default connect(mapStateToProps)(Todos)
