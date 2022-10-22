jQuery('document').ready(function ($) {
    var botonMenu = $('.menu-icono'),
        menu = $('.menu ul');

    botonMenu.click(function () {
        if (menu.hasClass('show')) { menu.removeClass('show'); }
        else { menu.addClass('show'); }
    });
});


var typewriter = document.getElementById('typewriter');
var typewriter = new Typewriter(typewriter, {
    loop: true,
    delay: 75
});
typewriter.pauseFor(100)
    .typeString('<strong>Desarrollador web</strong>')
    .pauseFor(1000)
    .deleteChars(17)
    .typeString('Técnico informático')
    .pauseFor(1000)
    .deleteChars(19)
    .typeString('Egresado de Ingeniería de Sistemas')
    .pauseFor(1000)
    .deleteChars(35)
    .typeString('Programador .NET')
    .pauseFor(1000)
    .start();
