import React, { useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import CreateContact from './screens/CreateContact';

import { connect } from 'react-redux';
import { fetchVideos } from './actions/index';
import ShowContact from './screens/ShowContact';

const indexScreen = props => {

    useEffect(() => {
        props.fetchVideos();
    }, [])

    return (
        <View style={style.screen}>
            <View style={style.container}>
                <ShowContact></ShowContact>
            </View>

        </View>
    );
};

const style = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        borderWidth: 10,
        borderColor: "black"
    },
    container: {
        borderWidth: 5,
        borderColor: "#ccc",
        width: "80 %",
    }

});

const mapStateToProps = state => {
    return { contoh: state.videos }
}

export default connect(mapStateToProps, { fetchVideos })(indexScreen);