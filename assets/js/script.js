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