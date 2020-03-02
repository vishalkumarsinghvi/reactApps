import React, {Component} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
var Sound = require('react-native-sound');
Sound.setCategory('Playback');

// Sound.setCategory('Playback');

interface Iprops {
    title: string,
    url: string,
}


export class RadioComponent extends Component<Iprops, {}> {
   constructor(props: Iprops) {
        super(props);
    }

    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                    <View style={style.main}>
                        <View style={style.radioContainer}>
                            <Text style={style.textColor}>{this.props.title}</Text>
                            <Icon style={style.icon} name={'ios-play'} size={50}
                                  onPress={() => this.PlayMusic(this.props.title,this.props.url)}/>
                        </View>

                    </View>
                </ScrollView>
            </SafeAreaView>

        );
    }


    PlayMusic = (title: string, url: string) => {
        var whoosh = new Sound('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', null, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
                return;
            }
            // loaded successfully
            console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());

            // Play the sound with an onEnd callback
            whoosh.play((success) => {
                if (success) {
                    console.log('successfully finished playing');
                } else {
                    console.log('playback failed due to audio decoding errors');
                }
            });
        });

        // Reduce the volume by half
        whoosh.setVolume(0.5);

        // Position the sound to the full right in a stereo field
        whoosh.setPan(1);

        // Loop indefinitely until stop() is called
        whoosh.setNumberOfLoops(-1);

        // Get properties of the player instance
        console.log('volume: ' + whoosh.getVolume());
        console.log('pan: ' + whoosh.getPan());
        console.log('loops: ' + whoosh.getNumberOfLoops());

        // Seek to a specific point in seconds
        whoosh.setCurrentTime(2.5);

        // Get the current playback point in seconds
        whoosh.getCurrentTime((seconds) => console.log('at ' + seconds));

        // Pause the sound
        whoosh.pause();

        // Stop the sound and rewind to the beginning
        whoosh.stop(() => {
            // Note: If you want to play a sound after stopping and rewinding it,
            // it is important to call play() in a callback.
            whoosh.play();
        });

        // Release the audio player resource
        whoosh.release();
        // SoundPlayer.playUrl('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3')
    }

}


const style = StyleSheet.create({
    main: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    radioContainer: {
        width: 200,
        height: 200,
        padding: 10,
        backgroundColor: 'white',
        alignItems: 'center',
        flexDirection: 'column-reverse',
        margin: 10,
    },
    textColor: {
        color: 'black',
    },
    icon: {
        marginBottom: 40
    }
});
