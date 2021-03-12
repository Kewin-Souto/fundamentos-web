
/*
case Sensitive+ reconhece  letras maiusculas e minusculas com os exemploas a baixo

por Tag: getElementByTagName()
por Id: getElementById()    
por nome: getElementsByName()
por Classe: getElementsBYName()
por seletor: querySelector()
*/
/*ou apenas #email da do mesmo jeito lembrando que classe usa ponto . e id usa hash tag#*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('input#email')
let assunto = document.querySelector('#assunto')
let nomeOK = false
let emailOK = false
let assuntoOK = false
let mapa = document.querySelector('#mapa')

nome.style.width = '30%'
email.style.width = '30%'

function validaNome() { 

    let txtNome = document.querySelector('#txtNome')
    if (nome.Value.length < 3) {
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        nomeOK = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.valeu.indexOs('@') == -1 || email.valeu.indexOf('.') == 1 -) {
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = "red"
    } else {
        txtNome.innerHTML = 'E-mail Válido'
        txtNome.style.color = 'green'
        emailOK = true
    }

}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtassunto')

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else {
        txtAssunto.style.display = 'none'
        assuntoOK = true
    }

}
function enviar() {
    if (nomeOK == true && emailOK == true && assuntoOK == true) {
        alert('Formulário enviado com sucesso!')
    } else {
        alert('Preencha o formulário corretamente ante de enviar...')

    }
}

function mapaZoom() {
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}