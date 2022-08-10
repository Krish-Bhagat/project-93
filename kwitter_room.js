//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyCVnmJJLlhAYWDG1z0yvDjqX2VyEqGeuiE",
    authDomain: "kwitter-d03cc.firebaseapp.com",
    databaseURL: "https://kwitter-d03cc-default-rtdb.firebaseio.com",
    projectId: "kwitter-d03cc",
    storageBucket: "kwitter-d03cc.appspot.com",
    messagingSenderId: "272155455943",
    appId: "1:272155455943:web:649e99d69dddef8350e9e2"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
