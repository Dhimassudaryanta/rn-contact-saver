import contact from '../apis/contact';

export const fetchContact = () => async dispatch => {
    const response = await contact.get('/contact');
    dispatch({ type: 'FETCH_CONTACT', payload: response.data.data });
    console.log(response.data);
};

export const newContact = (firstName, lastName, age, callback) => async () => {
    const photo = "empty";
    const response = await contact.post('/contact', { firstName, lastName, age, photo });

    if (callback) {
        callback();
    }
};

export const editContact = (id, firstName, lastName, age, callback) => async () => {
    const photo = "empty";
    console.log(id, firstName, lastName, age, callback);
    const response = await contact.put(`/contact/${id}`, { firstName, lastName, age, photo });

    if (callback) {
        callback();
    }
};

// export const deleteContact = id => async () => {
//     console.log(id);
//     const response = await contact.delete(`/contact/${id}`);

//     console.log(response.data);
// };