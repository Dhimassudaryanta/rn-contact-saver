import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, StyleSheet, Button, Alert } from 'react-native';
import ContactForm from '../components/ContactForm';
import { Avatar } from 'react-native-elements';



//redux
import { editContact } from '../actions/index';
import { connect } from 'react-redux';

const EditContact = ({ navigation, editContact, route, getData }) => {


    const { id } = route.params;

    const Detail = getData.find(
        (Detail) => Detail.id === id
    );

    const onPressHandler = (firstName, lastName, age, id) => {
        console.log(id, firstName, lastName, age);
        editContact(id, firstName, lastName, age, () => navigation.navigate('Show',));
    };

    return (
        <View style={style.screen}>
            <View style={style.center}>
                <ContactForm
                    initialValues={{ id: Detail.id, firstName: Detail.firstName, lastName: Detail.lastName, age: `${Detail.age}`, title: "Edit contact" }}
                    onSubmit={onPressHandler}
                ></ContactForm>
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
        width: "85%",
        paddingTop: 30
    },
    button: {
        borderRadius: 10
    }


});

const mapStateToProps = state => {
    return { getData: state.contacts }
}


export default connect(mapStateToProps, { editContact })(EditContact);