

	// Import the functions you need from the SDKs you need
	import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
  import { getDatabase, get,  ref, set,update, remove, child } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";


		// TODO: Add SDKs for Firebase products that you want to use
		// https://firebase.google.com/docs/web/setup#available-libraries
	  
		// Your web app's Firebase configuration
		// For Firebase JS SDK v7.20.0 and later, measurementId is optional
		// const firebaseConfig = {
		//   apiKey: "AIzaSyDqRr8CxzCpQRHY_MZwzVyUcKSSrjegtRM",
		//   authDomain: "finalproject-71a43.firebaseapp.com",
		//   databaseURL: "https://finalproject-71a43-default-rtdb.firebaseio.com",
		//   projectId: "finalproject-71a43",
		//   storageBucket: "finalproject-71a43.appspot.com",
		//   messagingSenderId: "213281053493",
		//   appId: "1:213281053493:web:c642599e420e117d0d4a7c",
		//   measurementId: "G-GX84Q4XCJZ"
		// };
   
        
    const firebaseConfig = {
      apiKey: "AIzaSyCkHSF-RrJO-NyQOo4PMf-qWKaIH_966VQ",
      authDomain: "connect-4b941.firebaseapp.com",
      databaseURL: "https://connect-4b941-default-rtdb.firebaseio.com",
      projectId: "connect-4b941",
      storageBucket: "connect-4b941.appspot.com",
      messagingSenderId: "256982332852",
      appId: "1:256982332852:web:46b6ea324d1903bd8e6ee1"
    };
  
   
    const app = initializeApp(firebaseConfig); 
    const db = getDatabase(app);
    const dbref = ref(db);
   
    const auth=getAuth();

    //Admin
    btnLogin1.addEventListener('click', (e) => {
    
      var email=document.getElementById('email1').value;
      var password=document.getElementById('password1').value;
      
    
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
    
      //update the last login date
      const dat= new Date();
      //Realtime Database ref
      
        //success
       alert("login successful");
        window.location= ("../Pages/dashboard.html");
    
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      alert(errorMessage);
      });
    
    });


//Client
btnLogin2.addEventListener('click', (e) => {
 
	var user=document.getElementById('email');
	var password=document.getElementById('password').value;
  var passw;

  get(child(dbref, "People/" + user.value))
  .then((snapshot)=>{
      if(snapshot.exists()){
          passw = snapshot.val().Pass;
          
          if(passw==password){
            alert("User Logged in Successfully");
        		window.location= ("./Pages/client/index.html?params=" +user.value);
          }else{
            alert("Wrong Password");
          }
      } else {    
          alert("The Account with those details does not exist!!");
      }
    
  })
  .catch((error)=>{
      alert(error);
  })
	

// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;

// 	//update the last login date
// 	const dat= new Date();
// 	//Realtime Database ref
// 	set(ref(database, 'CafeAdmin/'+ user.uid),{
// 			last_login: dat
		

// 		})
// 		//success
// 		alert("User Logged in Successfully");
// 		window.location= ("./Pages/client/index.html");

//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
// 	alert(errorMessage);
//   });

});



 