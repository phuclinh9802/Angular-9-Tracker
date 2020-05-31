var height = $(".navbar").height();

$(window).scroll(function () {
    if ($(this).scrollTop > height) {
        $(".navbar").addClass("fixed");
    }
})