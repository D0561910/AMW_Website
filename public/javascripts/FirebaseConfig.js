var firebase = require("firebase");
// Initialize Firebase
var config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();

module.exports = {
  database,
};
