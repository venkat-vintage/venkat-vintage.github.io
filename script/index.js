$(document).ready(function () {
    $("#about").click(function (e) {
        $('html, body').animate({
            scrollTop: $("#about_us").offset().top
        }, 500);
    })

    $("#debt_one").click(function (e) {
        $('html, body').animate({
            scrollTop: $("#debt").offset().top
        }, 500);
    })

    $("#due_one").click(function (e) {
        $('html, body').animate({
            scrollTop: $("#due").offset().top
        }, 500);
        e.preventDefault()
    });
    $("#contact").click(function (e) {
        $('html, body').animate({
            scrollTop: $("#contact_us").offset().top
        }, 500);
        e.preventDefault()
    });
    $("#gall").click(function (e) {
        $('html, body').animate({
            scrollTop: $("#gallery").offset().top
        }, 500);
        e.preventDefault()
    });
    $("#get_contact").click(function (e) {
        $('html, body').animate({
            scrollTop: $("#contact_us").offset().top
        }, 500);
        e.preventDefault()
    });
})

