function salvar() {
    var caixa_texto = document.querySelector('#nome');
    if (caixa_texto) {
        window.localStorage.setItem("teste", caixa_texto.value);
        console.log(window.localStorage.getItem("teste"));
    }
}
function logar() {
    var input_logar = document.querySelector('#login');
    if (input_logar) {
        var local = window.localStorage.getItem("teste");
        console.log(local);
        if (input_logar.value == local) {
            alert('Bem vindo!');
        }
        else {
            alert('Errou!');
        }
    }
}
