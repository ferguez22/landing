$(document).ready(function() {
    // Animación para la sección de información personal
    $('.info-personal').show();

    // Animación para la sección de tecnologías
    $('.tecnologias').show();

    // Animación para la sección de proyectos
    $('.proyectos').show();

    // Animación para la sección de curriculum
    $('.curriculum').show();

    // Animación para los proyectos individuales al hacer hover
    $('.proyecto').hover(
        function() {
            $(this).animate({ marginTop: "-10px" }, 300);
        },
        function() {
            $(this).animate({ marginTop: "0px" }, 300);
        }
    );

    // Función para verificar la visibilidad de las secciones
    function checkVisibility() {
        $('section').each(function() {
            var sectionTop = $(this).offset().top;
            var sectionHeight = $(this).outerHeight();
            var scrollTop = $(window).scrollTop();
            var windowHeight = $(window).height();

            if (scrollTop + windowHeight > sectionTop + sectionHeight / 4 && scrollTop < sectionTop + sectionHeight) {
                $(this).addClass('visible');
            } else {
                $(this).removeClass('visible');
            }
        });
    }

    // Ejecutar la función al cargar la página y al hacer scroll
    $(window).on('scroll', checkVisibility);
    checkVisibility();
});
