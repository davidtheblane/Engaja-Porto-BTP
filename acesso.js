function acesso(form){


if (form.cpf.value == "12345" && form.senha.value == "12345") 
{
    location = "login.html"}

else {
    form.cpf.value=""
    form.senha.value=""
    alert="Dados Incorretos"
}
}
