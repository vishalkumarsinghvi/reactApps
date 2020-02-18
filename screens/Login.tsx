import React, {Component} from 'react';
import {Button, Image, ScrollView, StyleSheet, Text, TextInput, View,} from 'react-native';
import {NavigationParams, NavigationScreenProp, NavigationState} from "react-navigation";

import SafeAreaView from 'react-native-safe-area-view';
import CircleProgress from "../components/CircleProgress";


interface LoginProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>,
}

interface IState {
    username: string,
    password: string,
}


export default class Login extends Component<LoginProps, IState> {
    constructor(props: LoginProps) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    onPressOne = () => {
        this.props.navigation.navigate('Welcome', {username: this.state.username})

    };

    render() {
        return (
            <ScrollView style={styles.scrollView}>
                <SafeAreaView>
                    <View style={styles.main}>
                        <View>
                            <Image
                                style={styles.imageLogo}
                                source={{uri: 'https://cdn.vox-cdn.com/thumbor/VJeBdFTg7SkLvmHiTeAriHn09LU=/0x0:1980x1320/1820x1213/filters:focal(832x502:1148x818):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/65613211/microsoftedgenewlogo.5.jpg'}}
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
                                       onChangeText={value => this.setState({username: value})}/>
                            <TextInput style={styles.textInput}
                                       keyboardType={'default'}
                                       placeholder={'Password'} secureTextEntry={true}
                                       onChangeText={value => this.setState({password: value})}/>
                            <View style={{marginTop: 60}}>
                                <Button title={'Login'} onPress={() => {
                                    this.onPressOne()
                                }}/>
                            </View>
                        </View>
                        <CircleProgress/>
                    </View>
                </SafeAreaView>
            </ScrollView>
        );

    }
}

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
