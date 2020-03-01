import React, {Component} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';

export default class Splash extends Component {
    render() {
        return (
            <SafeAreaView>
                <View style={style.main}>
                    <Image style={style.image}
                           source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/51dIKfpRXdL.png'}}/>
                    <Text style={{fontSize: 30}}>Connect</Text>
                </View>
            </SafeAreaView>
        );
    }
}

const style = StyleSheet.create({
    image: {
        width: 250,
        height: 250,
    },
    main: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
