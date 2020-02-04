import React, {Component} from 'react';
import {Alert, Button, Image, StyleSheet, Text, TextInput, View} from 'react-native';

function onPress() {
Alert.alert('gii');
}

export default class HelloWorldApp extends Component {
    render() {
        return (
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
                    <TextInput style={styles.textInput}>
                        Username
                    </TextInput>
                    <TextInput style={styles.textInput}>
                        Password
                    </TextInput>
                    <View style={{marginTop:60}}>
                        <Button  title={'Login'} onPress={onPress}>
                        </Button>
                    </View>
                </View>
            </View>
        );

    }
}

const styles = StyleSheet.create({
    main: {
        alignItems: 'center'
    },
    textInput: {
        fontSize: 20,
        marginTop: 10,
        borderColor: 'black',
        borderWidth: 1
    },
    imageLogo: {
        width: 250,
        height: 250
    }
});
