const firebase = require("firebase");
require("firebase/firestore");
const firebaseConfig = {
  apiKey: "AIzaSyAZhjjX8zGC2TFS25P-CU61tSzX_IlQc0c",
  authDomain: "blog-d34b0.firebaseapp.com",
  projectId: "blog-d34b0",
  storageBucket: "blog-d34b0.appspot.com",
  messagingSenderId: "736073119373",
  appId: "1:736073119373:web:86f218c7fbdeba5cd1d4c4",
  measurementId: "G-MX54WNE0X7"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection("Users");
module.exports = User;