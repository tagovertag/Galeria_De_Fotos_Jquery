//primeira forma de adicionar um evento a um elemento
$(document).ready(function() {
/*  console.log(document.querySelector('header button'));
    console.log($('#botao-cancelar'));

    document.querySelector('header button').addEventListener('click', function(e) {
    })*/

    $('header button').click(function(){
        $('form').slideDown();
        //slideDown abre o formulário
    })
    $('#botao-cancelar').click(function(){
        $('form').slideUp();
        //slideUp recolhe o formulário
    })
    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoDaNovaImg = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style = "display: none"></li>');
        $(`<img src= "${enderecoDaNovaImg}" />`).appendTo(novoItem)

        $(`<div class = "overlay-imagem-link">

            <a href = "${enderecoDaNovaImg}" target = "black" title = "ver imagem em tamanho real">
            ver imagem em tamanho real
        </a>
        </div>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#endereco-imagem-nova').val('')
    })
})

