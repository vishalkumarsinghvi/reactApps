import React, {Component} from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';
import {NavigationParams, NavigationScreenProp, NavigationState} from 'react-navigation';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>,
    dispatch: Dispatch,
    username: string,
}

/* get data from props navigation
* username = this.props.navigation.getParam('username', 'xyz')
* */
class Welcome extends Component<Props> {

    constructor(props: any) {
        super(props);
    }

    getTodo = () => {
        this.props.navigation.navigate('Todos')
    };

    render() {
        return (
            <SafeAreaView>
                <View>
                    <View style={{alignItems: 'center'}}>
                        <Text>{this.props.username}</Text>
                    </View>

                    <View>
                        <Button title={'Using Redux-Saga Get Todos list'} onPress={this.getTodo}/>
                    </View>

                </View>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state:any) => {
    return {username: state.login.username}
};
export default connect(mapStateToProps)(Welcome)
