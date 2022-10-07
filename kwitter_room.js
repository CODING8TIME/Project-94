const firebaseConfig = {
      apiKey: "AIzaSyAJg_hYjoD225w6lNWQ76w3bSxP6w5yjZ4",
      authDomain: "practice-activity-b728c.firebaseapp.com",
      databaseURL: "https://practice-activity-b728c-default-rtdb.firebaseio.com",
      projectId: "practice-activity-b728c",
      storageBucket: "practice-activity-b728c.appspot.com",
      messagingSenderId: "158833084470",
      appId: "1:158833084470:web:722c5782f248de8604f097"
    };
//ADD YOUR FIREBASE LINKS HERE
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
