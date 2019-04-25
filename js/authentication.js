var btnLogin = document.getElementById('btnLogin');
var inputEmail = document.getElementById('inputEmail');
var inputPassword = document.getElementById('inputPassword');
var btnEncerrar = document.getElementById('btnEncerrar')


btnLogin.addEventListener('click', function(){

    firebase.auth().signInWithEmailAndPassword(inputEmail.value, inputPassword.value).then(function(result){
        alert("Usuário Conectado!")

        //console.log("Success!")

        window.location.replace('principal.html');

    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        alert(errorMessage)
        alert(errorCode)

        //console.log("Failed!")
      });



});

function observador (){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          console.log('existe usuário ativo ' + email)
          showInfo();

          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          // ...
          

        } else {
          // User is signed out.
          console.log('nenhum usuário logado')
          // ...
        }
      });
}

observador();


function showInfo() {
    var infoUser = document.getElementById('infoUser');
    }

 
btnEncerrar.addEventListener('click', function(){
  firebase.auth().signOut()
  .then(function(){
    console.log('Saindo...')

    window.location.replace('index.html');

  })

  .catch(function(error){
    console.log(error)
  })
});