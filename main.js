const form = document.querySelector('.form-calc')
const numA = document.querySelector('#A')
const numB = document.querySelector('#B')
const msSubmit = document.querySelector('.message')
const msInput = document.querySelector('.error-message')

let formValido = false

function validaNum(a, b) {

    a = parseInt(a)
    b = parseInt(b)

    if ( b <= a ) {

        formValido = false

    } else {

        formValido = true

    }

}

numB.addEventListener('keyup', function(e) {

    validaNum(numA.value, numB.value)

    if ( !formValido ) {

        msInput.innerHTML = `O número <b>${numB.value} NÃO</b> é maior que o número <b>${numA.value}</b>!`
        numB.classList.add('error')
        msInput.style.display = 'block'

    } else {

        msInput.innerHTML = ''
        numB.classList.remove('error')
        msInput.style.display = 'none'

        if ( msSubmit.style.display === 'block' ) {

            msSubmit.style.display = 'none'

        }

    }

})

form.addEventListener('submit', function(e) {

    e.preventDefault()

    validaNum(numA.value, numB.value)

    if ( formValido ) {
        
        msSubmit.innerHTML = `<center>Tudo certo!</center><center>O número <b>${numB.value}</b> é maior que o número <b>${numA.value}</b>!</center>`
        msSubmit.style.backgroundColor = 'green'
        msSubmit.style.display = 'block'

    } else {

        msSubmit.innerHTML = `<center>Atenção!</center><center>O número <b>${numB.value} NÃO</b> é maior que o número <b>${numA.value}</b>!</center>`
        msSubmit.style.backgroundColor = 'red'
        msSubmit.style.display = 'block'

    }
})