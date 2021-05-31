import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Keyboard, KeyboardAvoidingView, Alert } from 'react-native';
import { Button } from 'native-base';
import { Avatar } from 'react-native-elements';
import Color from '../colors/index';

const ContactForm = ({ onSubmit, initialValues }) => {

    const [firstName, setFirstName] = useState(initialValues.firstName);
    const [lastName, setLastName] = useState(initialValues.lastName);
    const [age, setAge] = useState(initialValues.age);

    const resetInputHandler = () => {
        setFirstName('');
        setLastName('');
        setAge('');
    };

    const confirmInputHandler = () => {
        if (firstName.length < 5) {
            Alert.alert(
                'Invalid Input',
                'Your First name need at least 5 characters',
                [{ text: 'Okay', style: 'destructive' }]
            )
        }
        else if (lastName.length < 5) {
            Alert.alert(
                'Invalid Input',
                'Your Last name need at least 5 characters',
                [{ text: 'Okay', style: 'destructive' }]
            )
        }
        else if (isNaN(age) || age <= 0 || age > 150) {
            Alert.alert(
                'Invalid number!',
                'Age has to be a number between 1 and 150.',
                [{ text: 'Okay', style: 'destructive' }]
            )
        }
        else {
            onSubmit(firstName, lastName, age, initialValues.id);
        }
    };


    return (
        <View>
            <View style={style.line, { alignItems: 'center', paddingBottom: 15 }}>
                <Avatar
                    size="xlarge"
                    rounded
                    icon={{ name: "user", type: "font-awesome" }}
                    source={{
                        uri:
                            'https://s3.amazonaws.com/asdasdawe/faces/twitter/adhamdannaway/128.jpg',
                    }}
                />
            </View>
            <View style={style.line}>
                <TextInput
                    placeholder="Enter Firstname"
                    value={firstName}
                    onChangeText={text => setFirstName(text)}
                    style={style.TextInput}
                ></TextInput>
            </View>
            <View style={style.line}>
                <TextInput
                    placeholder="Enter Lastname"
                    value={lastName}
                    onChangeText={text => setLastName(text)}
                    style={style.TextInput}
                ></TextInput>
            </View>
            <View style={style.line}>
                <TextInput
                    maxLength={3}
                    placeholder="Enter Age"
                    value={age}
                    onChangeText={text => setAge(text)}
                    keyboardType="numeric"
                    style={style.TextInputButton}
                ></TextInput>
            </View>
            <View >
                <Button
                    full
                    rounded
                    info
                    onPress={confirmInputHandler}
                // onPress={() => onSubmit(firstName, lastName, age)}

                >
                    <Text style={style.textButton}>{initialValues.title}</Text>
                </Button>

            </View >
        </View >
    );
};

const style = StyleSheet.create({
    line:
    {
        flexDirection: 'row',
        paddingTop: 10,
        paddingHorizontal: 10,
        paddingBottom: 10,
    },

    title: {
        width: 100
    },

    TextInput: {
        flex: 1,
        borderBottomWidth: 1,
        borderColor: '#ccc'
    },
    TextInputButton: {
        borderBottomWidth: 1,
        borderColor: '#ccc',
        alignItems: 'center',
    },
    textButton: {
        color: "white"
    }
});

export default ContactForm;