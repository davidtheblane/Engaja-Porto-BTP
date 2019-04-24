var btnCadastro = document.getElementById('btnCadastro');
var regEmail = document.getElementById('regEmail');
var regPassword = document.getElementById('regPassword');

btnCadastro.addEventListener('click', function(){

    firebase.auth().createUserWithEmailAndPassword(regEmail.value, regPassword.value).then(function(result){
        alert("Usuário Registrado!")

        console.log("Success!")

        window.location.replace('index.html');

    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        alert(errorMessage)
        alert(errorCode)

        console.log("Failed!")
      });
      


});

