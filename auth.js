
var firebaseConfig = {
    apiKey: "AIzaSyAHM5BZhqpXPJ4_4cjuBdVPuEShCtNLgRk",
    authDomain: "proyektconsulting-dev.firebaseapp.com",
    projectId: "proyektconsulting-dev",
    storageBucket: "proyektconsulting-dev.appspot.com",
    messagingSenderId: "1082729194070",
    appId: "1:1082729194070:web:c0e96dd77fd35ef6cbd1f7"
  };
  //Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth()










  let signInButton = document.getElementById('signin')
  signInButton.addEventListener("click", (e) => {
    //Prevent Default Form Submission Behavior
    e.preventDefault()
    console.log("clicked")

    var email = document.getElementById("inputEmail")
    var password = document.getElementById("inputPassword")

    auth.signInWithEmailAndPassword(email.value, password.value) 
    .then((userCredential) => {
      // location.reload();
      // Signed in 
      var user = userCredential.user;
      console.log("user",user.email)
      window.location = "dash.html";
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // alert("error code", errorCode)
      alert( errorMessage)
    });
   })



//This method gets invoked in the UI when there are changes in the authentication state:
// 1). Right after the listener has been registered
// 2). When a user is signed in
// 3). When the current user is signed out
// 4). When the current user changes

//Lifecycle hooks
auth.onAuthStateChanged(function(user) {
  if (user) {

    var email = user.email
  
    var users = document.getElementById("user")
    var text = document.createTextNode(email);

    users.appendChild(text);

    console.log(users)
    //is signed in
  } else {
    //no user signed in
  }
})