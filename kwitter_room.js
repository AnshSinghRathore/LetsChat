import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0_88r7JQUW5xQdNuFtQLrnlYuGtQDVdc",
  authDomain: "letschat-1ecb2.firebaseapp.com",
  projectId: "letschat-1ecb2",
  storageBucket: "letschat-1ecb2.appspot.com",
  messagingSenderId: "799177397339",
  appId: "1:799177397339:web:6111ba02a9cd202a5c9b7e",
  measurementId: "G-NH0M64EMY8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");
    document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        //Start code
        console.log("room name - " + Room_names);
        row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
         //End code
        });});}
  getData();
  
   
  function logOut()
  {
    localStorage.removeItem("room_name");
        localStorage.removeItem("user_name");
        window.location = "index.html";
  }
  
  function send()
  {
        msg = document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0
        });
        document.getElementById("msg").value="";
  }