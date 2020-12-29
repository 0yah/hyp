importScripts('https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.1/firebase-messaging.js');

const config = {
    apiKey: "AIzaSyB3tlk2XVrVtHYWIF8ZcX780MlYFdk2x_A",
    authDomain: "naylan-hyp.firebaseapp.com",
    databaseURL: "https://naylan-hyp-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "naylan-hyp",
    storageBucket: "naylan-hyp.appspot.com",
    messagingSenderId: "105090785872",
    appId: "1:105090785872:web:c21c92513a6063e08b2755",
    measurementId: "G-GXTJ9XL3TY"
};

firebase.initializeApp(config);
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notificationTitle = payload.data.title;
    const notificationOptions = {
        body: payload.data.body,
//icon: '/firebase-logo.png'
    };
    return self.registration.showNotification(notificationTitle,
        notificationOptions);
});

self.addEventListener('notificationclick', event => {
    console.log(event)
    return event;
});