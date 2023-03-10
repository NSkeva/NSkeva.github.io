var firebaseConfig = {
    apiKey: "AIzaSyAHM5BZhqpXPJ4_4cjuBdVPuEShCtNLgRk",
    authDomain: "proyektconsulting-dev.firebaseapp.com",
    projectId: "proyektconsulting-dev",
    storageBucket: "proyektconsulting-dev.appspot.com",
    messagingSenderId: "1082729194070",
    appId: "1:1082729194070:web:c0e96dd77fd35ef6cbd1f7"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  const auth = firebase.auth()
  
   console.log(auth)
  
  
  
  let signOutButton = document.getElementById("signout")
  signOutButton.addEventListener("click", (e) => {
    //Prevent Default Form Submission Behavior
    e.preventDefault()
    console.log("clicked")
    
    auth.signOut()
    alert("Signed Out")
    window.location = "index.html";
  })