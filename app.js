var firebaseConfig = {
    apiKey: "add",
    authDomain: "add",
    projectId: "add",
    storageBucket: "add",
    messagingSenderId: "add",
    appId: "add"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //Reference contact info collections


  let contactInfo = firebase.database().ref("infos");

  document.querySelector(".contact").addEventListener("submit",submitForm);


  function submitForm(e){
    e.preventDefault()
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;

    saveContactInfo(name,email);

  

document.querySelector('.alert').style.display = 'block';


setTimeout(function(){

    document.querySelector('.alert').style.display = 'none';
},3000);

document.querySelector(".contact").reset();

}




function saveContactInfo(name,email){

    let newContactInfo =  contactInfo.push();

    newContactInfo.set({

        name: name,
        email: email

    });



}
