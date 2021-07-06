var user_name = localStorage.getItem("user_name")
var room_name = localStorage.getItem("Room Name")

//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAFzYr3s01PchzrUi9H_ICdYzofPzaopR4",
      authDomain: "kwitter-d23aa.firebaseapp.com",
      databaseURL: "https://kwitter-d23aa-default-rtdb.firebaseio.com",
      projectId: "kwitter-d23aa",
      storageBucket: "kwitter-d23aa.appspot.com",
      messagingSenderId: "234396605599",
      appId: "1:234396605599:web:84d8d8382556d7419cd6aa"
    };
    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout()
{
window.location = "index.html";
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
}
console.log(user_name)
console.log(room_name)

function sendMessage()
{
var msg = document.getElementById("send_message_input_box").value
firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
});
document.getElementById("send_message_input_box").value = "";
}