$(document).ready(function(){

    $('p').css('color', 'salmon')
    $('h1').css({'font-size': '40px', 'color': 'skyblue'})
    
    $('p').click( function(){
        let text = $(this).attr("title");

        alert(`mengklik lorem ke ${text}`)
    } )

    $('#input').keyup( function() {
        let value = $(this).val();

        $('#empty-input').text(value)
    } )

    $('#add').click(function(){
        $('p#bg').addClass('bg')
    })

    $('#remove').click(function(){
        $('p#bg').removeClass('bg')
    })

    $('#toggle-btn').click(function(){
        $('#toggle-bg').toggleClass('toggleBG')
    })

    $('#biru').click(function(){
        const tinggi = $('#biru').height();
        const lebar = $('#biru').width();
        const tinggi_P = $('#biru').innerHeight();
        const lebar_P = $('#biru').innerWidth();
        const tinggi_B = $('#biru').outerHeight();
        const lebar_B = $('#biru').outerWidth();
        const tinggi_M = $('#biru').outerHeight(true);
        const lebar_M = $('#biru').outerWidth(true);

        $('#p-biru').text( `tinggi dan lebar: ${tinggi}px & ${lebar}px 
                            tiggi dan lebar + Padding: ${tinggi_P}px & ${lebar_P}px 
                            tiggi dan lebar + Padding + Border: ${tinggi_B}px & ${lebar_B}px
                            tiggi dan lebar + Padding + Border + Margin: ${tinggi_M}px & ${lebar_M}px` )

    })

    $('#merah').click(function(){
        const tinggi = $('#merah').height();
        const lebar = $('#merah').width();
        const tinggi_P = $('#merah').innerHeight();
        const lebar_P = $('#merah').innerWidth();
        const tinggi_B = $('#merah').outerHeight();
        const lebar_B = $('#merah').outerWidth();
        const tinggi_M = $('#merah').outerHeight(true);
        const lebar_M = $('#merah').outerWidth(true);

        $('#p-merah').text( `tinggi dan lebar: ${tinggi}px & ${lebar}px 
                            tiggi dan lebar + Padding: ${tinggi_P}px & ${lebar_P}px 
                            tiggi dan lebar + Padding + Border: ${tinggi_B}px & ${lebar_B}px
                            tiggi dan lebar + Padding + Border + Margin: ${tinggi_M}px & ${lebar_M}px` )

    })

    $('#akmal').siblings().css({ "color": "blue" })

    $('#java').nextUntil('#debian').css('font-size', '20px')

    $('#slide').click(function(){
        $('.container-form').fadeToggle(1000)
    })

    $('.input').focus(function(){
        $(this).animate( {width:'300px', marginLeft:'20px'}, 1100 )
        $(this).css({'background-color': 'salmon'})
    })

    $('.input').blur(function(){
        $(this).animate( {width:'200px', marginLeft: '0px'}, 1100 )
        $(this).css({'background-color': 'white'} )
    })

    $(".input").mouseenter(function () { 
        var x = $(this).attr('data-title');

        $(this).after("<div class='tooltip'>"+x+"</div>")
    });
})