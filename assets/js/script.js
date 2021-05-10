//Agregar scrolling
$(document).ready(function () {
    $('a').on("click", function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});

//Esconder texto tarjetas
$("#tarjeta1").on("click", function () {
    $("#textot1").toggle();
});

$("#tarjeta2").on("click", function () {
    $("#textot2").toggle();
});

$("#tarjeta3").on("click", function () {
    $("#textot3").toggle();
});

$("#tarjeta4").on("click", function () {
    $("#textot4").toggle();
});

//Tooltip inicio, contacto y social media
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

//Alerta vuelos reprogramados
$("#avion").bind("click", function () {
    alert("Debido a la contingencia, los vuelos serán reprogramados. ¡Gracias!");
});

//Alerta reserva
$("#montana").bind("click", function () {
    alert("Reserva a través de nuestro formulario o redes sociales.");
});
$("#ruta").bind("click", function () {
    alert("Reserva a través de nuestro formulario o redes sociales.");
});