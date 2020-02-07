import React, {Component} from 'react';
import {
    Alert,
    Button,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import {
    createAppContainer,
    NavigationParams,
    NavigationScreenProp,
    NavigationState
} from "react-navigation";

import SafeAreaView from 'react-native-safe-area-view';
import {createStackNavigator} from "react-navigation-stack";
import Welcome from "./Welcome";


interface LoginProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>,
}
interface IState {
    username: string,
    password: string,
}


class App extends Component<LoginProps, IState> {
    constructor(props: LoginProps) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }
     onPressOne = () => {
         Alert.alert('Welcome ' + this.state.username)
         this.props.navigation.navigate('Welcome',{ username :this.state.username})

    };

    render() {
        return (
            <ScrollView>
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
                                       placeholder={'Username'}
                                       onChangeText={value => this.setState({username: value})}/>
                            <TextInput style={styles.textInput}
                                       placeholder={'Password'} secureTextEntry={true}
                                       onChangeText={value => this.setState({password: value})}/>
                            <View style={{marginTop: 60}}>
                                <Button title={'Login'} onPress={() => {
                                    this.onPressOne()
                                }}/>
                            </View>
                        </View>
                    </View>
                </SafeAreaView>
            </ScrollView>
        );

    }
}

const styles = StyleSheet.create({
    main: {
        alignItems: 'center',
        backgroundColor: 'white',
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

const screen = createStackNavigator(
    {
        Login: App,
        Welcome: Welcome
    }, {initialRouteName: 'Login'});
export default createAppContainer(screen);