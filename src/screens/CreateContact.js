import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, Button, Alert } from 'react-native';
import ContactForm from '../components/ContactForm';
import { Avatar } from 'react-native-elements';


//redux
import { newContact } from '../actions/index';
import { connect } from 'react-redux';

const CreateContact = ({ navigation, newContact }) => {

    // const onPress = (firstName, lastName, age) => {
    //     if (firstName.length < 5) {
    //         Alert.alert(
    //             'Invalid Input',
    //             'Your First name need at least 5 characters',
    //             [{ text: 'Okay', style: 'destructive' }]
    //         )
    //     }
    //     else if (lastName.length < 5) {
    //         Alert.alert(
    //             'Invalid Input',
    //             'Your Last name need at least 5 characters',
    //             [{ text: 'Okay', style: 'destructive' }]
    //         )
    //     }
    //     else if (isNaN(age) || age <= 0 || age > 150) {
    //         Alert.alert(
    //             'Invalid number!',
    //             'Age has to be a number between 1 and 150.',
    //             [{ text: 'Okay', style: 'destructive' }]
    //         )
    //     }
    //     else {

    //         newContact(firstName, lastName, age, () => navigation.navigate('Show'));
    //     }
    // };

    const onPressHandler = (firstName, lastName, age) => {
        newContact(firstName, lastName, age, () => navigation.navigate('Show',));
    };

    // const confirmInputHandler = () => {
    //     if (nameUser.length < 5) {
    //         Alert.alert(
    //             'Invalid Input',
    //             'Your name need at least 5 characters',
    //             [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
    //         )
    //     }
    //     else { navigation.navigate('Second', { userName: nameUser }); }
    // };



    return (
        <View style={style.screen}>
            <View style={style.center}>
                <ContactForm
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        age: null,
                        title: 'Create a new contact'
                    }
                    }
                    onSubmit={onPressHandler}
                ></ContactForm>
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
        width: "85%",
        paddingTop: 30
    },
    button: {
        borderRadius: 10
    }


});

export default connect(null, { newContact })(CreateContact);