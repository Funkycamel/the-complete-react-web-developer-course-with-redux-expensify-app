import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket:process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };


// database.ref('expenses')
//     .once('value')
//     .then((snapShot) => {
//         const expenses = [];

//         snapShot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
//     });

// database.ref('expenses')
//     .on('value', (snapShot) => {
//         const expenses = [];

//         snapShot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
//     });


// database.ref('expenses').push({
//    description: 'this is my description',
//    amount: 100,
//    createdAt: 100000,
//    note: 'this is my expense note'
// });

// database.ref('expenses').push({
//     description: 'rent',
//     amount: 2222,
//     createdAt: 1234,
//     note: 'this is my expense note'
// });

//  database.ref('expenses').push({
//     description: 'bills',
//     amount: 22222,
//     createdAt: 12,
//     note: 'this is my expense note'
// });
 

// const valueChange = database.ref().on('value', (snapshot) => {
//     const { age } = snapshot.val();
//     // const name = snapshot.val().name;
//     // const job = snapshot.val().job.title;
//     // const work = snapshot.val().job.company;
//     // console.log(name, 'is a', job, 'at', work);
//     console.log(age)
// }, (e) => {
//     console.log('error', e);
// });

// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         console.log(snapshot.val());
//     }).catch((e) => {
//         console.log('Error fetching data', e);
//     });

// firebase.database().ref().set({
//     name: 'Jamie Potepa',
//     age: 38,
//     stressLevel: 6,
//     isSingle: false,
//     location: {
//         home: 'Martock',
//         country: 'GB'
//     },
//     job: {
//         title: 'Digital Developer',
//         company: 'Ready'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This failed.', e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/home': 'Yeovil'
// });

// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('Remove successful');
//     })
//     .catch((e) => {
//         console.log('error removing', e);
//     });