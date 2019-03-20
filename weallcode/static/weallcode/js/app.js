$(document).foundation()

$(document).ready(function() {
  $('a[href*="#"]').click(function(e) {
    e.preventDefault();

    const val = $(this).attr('href');
    const id = val.substr(val.indexOf('#'));

    $([document.documentElement, document.body]).animate({
      scrollTop: $(id).offset().top
    }, 1500);
  });
});