import React, { useEffect } from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import Colors from '../colors/index';
import { Ionicons } from '@expo/vector-icons';
import { CommonActions } from '@react-navigation/native';

//redux
import { connect } from 'react-redux';
import { fetchContact } from '../actions/index';
import { deleteContact } from '../actions/index';



const ShowContact = (props) => {

    useEffect(() => {
        props.fetchContact();
        const listener = props.navigation.addListener('focus', () => {
            props.fetchContact();
        });
    }, []);

    const deleteHandler = (id) => {
        props.deleteContact(id);
    };


    return (
        < View style={style.screen} >
            <View style={style.center}>
                <View>
                    <FlatList
                        data={props.contact}
                        keyExtractor={(blogPost) => blogPost.id}
                        renderItem={({ item }) => {
                            return (
                                <View style={style.row}>
                                    <Text style={style.Text}>{item.firstName}</Text>
                                    <TouchableOpacity onPress={() =>
                                        props.navigation.navigate('Detail', { idCatched: item.id })}>
                                        <Ionicons name="ios-arrow-forward-circle-outline" size={24} color="black" />
                                    </TouchableOpacity>
                                </View>
                            );
                        }}
                    >

                    </FlatList>


                </View>
            </View>
        </View >
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
        paddingTop: 30
    },
    Text: {
        fontSize: 20,
    },
    row:
    {

        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderColor: '#ccc'
    }



});

const mapStateToProps = state => {
    return { contact: state.contacts }
}

export default connect(mapStateToProps, { fetchContact, deleteContact })(ShowContact);