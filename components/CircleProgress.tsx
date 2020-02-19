import React, {Component} from 'react';
import {ActivityIndicator} from 'react-native';


export default class CircleProgress extends Component {
    render() {
        return (
            <ActivityIndicator size={'large'} color={'#0000ff'}/>
        );
    }
}
