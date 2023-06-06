
function salvar(){
    let caixa_texto: HTMLInputElement | null = 
    document.querySelector('#nome');
    
    if(caixa_texto){
        window.localStorage.setItem("teste", caixa_texto.value);
        console.log(window.localStorage.getItem("teste"))
    }
}

function logar(){
    let input_logar: HTMLInputElement | null = 
    document.querySelector('#login');

    if(input_logar){
        let local = window.localStorage.getItem("teste");
        console.log(local)
        if(input_logar.value == local){
            alert('Bem vindo!')
        }
        else{
            alert('Errou!')
        }
    } 
}