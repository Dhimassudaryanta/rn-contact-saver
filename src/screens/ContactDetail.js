import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

import { connect } from 'react-redux';


const ContactDetail = ({ route, navigation, getData }) => {
    const { idCatched } = route.params;


    const Detail = getData.find(
        (Detail) => Detail.id === idCatched
    );

    return (
        <View style={style.screen}>
            <View style={style.center}>
                <View style={style.row}>
                    <View>
                        <Avatar
                            rounded
                            size="xlarge"
                            icon={{ name: "user", type: "font-awesome" }}
                            source={{
                                uri:
                                    'https://s3.amazonaws.com/asdasdawe/faces/twitter/adhamdannaway/128.jpg',
                            }}
                        >

                        </Avatar>
                    </View>
                    <View style={{ maxWidth: "50%", alignItems: 'center' }}>
                        <Text
                            style={style.text}
                            numberOfLines={1}
                            ellipsizeMode="tail"
                        >{Detail.lastName}, {Detail.firstName} </Text>
                    </View>

                </View>
                <View style={style.border}></View>
                <View><Text style={style.textContent}>Firstname : {Detail.firstName}</Text>
                    <Text style={style.textContent}>Lastname : {Detail.lastName}</Text>
                    <View style={style.border}></View>
                    <Text style={style.textContent}>Age : {Detail.age}</Text>
                </View>
                <View style={style.border}></View>
                <View style={style.buttonContainer}>
                    <View style={style.button}>
                        <Button
                            title="Edit"
                            onPress={() => navigation.navigate('Edit', { id: Detail.id })}
                        ></Button>
                    </View>
                </View>
            </View>
        </View>
    );
};


const style = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    center: {
        flex: 1,
        width: "90%",
        paddingTop: 30,
    },
    row: {
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    text: {

        fontSize: 20,
        fontWeight: "bold",
    },
    textContent: {

        fontSize: 17,
        color: "black",
    },
    border: {
        marginVertical: 30,
        borderBottomWidth: 2,
        borderColor: "#ccc"
    },
    buttonContainer: {
        width: "100%",
        flex: 1,
        alignItems: "center"
    },
    button: {
        width: "50%",
        flex: 1
    }

});

const mapStateToProps = state => {
    return { getData: state.contacts }
}

export default connect(mapStateToProps)(ContactDetail);