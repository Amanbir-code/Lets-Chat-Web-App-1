var firebaseConfig = {
    apiKey: "AIzaSyAtyTWwyHqCP8gpjimx0NeetiUzBqL7EN0",
    authDomain: "project-kwitter-a6782.firebaseapp.com",
    databaseURL: "https://project-kwitter-a6782-default-rtdb.firebaseio.com",
    projectId: "project-kwitter-a6782",
    storageBucket: "project-kwitter-a6782.appspot.com",
    messagingSenderId: "112944581225",
    appId: "1:112944581225:web:5c22b27384f985ec3f70f8",
    measurementId: "G-3JRPCJRH77"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    document.getElementById("msg").value = "";
}