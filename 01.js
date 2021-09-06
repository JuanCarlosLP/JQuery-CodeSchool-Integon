$(() => {
    $('div.poem-stanza').addClass('highlight');
    $('.author').addClass('highlight');
    // Chaining se denomina al encadenar varias actions una despues de otra
    $('#paragraph1').css('color', 'red').css('background-color', 'yellow').slideUp(2000).slideDown(2000);
});