import React, {Component} from 'react';
import {Button, Image, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import {NavigationParams, NavigationScreenProp, NavigationState} from 'react-navigation';
import SafeAreaView from 'react-native-safe-area-view';
import CircleProgress from '../components/CircleProgress';
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {getLoginData} from "../redux/login/loginAction";


interface LoginProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>,
    dispatch: Dispatch,
}

interface IState {
    username: string,
    password: string,
    ready: boolean,
}

class Login extends Component<LoginProps, IState> {
    constructor(props: LoginProps) {
        super(props);
        this.state = {
            username: "",
            password: "",
            ready: false,
        }
    }

    onPressOne = () => {
        this.setState({ready: false});
        this.props.dispatch(getLoginData(this.state.username));
        this.props.navigation.navigate('Welcome')

    };

    setUsername = (username: string) => {
        let ready = false;
        if (username.length > 0) {
            ready = true
        } else {
            ready = false
        }
        this.setState({username, ready})
    };

    setPassword = () => {

    };

    render() {
        return (
            <ScrollView style={styles.scrollView}>
                <SafeAreaView>
                    <View style={styles.main}>
                        <View>
                            <Image
                                style={styles.imageLogo}
                                source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/51dIKfpRXdL.png'}}
                            />
                        </View>
                        <View>
                            <Text style={{fontSize: 30, marginBottom: 30}}>
                                Welcome to Connect
                            </Text>
                            <TextInput style={styles.textInput}
                                       keyboardType={'email-address'}
                                       placeholder={'Username'}
                                       autoFocus={true}
                                       onChangeText={this.setUsername}/>
                            <TextInput style={styles.textInput}
                                       keyboardType={'default'}
                                       placeholder={'Password'} secureTextEntry={true}
                                       onChangeText={value => this.setState({password: value})}/>
                            <View style={{marginTop: 60}}>
                                <Button title={'Login'}
                                        onPress={() => {
                                            this.onPressOne()
                                        }}/>
                            </View>
                        </View>
                        {this.state.ready && (<CircleProgress/>)}
                    </View>
                </SafeAreaView>
            </ScrollView>
        );

    }
}

const mapStateToProps = (state: IState) => {
    return {username: state.username};
};

// const mapDispatchToProps = dispatch => {
//     return {
//         // dispatching plain actions
//         onPressOne: () => dispatch({ getLoginData }),
//     }
// }

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'white',
    }, main: {
        alignItems: 'center',
    },
    textInput: {
        fontSize: 20,
        marginTop: 10,
        borderColor: 'black',
        borderWidth: 1,
    },
    imageLogo: {
        width: 250,
        height: 250,
    },
});

export default connect(mapStateToProps)(Login);
