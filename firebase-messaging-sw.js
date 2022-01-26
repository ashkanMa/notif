importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

   /*Update with yours config*/
  const firebaseConfig = {
                   apiKey: "AIzaSyCWyozpAR_YXDHATGQ0yjKShD18AYcQvJc",
                     authDomain: "reliable-airway-157805.firebaseapp.com",
                     databaseURL: "https://reliable-airway-157805.firebaseio.com",
                     projectId: "reliable-airway-157805",
                     storageBucket: "reliable-airway-157805.appspot.com",
                     messagingSenderId: "158041777402",
                     appId: "1:158041777402:web:16b63ca9c2a59c02405543",
                     measurementId: "G-CBHJC6V52K"
                         };
  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();

  /*messaging.onMessage((payload) => {
  console.log('Message received. ', payload);*/
  messaging.onBackgroundMessage(function(payload) {
    console.log('Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle,
      notificationOptions);
  });