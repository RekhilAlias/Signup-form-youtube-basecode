var firebaseConfig = {
    apiKey: "AIzaSyAkh5_zm7jS99U5t9DxMh8Rdx1JuCo0g_0",
    authDomain: "dataform-19543.firebaseapp.com",
    projectId: "dataform-19543",
    storageBucket: "dataform-19543.appspot.com",
    messagingSenderId: "973463754545",
    appId: "1:973463754545:web:40ad9830ca2e0bf5d4c210"
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