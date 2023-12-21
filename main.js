$(document).ready(function() {
    
    $('form').on('submit', function(e) {

        e.preventDefault()

        const tarefa = $('form input').val()
        const addTarefa = `<li onclick="$(this).addClass('concluida')">${tarefa}</li>`

        $(addTarefa).appendTo('ul')
        $('form input').val('')

    })
    
})