function logar(event) {
    event.preventDefault(); 

    let user = document.getElementById('user').value;
    let senha = document.getElementById('senha').value;

    if (user !== "hemillesferreira@hotmail.com") {
        alert('E-mail incorreto.');
        return false;
    }

    if (senha !== "1234") {
        alert('Senha incorreta.');
        return false;
    }

    
    window.location.href = "formulario.html";
}