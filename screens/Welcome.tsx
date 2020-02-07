import React, {Component} from 'react';
import { Text, View} from 'react-native';
import {NavigationParams, NavigationScreenProp, NavigationState} from "react-navigation";

interface Props {
    navigation:NavigationScreenProp<NavigationState, NavigationParams>,

}
export default class Welcome extends Component<Props> {

username  = this.props.navigation.getParam('username',"xyz")
    constructor(props:any) {
        super(props);
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>{this.username}</Text>
            </View>
        );
    }
}
