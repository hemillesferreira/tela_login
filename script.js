function logar(){
    let user = document.getElementById('user').value;
    let senha = document.getElementById('senha').value;
    if(user !== "hemillesferreira@hotmail.com"){
        alert('Login Invalido. Por favor, insira o email correto')
    }else if(senha !== "1234"){
        alert('Senha Invalida')
    }else{
        alert('bem vindo')
    }
}
