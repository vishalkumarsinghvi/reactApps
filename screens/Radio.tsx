import React, {Component} from 'react';
import {Button, FlatList, SafeAreaView, Text, View} from 'react-native';
import {NavigationParams, NavigationScreenProp, NavigationState} from 'react-navigation';
import CircleProgress from '../components/CircleProgress';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {fetchRadioRequest} from '../redux/radio/radioAction';
import {RadioComponent} from '../components/RadioComponent';

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>,
    username: string,
    loaded: boolean,
    radioList: [],
    dispatch: Dispatch,

    getRadioList(): void,
}

class Radio extends Component<Props> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <SafeAreaView>
                <View>
                    <View style={{alignItems: 'center'}}>
                        <Text>{this.props.username}</Text>
                    </View>
                    <View>
                        <Button title={'Get Radio List'} onPress={this.props.getRadioList}/>
                    </View>
                    <View>
                        {this.props.loaded && <CircleProgress/>}
                    </View>
                    <View style={{width: '100%', height: '100%'}}>
                        <FlatList data={this.props.radioList.stationList}
                                  renderItem={({item}) => <RadioComponent
                                      title={item.title}
                                      url={item.url}/>}
                                  legacyImplementation={true}/>
                    </View>

                </View>
            </SafeAreaView>
        );
    }
}

// this method is using as a set render() or this.setState furthere help like we can get data from redux to react
const mapStateToProps = (state: any) => {
    return {
        username: state.login.username,
        loaded: state.radio.loaded,
        error: state.radio.error,
        radioList: state.radio.radioList,
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        getRadioList: bindActionCreators(fetchRadioRequest, dispatch),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Radio)
