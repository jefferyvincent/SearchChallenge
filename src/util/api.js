import firebase from '../config/firebase';

export const getUserAllProfiles = async() => {
    let results = [];
    /* eslint-disable no-unused-vars */
    const response = await firebase.database().ref().once('value').then((snapshot) => {
        snapshot.forEach((childSnapshot) => {
            results.push(childSnapshot.val())
        })
    })
    /* eslint-enable no-unused-vars */
    return results;
}