import React, {Component} from 'react';
import {Button, FlatList, SafeAreaView, Text, View} from 'react-native';
import {NavigationParams, NavigationScreenProp, NavigationState} from 'react-navigation';
import CircleProgress from '../components/CircleProgress';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {fetchTodoRequest} from '../redux/todo/todoAction';

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>,
    username: string,
    loaded: boolean,
    todoList: [],
    dispatch: Dispatch,
    getTodoList():void,
}

class Todos extends Component<Props> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <SafeAreaView>
                <View>
                    <View style={{alignItems: 'center'}}>
                        <Text>{this.props.username}</Text>
                    </View>
                    <View>
                        <Button title={'Get Todo'} onPress={this.props.getTodoList}/>
                    </View>
                    <View>
                        {this.props.loaded && <CircleProgress/>}
                    </View>
                    <View>
                        <FlatList data={this.props.todoList}
                                  renderItem={({item}) => <Text>{`${item.id} ${' '} ${item.title}`}</Text>}
                                  legacyImplementation={true}/>
                    </View>

                </View>
            </SafeAreaView>
        );
    }
}

// this method is using as a set render() or this.setState furthere help like we can get data from redux to react
const mapStateToProps = (state: any) => {
    return {
        username: state.login.username,
        loaded: state.todo.loaded,
        error: state.todo.error,
        todoList: state.todo.todoList,
    }
};

const mapDispatchToProps = (dispatch:Dispatch) => {
    return {
       getTodoList:bindActionCreators(fetchTodoRequest,dispatch),
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Todos)
