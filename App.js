

$(function() {
    $('#click').on("click", function () {
        const c1 = $('#color1').val();
        const c2 = $('#color2').val();
        $('body').css('background',`linear-gradient(to bottom right, ${c1}, ${c2})`)        
    })});