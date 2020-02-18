import React, {Component} from 'react';
import {ActivityIndicator,} from 'react-native';

interface Iprops {
}

interface IState {
}

export default class CircleProgress extends Component<Iprops, IState> {
    render() {
        return (
            <ActivityIndicator size={'small'} color={'#0000ff'}/>
        );
    }
}
