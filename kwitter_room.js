
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAL_gTsh5P8woU_bPzXAdrmgRYOfCsjEJk",
      authDomain: "kwitter-2-6e2df.firebaseapp.com",
      databaseURL: "https://kwitter-2-6e2df-default-rtdb.firebaseio.com",
      projectId: "kwitter-2-6e2df",
      storageBucket: "kwitter-2-6e2df.appspot.com",
      messagingSenderId: "109408764990",
      appId: "1:109408764990:web:e079104fffa617c4bdfd6f"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function logout()
{
window.location = "index.html";
}

function addRoom()
{
      var room = document.getElementById("room_name").value 
      console.log(room)
firebase.database().ref("/").child(room).update({
      purpose:"addingRoom"
});
window.location = "Chat_Room.html"
}

var user_name = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML = " Welcome " + user_name + " ! "

function redirectToRoomName(room)
{
 console.log(room)     
 localStorage.setItem("Room_names" , room)
 window.location = "Chat_Room.html"
}