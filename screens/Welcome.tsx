import React, {Component} from 'react';
import { Text, View} from 'react-native';


export default class Welcome extends Component {

    constructor(props:any) {
        super(props);
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Hello</Text>
            </View>
        );
    }
}
