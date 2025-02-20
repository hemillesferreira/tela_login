function enviar(event) {
    event.preventDefault(); 

    let email = document.getElementById('user').value;
    let bairro = document.getElementById('senha').value;
    let rua = document.getElementById('senha').value;
    let tel = document.getElementById('senha').value;
    
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