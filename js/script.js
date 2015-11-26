

$(document).on('ready',function()
{
    var i=0;

   $('.menu').on('click',function()
   {

        if(i==0)
        {
            $('nav').css({display:'block'});
            $( "nav" ).animate({
                opacity: 1,
                height: "100%"
            },500, function() {
                $(this).css({display:'block'});
            });

            i++;
        }else{
            $( "nav" ).animate({
                opacity: 0,
                height: "0"
            }, 500, function() {
                $(this).css({display:'none'});
            });
            i=0;
        }

   });

    /*============================
     * AUDIOVISUAL
     *========================== */

    $('.pop-up-audiovisual span').on('click',function()
    {
        $( ".pop-up-audiovisual" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer1').src='';
            document.getElementById('VideoPlayer3').src='';
            document.getElementById('VideoPlayer5').src='';
            document.getElementById('VideoPlayer7').src='';
            document.getElementById('VideoPlayer9').src='';
            document.getElementById('VideoPlayer11').src='';
        });

    });
    /*
    ------BORRAR POP UP QUE NO ESTAN SELECCIONADOS
    */

    $('.audiovisual:nth-of-type(2) > section').on('click',function()
    {
        $( ".pop-up-audiovisual:nth-of-type(3)" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer3').src='';
        });
        $( ".pop-up-audiovisual:nth-of-type(5)" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer5').src='';
        });
        $( ".pop-up-audiovisual:nth-of-type(7)" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer7').src='';
        });
        $( ".pop-up-audiovisual:nth-of-type(9)" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer9').src='';
        });
        $( ".pop-up-audiovisual:nth-of-type(11)" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer11').src='';
        });
    });

    $('.audiovisual:nth-of-type(4) > section').on('click',function()
    {
        $( ".pop-up-audiovisual:nth-of-type(1)" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer1').src='';
        });
        $( ".pop-up-audiovisual:nth-of-type(5)" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer5').src='';
        });
        $( ".pop-up-audiovisual:nth-of-type(7)" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer7').src='';
        });
        $( ".pop-up-audiovisual:nth-of-type(9)" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer9').src='';
        });
        $( ".pop-up-audiovisual:nth-of-type(11)" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer11').src='';
        });
    });

    $('.audiovisual:nth-of-type(6) > section').on('click',function()
    {
        $( ".pop-up-audiovisual:nth-of-type(1)" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer1').src='';
        });
        $( ".pop-up-audiovisual:nth-of-type(3)" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer3').src='';
        });
        $( ".pop-up-audiovisual:nth-of-type(7)" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer7').src='';
        });
        $( ".pop-up-audiovisual:nth-of-type(9)" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer9').src='';
        });
        $( ".pop-up-audiovisual:nth-of-type(11)" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer11').src='';
        });
    });

    $('.audiovisual:nth-of-type(8) > section').on('click',function()
    {
        $( ".pop-up-audiovisual:nth-of-type(1)" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer1').src='';
        });
        $( ".pop-up-audiovisual:nth-of-type(3)" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer3').src='';
        });
        $( ".pop-up-audiovisual:nth-of-type(5)" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer5').src='';
        });
        $( ".pop-up-audiovisual:nth-of-type(9)" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer9').src='';
        });
        $( ".pop-up-audiovisual:nth-of-type(11)" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer11').src='';
        });
    });

    $('.audiovisual:nth-of-type(10) > section').on('click',function()
    {
        $( ".pop-up-audiovisual:nth-of-type(1)" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer1').src='';
        });
        $( ".pop-up-audiovisual:nth-of-type(3)" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer3').src='';
        });
        $( ".pop-up-audiovisual:nth-of-type(5)" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer5').src='';
        });
        $( ".pop-up-audiovisual:nth-of-type(7)" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer7').src='';
        });
        $( ".pop-up-audiovisual:nth-of-type(11)" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer11').src='';
        });
    });

    $('.audiovisual:nth-of-type(12) > section').on('click',function()
    {
        $( ".pop-up-audiovisual:nth-of-type(1)" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer1').src='';
        });
        $( ".pop-up-audiovisual:nth-of-type(3)" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer3').src='';
        });
        $( ".pop-up-audiovisual:nth-of-type(5)" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer5').src='';
        });
        $( ".pop-up-audiovisual:nth-of-type(7)" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer7').src='';
        });
        $( ".pop-up-audiovisual:nth-of-type(9)" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer9').src='';
        });
    });

    /*
    ===============abrir pop-up
     */

    $('.audiovisual:nth-of-type(2) > section:nth-of-type(1)').on('click',function()
    {
        $('.pop-up-audiovusual:nth-of-type(1) > section > h2').text('Simon Sein Infográfico');
        $('.pop-up-audiovusual:nth-of-type(1) > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer1').src='https://www.youtube.com/embed/_wlMi6IUDdo';
        $('.pop-up-audiovisual:nth-of-type(1)').css({display:'block'});
        $( ".pop-up-audiovisual:nth-of-type(1)" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.audiovisual:nth-of-type(2) > section:nth-of-type(2)').on('click',function()
    {
        $('.pop-up-audiovusual:nth-of-type(1) > section > h2').text('Reels Simon Sein Branding');
        $('.pop-up-audiovusual:nth-of-type(1) > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer1').src='https://www.youtube.com/embed/XYMbvDGMkTY';
        $('.pop-up-audiovisual:nth-of-type(1)').css({display:'block'});
        $( ".pop-up-audiovisual:nth-of-type(1)" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.audiovisual:nth-of-type(2) > section:nth-of-type(3)').on('click',function()
    {
        $('.pop-up-audiovusual:nth-of-type(1) > section > h2').text('Reels Simon Sein Websites');
        $('.pop-up-audiovusual:nth-of-type(1) > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer1').src='https://www.youtube.com/embed/Py5Zl_PMFQA';
        $('.pop-up-audiovisual:nth-of-type(1)').css({display:'block'});
        $( ".pop-up-audiovisual:nth-of-type(1)" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.audiovisual:nth-of-type(2) > section:nth-of-type(4)').on('click',function()
    {
        $('.pop-up-audiovusual:nth-of-type(1) > section > h2').text('Reels Simon Sein Video Alta');
        $('.pop-up-audiovusual:nth-of-type(1) > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer1').src='https://www.youtube.com/embed/TLK7DxLQaTg';
        $('.pop-up-audiovisual:nth-of-type(1)').css({display:'block'});
        $( ".pop-up-audiovisual:nth-of-type(1)" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.audiovisual:nth-of-type(2) > section:nth-of-type(5)').on('click',function()
    {
        $('.pop-up-audiovusual:nth-of-type(1) > section > h2').text('Simon Sein');
        $('.pop-up-audiovusual:nth-of-type(1) > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer1').src='https://www.youtube.com/embed/_wlMi6IUDdo';
        $('.pop-up-audiovisual:nth-of-type(1)').css({display:'block'});
        $( ".pop-up-audiovisual:nth-of-type(1)" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });

    $('.audiovisual:nth-of-type(4) > section:nth-of-type(1)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('VUR');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer3').src='https://www.youtube.com/embed/PES7_gqrCcg';
        $('.pop-up-audiovisual:nth-of-type(3)').css({display:'block'});
        $( ".pop-up-audiovisual:nth-of-type(3)" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.audiovisual:nth-of-type(4) > section:nth-of-type(2)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('Subió la papa');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer3').src='https://www.youtube.com/embed/gNHb8GJsVXA';
        $('.pop-up-audiovisual:nth-of-type(3)').css({display:'block'});
        $( ".pop-up-audiovisual:nth-of-type(3)" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.audiovisual:nth-of-type(4) > section:nth-of-type(3)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('CET Colsubsidio ');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer3').src='https://www.youtube.com/embed/WzYAn2oS_gc';
        $('.pop-up-audiovisual:nth-of-type(3)').css({display:'block'});
        $( ".pop-up-audiovisual:nth-of-type(3)" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.audiovisual:nth-of-type(4) > section:nth-of-type(4)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('LEED');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer3').src='https://www.youtube.com/embed/MfW6XHhiqvs';
        $('.pop-up-audiovisual:nth-of-type(3)').css({display:'block'});
        $( ".pop-up-audiovisual:nth-of-type(3)" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.audiovisual:nth-of-type(4) > section:nth-of-type(5)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('Eco Ciudades ');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer3').src='https://www.youtube.com/embed/mPm4jCysVEI';
        $('.pop-up-audiovisual:nth-of-type(3)').css({display:'block'});
        $( ".pop-up-audiovisual:nth-of-type(3)" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });

    $('.audiovisual:nth-of-type(6) > section:nth-of-type(1)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('CET Colsubsidio');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer5').src='https://www.youtube.com/embed/twqAhhzACsY';
        $('.pop-up-audiovisual:nth-of-type(5)').css({display:'block'});
        $( ".pop-up-audiovisual:nth-of-type(5)" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.audiovisual:nth-of-type(6) > section:nth-of-type(2)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('CET Colsubsidio');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer5').src='https://www.youtube.com/embed/uaai-mNVR-A';
        $('.pop-up-audiovisual:nth-of-type(5)').css({display:'block'});
        $( ".pop-up-audiovisual:nth-of-type(5)" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.audiovisual:nth-of-type(6) > section:nth-of-type(3)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('CET Colsubsidio');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer5').src='https://www.youtube.com/embed/fB2v1yEOKPE';
        $('.pop-up-audiovisual:nth-of-type(5)').css({display:'block'});
        $( ".pop-up-audiovisual:nth-of-type(5)" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.audiovisual:nth-of-type(6) > section:nth-of-type(4)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('CET Colsubsidio');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer5').src='https://www.youtube.com/embed/6HYSKovKtqY';
        $('.pop-up-audiovisual:nth-of-type(5)').css({display:'block'});
        $( ".pop-up-audiovisual:nth-of-type(5)" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.audiovisual:nth-of-type(6) > section:nth-of-type(5)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('CET Colsubsidio');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer5').src='https://www.youtube.com/embed/QP3zg67hCDk';
        $('.pop-up-audiovisual:nth-of-type(5)').css({display:'block'});
        $( ".pop-up-audiovisual:nth-of-type(5)" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });

    $('.audiovisual:nth-of-type(8) > section:nth-of-type(1)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('CET Colsubsidio');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer7').src='https://www.youtube.com/embed/IAurkM0wWN8';
        $('.pop-up-audiovisual:nth-of-type(7)').css({display:'block'});
        $( ".pop-up-audiovisual:nth-of-type(7)" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.audiovisual:nth-of-type(8) > section:nth-of-type(2)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('CET Colsubsidio ');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer7').src='https://www.youtube.com/embed/e8s5yG9HxEw';
        $('.pop-up-audiovisual:nth-of-type(7)').css({display:'block'});
        $( ".pop-up-audiovisual:nth-of-type(7)" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.audiovisual:nth-of-type(8) > section:nth-of-type(3)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('CET Colsubsidio ');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer7').src='https://www.youtube.com/embed/UDh67T7IK0Y';
        $('.pop-up-audiovisual:nth-of-type(7)').css({display:'block'});
        $( ".pop-up-audiovisual:nth-of-type(7)" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.audiovisual:nth-of-type(8) > section:nth-of-type(4)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('CET Colsubsidio Inglés');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer7').src='https://www.youtube.com/embed/E4G_1pNHNec';
        $('.pop-up-audiovisual:nth-of-type(7)').css({display:'block'});
        $( ".pop-up-audiovisual:nth-of-type(7)" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.audiovisual:nth-of-type(8) > section:nth-of-type(5)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('SrPack');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer7').src='https://player.vimeo.com/video/104927569';
        $('.pop-up-audiovisual:nth-of-type(7)').css({display:'block'});
        $( ".pop-up-audiovisual:nth-of-type(7)" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });

    $('.audiovisual:nth-of-type(10) > section:nth-of-type(1)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('Ambiental Colsubsidio');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer9').src='https://www.youtube.com/embed/Ai0tTA28MDA';
        $('.pop-up-audiovisual:nth-of-type(9)').css({display:'block'});
        $( ".pop-up-audiovisual:nth-of-type(9)" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.audiovisual:nth-of-type(10) > section:nth-of-type(2)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('Piscilago');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer9').src='https://www.youtube.com/embed/3Rq6SwFVnAg';
        $('.pop-up-audiovisual:nth-of-type(9)').css({display:'block'});
        $( ".pop-up-audiovisual:nth-of-type(9)" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.audiovisual:nth-of-type(10) > section:nth-of-type(3)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('Stop Hoteles');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer9').src='https://www.youtube.com/embed/3a6n0ltMnmo';
        $('.pop-up-audiovisual:nth-of-type(9)').css({display:'block'});
        $( ".pop-up-audiovisual:nth-of-type(9)" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.audiovisual:nth-of-type(10) > section:nth-of-type(4)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer9').src='images/fotografia/fotografia1.jpg';
        $('.pop-up-audiovisual:nth-of-type(9)').css({display:'block'});
        $( ".pop-up-audiovisual:nth-of-type(9)" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.audiovisual:nth-of-type(10) > section:nth-of-type(5)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer9').src='images/fotografia/fotografia2.jpg';
        $('.pop-up-audiovisual:nth-of-type(9)').css({display:'block'});
        $( ".pop-up-audiovisual:nth-of-type(9)" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });


    $('.audiovisual:nth-of-type(12) > section:nth-of-type(1)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer11').src='images/fotografia/fotografia3.jpg';
        $('.pop-up-audiovisual:nth-of-type(11)').css({display:'block'});
        $( ".pop-up-audiovisual:nth-of-type(11)" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.audiovisual:nth-of-type(12) > section:nth-of-type(2)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer11').src='images/fotografia/fotografia4.jpg';
        $('.pop-up-audiovisual:nth-of-type(11)').css({display:'block'});
        $( ".pop-up-audiovisual:nth-of-type(11)" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.audiovisual:nth-of-type(12) > section:nth-of-type(3)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('SrPack');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer11').src='https://player.vimeo.com/video/104919312';
        $('.pop-up-audiovisual:nth-of-type(11)').css({display:'block'});
        $( ".pop-up-audiovisual:nth-of-type(11)" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.audiovisual:nth-of-type(12) > section:nth-of-type(4)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('Animación');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer11').src='https://www.youtube.com/embed/oO4NqrKzvRg';
        $('.pop-up-audiovisual:nth-of-type(11)').css({display:'block'});
        $( ".pop-up-audiovisual:nth-of-type(11)" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.audiovisual:nth-of-type(12) > section:nth-of-type(5)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('3D');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer11').src='https://www.youtube.com/embed/oO4NqrKzvRg';
        $('.pop-up-audiovisual:nth-of-type(11)').css({display:'block'});
        $( ".pop-up-audiovisual:nth-of-type(11)" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });


    /*============================
    * REELS
    *========================== */

    $('.pop-up-reels span').on('click',function()
    {
        $( ".pop-up-reels" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer').src='';
        });

    });

    $('.reels > section:nth-of-type(1)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('Simon Sein Infográfico');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
        '');
        document.getElementById('VideoPlayer').src='https://www.youtube.com/embed/_wlMi6IUDdo';
        $('.pop-up-reels').css({display:'block'});
        $( ".pop-up-reels" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.reels > section:nth-of-type(2)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('Reels Simon Sein Branding');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
        '');
        document.getElementById('VideoPlayer').src='https://www.youtube.com/embed/XYMbvDGMkTY';
        $('.pop-up-reels').css({display:'block'});
        $( ".pop-up-reels" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.reels > section:nth-of-type(3)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('Reels Simon Sein Websites');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
        '');
        document.getElementById('VideoPlayer').src='https://www.youtube.com/embed/Py5Zl_PMFQA';
        $('.pop-up-reels').css({display:'block'});
        $( ".pop-up-reels" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.reels > section:nth-of-type(4)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('Reels Simon Sein Video Alta');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
        '');
        document.getElementById('VideoPlayer').src='https://www.youtube.com/embed/TLK7DxLQaTg';
        $('.pop-up-reels').css({display:'block'});
        $( ".pop-up-reels" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });

    /*============================
     * MOTION
     *========================== */

    $('.pop-up-motion span').on('click',function()
    {
        $( ".pop-up-motion" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer1').src='';
            document.getElementById('VideoPlayer3').src='';
            document.getElementById('VideoPlayer5').src='';
            document.getElementById('VideoPlayer7').src='';
        });

    });

    /*

   ------ABRIR POP-UP DEL PRIMERA LINEA
     */


    $('.motion:nth-of-type(2) > section:nth-of-type(1)').on('click',function()
    {

        $('.pop-up-content > section > h2').text('Simon Sein ');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer1').src='https://www.youtube.com/embed/_wlMi6IUDdo';
        $('.pop-up-motion:nth-of-type(1)').css({display:'block'});
        $( ".pop-up-motion:nth-of-type(1)" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.motion:nth-of-type(2) > section:nth-of-type(2)').on('click',function()
    {

        $('.pop-up-content > section > h2').text('VUR ');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer1').src='https://www.youtube.com/embed/PES7_gqrCcg';
        $('.pop-up-motion:nth-of-type(1)').css({display:'block'});
        $( ".pop-up-motion:nth-of-type(1)" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.motion:nth-of-type(2) > section:nth-of-type(3)').on('click',function()
    {

        $('.pop-up-content > section > h2').text('Subió la papa ');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer1').src='https://www.youtube.com/embed/gNHb8GJsVXA';
        $('.pop-up-motion:nth-of-type(1)').css({display:'block'});
        $( ".pop-up-motion:nth-of-type(1)" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.motion:nth-of-type(2) > section:nth-of-type(4)').on('click',function()
    {

        $('.pop-up-content > section > h2').text('CET Colsubsidio ');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer1').src='https://www.youtube.com/embed/WzYAn2oS_gc';
        $('.pop-up-motion:nth-of-type(1)').css({display:'block'});
        $( ".pop-up-motion:nth-of-type(1)" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.motion:nth-of-type(2) > section:nth-of-type(5)').on('click',function()
    {

        $('.pop-up-content > section > h2').text('LEED ');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer1').src='https://www.youtube.com/embed/MfW6XHhiqvs';
        $('.pop-up-motion:nth-of-type(1)').css({display:'block'});
        $( ".pop-up-motion:nth-of-type(1)" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });

    /*

     ------ABRIR POP-UP DEL SEGUNDA LINEA
     */

    $('.motion:nth-of-type(4) > section:nth-of-type(1)').on('click',function()
    {

        $('.pop-up-content > section > h2').text('Eco Ciudades ');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer3').src='https://www.youtube.com/embed/mPm4jCysVEI';
        $('.pop-up-motion:nth-of-type(3)').css({display:'block'});
        $( ".pop-up-motion:nth-of-type(3)" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.motion:nth-of-type(4) > section:nth-of-type(2)').on('click',function()
    {

        $('.pop-up-content > section > h2').text('CET Colsubsidio');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer3').src='https://www.youtube.com/embed/twqAhhzACsY';
        $('.pop-up-motion:nth-of-type(3)').css({display:'block'});
        $( ".pop-up-motion:nth-of-type(3)" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.motion:nth-of-type(4) > section:nth-of-type(3)').on('click',function()
    {

        $('.pop-up-content > section > h2').text('CET Colsubsidio');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer3').src='https://www.youtube.com/embed/uaai-mNVR-A';
        $('.pop-up-motion:nth-of-type(3)').css({display:'block'});
        $( ".pop-up-motion:nth-of-type(3)" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.motion:nth-of-type(4) > section:nth-of-type(4)').on('click',function()
    {

        $('.pop-up-content > section > h2').text('CET Colsubsidio');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer3').src='https://www.youtube.com/embed/fB2v1yEOKPE';
        $('.pop-up-motion:nth-of-type(3)').css({display:'block'});
        $( ".pop-up-motion:nth-of-type(3)" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.motion:nth-of-type(4) > section:nth-of-type(5)').on('click',function()
    {

        $('.pop-up-content > section > h2').text('CET Colsubsidio');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer3').src='https://www.youtube.com/embed/6HYSKovKtqY';
        $('.pop-up-motion:nth-of-type(3)').css({display:'block'});
        $( ".pop-up-motion:nth-of-type(3)" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    /*

     ------ABRIR POP-UP DEL TERCERA LINEA
     */

    $('.motion:nth-of-type(6) > section:nth-of-type(1)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('CET Colsubsidio ');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer5').src='https://www.youtube.com/embed/QP3zg67hCDk';
        $('.pop-up-motion:nth-of-type(5)').css({display:'block'});
        $( ".pop-up-motion:nth-of-type(5)" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.motion:nth-of-type(6) > section:nth-of-type(2)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('CET Colsubsidio ');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer5').src='https://www.youtube.com/embed/IAurkM0wWN8';
        $('.pop-up-motion:nth-of-type(5)').css({display:'block'});
        $( ".pop-up-motion:nth-of-type(5)" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.motion:nth-of-type(6) > section:nth-of-type(3)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('CET Colsubsidio ');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer5').src='https://www.youtube.com/embed/e8s5yG9HxEw';
        $('.pop-up-motion:nth-of-type(5)').css({display:'block'});
        $( ".pop-up-motion:nth-of-type(5)" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.motion:nth-of-type(6) > section:nth-of-type(4)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('CET Colsubsidio ');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer5').src='https://www.youtube.com/embed/UDh67T7IK0Y';
        $('.pop-up-motion:nth-of-type(5)').css({display:'block'});
        $( ".pop-up-motion:nth-of-type(5)" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.motion:nth-of-type(6) > section:nth-of-type(5)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('CET Colsubsidio Inglés ');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer5').src='https://www.youtube.com/embed/E4G_1pNHNec';
        $('.pop-up-motion:nth-of-type(5)').css({display:'block'});
        $( ".pop-up-motion:nth-of-type(5)" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    /*
        ------ABRIR POP-UP DEL CUARTA LINEA
    */

    $('.motion:nth-of-type(8) > section:nth-of-type(1)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('SrPack');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer7').src='https://player.vimeo.com/video/104927569';
        $('.pop-up-motion:nth-of-type(7)').css({display:'block'});
        $( ".pop-up-motion:nth-of-type(7)" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });

    /*
    ------BORRAR POP UP QUE NO ESTAN SELECCIONADOS
    */

    $('.motion:nth-of-type(2) > section').on('click',function()
    {
        $( ".pop-up-motion:nth-of-type(3)" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer3').src='';
        });
        $( ".pop-up-motion:nth-of-type(5)" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer5').src='';
        });
        $( ".pop-up-motion:nth-of-type(7)" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer7').src='';
        });
    });

    $('.motion:nth-of-type(4) > section').on('click',function()
    {
        $( ".pop-up-motion:nth-of-type(1)" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer1').src='';
        });
        $( ".pop-up-motion:nth-of-type(5)" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer5').src='';
        });
        $( ".pop-up-motion:nth-of-type(7)" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer7').src='';
        });
    });

    $('.motion:nth-of-type(6) > section').on('click',function()
    {
        $( ".pop-up-motion:nth-of-type(1)" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer1').src='';
        });
        $( ".pop-up-motion:nth-of-type(3)" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer3').src='';
        });
        $( ".pop-up-motion:nth-of-type(7)" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer7').src='';
        });
    });

    $('.motion:nth-of-type(8) > section').on('click',function()
    {
        $( ".pop-up-motion:nth-of-type(1)" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer1').src='';
        });
        $( ".pop-up-motion:nth-of-type(3)" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer3').src='';
        });
        $( ".pop-up-motion:nth-of-type(5)" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer5').src='';
        });
    });

    /*============================
     * VIDEOS Y COMERCIALES TV
     *========================== */

    $('.pop-up-video span').on('click',function()
    {
        $( ".pop-up-video" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer').src='';
        });

    });

    $('.video > section:nth-of-type(1)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('Ambiental Colsubsidio');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer').src='https://www.youtube.com/embed/Ai0tTA28MDA';
        $('.pop-up-video').css({display:'block'});
        $( ".pop-up-video" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.video > section:nth-of-type(2)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('Piscilago');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer').src='https://www.youtube.com/embed/3Rq6SwFVnAg';
        $('.pop-up-video').css({display:'block'});
        $( ".pop-up-video" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.video > section:nth-of-type(3)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('Stop Hoteles');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer').src='https://www.youtube.com/embed/3a6n0ltMnmo';
        $('.pop-up-video').css({display:'block'});
        $( ".pop-up-video" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });

    /*============================
     * FOTOGRAFÍA
     *========================== */

    $('.pop-up-fotografia span').on('click',function()
    {
        $( ".pop-up-fotografia" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer').src='';
        });

    });

    $('.fotografia > section:nth-of-type(1)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer').src='images/fotografia/fotografia1.jpg';
        $('.pop-up-fotografia').css({display:'block'});
        $( ".pop-up-fotografia" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.fotografia > section:nth-of-type(2)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer').src='images/fotografia/fotografia2.jpg';
        $('.pop-up-fotografia').css({display:'block'});
        $( ".pop-up-fotografia" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.fotografia > section:nth-of-type(3)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer').src='images/fotografia/fotografia3.jpg';
        $('.pop-up-fotografia').css({display:'block'});
        $( ".pop-up-fotografia" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.fotografia > section:nth-of-type(4)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer').src='images/fotografia/fotografia4.jpg';
        $('.pop-up-fotografia').css({display:'block'});
        $( ".pop-up-fotografia" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });

    /*============================
     * MULTIMEDIA
     *========================== */

    $('.pop-up-multimedia span').on('click',function()
    {
        $( ".pop-up-multimedia" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer').src='';
        });

    });

    $('.multimedia > section:nth-of-type(1)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('SrPack');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer').src='https://player.vimeo.com/video/104919312';
        $('.pop-up-multimedia').css({display:'block'});
        $( ".pop-up-multimedia" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    /*============================
     * ANIMACIÓN Y 3D
     *========================== */

    $('.pop-up-animacion span').on('click',function()
    {
        $( ".pop-up-animacion" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer').src='';
        });

    });

    $('.animacion > section:nth-of-type(1)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('Animación');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer').src='https://www.youtube.com/embed/oO4NqrKzvRg';
        $('.pop-up-animacion').css({display:'block'});
        $( ".pop-up-animacion" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.animacion > section:nth-of-type(2)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('3D');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer').src='https://www.youtube.com/embed/oO4NqrKzvRg';
        $('.pop-up-animacion').css({display:'block'});
        $( ".pop-up-animacion" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });

    /*============================
     * PANTALLAS
     *========================== */

    $('.pop-up-pantallas span').on('click',function()
    {
        $( ".pop-up-pantallas" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer').src='';
        });

    });

    $('.pantallas > section:nth-of-type(1)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('Pantallas táctiles');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer').src='images/pantallas/pantallas1.jpg';
        $('.pop-up-pantallas').css({display:'block'});
        $( ".pop-up-pantallas" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.pantallas > section:nth-of-type(2)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('Pantallas táctiles');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer').src='images/pantallas/pantallas2.jpg';
        $('.pop-up-pantallas').css({display:'block'});
        $( ".pop-up-pantallas" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.pantallas > section:nth-of-type(3)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('Pantallas táctiles');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer').src='images/pantallas/pantallas3.jpg';
        $('.pop-up-pantallas').css({display:'block'});
        $( ".pop-up-pantallas" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.pantallas > section:nth-of-type(4)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('Pantallas táctiles');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer').src='images/pantallas/pantallas4.jpg';
        $('.pop-up-pantallas').css({display:'block'});
        $( ".pop-up-pantallas" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });

    /*============================
     * APLICACIONES MÓVILES
     *========================== */

    $('.pop-up-aplicaciones span').on('click',function()
    {
        $( ".pop-up-aplicaciones" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer').src='';
        });

    });

    $('.aplicaciones > section:nth-of-type(1)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('De shopping');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer').src='images/aplicaciones/aplicaciones1.jpg';
        $('.pop-up-aplicaciones').css({display:'block'});
        $( ".pop-up-aplicaciones" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.aplicaciones > section:nth-of-type(2)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('De shopping');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer').src='images/aplicaciones/aplicaciones2.jpg';
        $('.pop-up-aplicaciones').css({display:'block'});
        $( ".pop-up-aplicaciones" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.aplicaciones > section:nth-of-type(3)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('De shopping');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer').src='images/aplicaciones/aplicaciones3.jpg';
        $('.pop-up-aplicaciones').css({display:'block'});
        $( ".pop-up-aplicaciones" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.aplicaciones > section:nth-of-type(4)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('De shopping');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer').src='images/aplicaciones/aplicaciones4.jpg';
        $('.pop-up-aplicaciones').css({display:'block'});
        $( ".pop-up-aplicaciones" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });

    /*============================
     * REDES SOCIALES
     *========================== */

    $('.pop-up-redes span').on('click',function()
    {
        $( ".pop-up-redes" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer').src='';
        });

    });

    $('.redes > section:nth-of-type(1)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('Simon sein');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer').src='images/redes/redes1.jpg';
        $('.pop-up-redes').css({display:'block'});
        $( ".pop-up-redes" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.redes > section:nth-of-type(2)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('CET colsubsidio');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer').src='images/redes/redes2.jpg';
        $('.pop-up-redes').css({display:'block'});
        $( ".pop-up-redes" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });

    /*============================
     * DESARROLLO WEB
     *========================== */

    $('.pop-up-desarrollo span').on('click',function()
    {
        $( ".pop-up-desarrollo" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer').src='';
        });

    });

    $('.desarrollo > section:nth-of-type(1)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('Trianon');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer').src='images/desarrollo/desarrollo1.jpg';
        $('.pop-up-desarrollo').css({display:'block'});
        $( ".pop-up-desarrollo" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.desarrollo > section:nth-of-type(2)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('CONEX Chía');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer').src='images/desarrollo/desarrollo2.jpg';
        $('.pop-up-desarrollo').css({display:'block'});
        $( ".pop-up-desarrollo" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.desarrollo > section:nth-of-type(3)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('Chía del futuro');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer').src='images/desarrollo/desarrollo3.jpg';
        $('.pop-up-desarrollo').css({display:'block'});
        $( ".pop-up-desarrollo" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.desarrollo > section:nth-of-type(4)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('Cotexto urbano');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer').src='images/desarrollo/desarrollo4.jpg';
        $('.pop-up-desarrollo').css({display:'block'});
        $( ".pop-up-desarrollo" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.desarrollo > section:nth-of-type(5)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('Vivienda colsubsidio');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer').src='images/desarrollo/desarrollo5.jpg';
        $('.pop-up-desarrollo').css({display:'block'});
        $( ".pop-up-desarrollo" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });

    /*============================
     * MARKETING
     *========================== */

    $('.pop-up-marketing span').on('click',function()
    {
        $( ".pop-up-marketing" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer1').src='';
            document.getElementById('VideoPlayer3').src='';
            document.getElementById('VideoPlayer5').src='';
        });

    });
    /*
     ------BORRAR POP UP QUE NO ESTAN SELECCIONADOS
     */

    $('.marketing:nth-of-type(2) > section').on('click',function()
    {
        $( ".pop-up-marketing:nth-of-type(3)" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer3').src='';
        });
        $( ".pop-up-marketing:nth-of-type(5)" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer5').src='';
        });
        $( ".pop-up-marketing:nth-of-type(7)" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer7').src='';
        });
        $( ".pop-up-marketing:nth-of-type(9)" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer9').src='';
        });
        $( ".pop-up-marketing:nth-of-type(11)" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer11').src='';
        });
    });

    $('.marketing:nth-of-type(4) > section').on('click',function()
    {
        $( ".pop-up-marketing:nth-of-type(1)" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer1').src='';
        });
        $( ".pop-up-marketing:nth-of-type(5)" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer5').src='';
        });
        $( ".pop-up-marketing:nth-of-type(7)" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer7').src='';
        });
        $( ".pop-up-marketing:nth-of-type(9)" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer9').src='';
        });
        $( ".pop-up-marketing:nth-of-type(11)" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer11').src='';
        });
    });

    $('.marketing:nth-of-type(6) > section').on('click',function()
    {
        $( ".pop-up-marketing:nth-of-type(1)" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer1').src='';
        });
        $( ".pop-up-marketing:nth-of-type(3)" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer3').src='';
        });
        $( ".pop-up-marketing:nth-of-type(7)" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer7').src='';
        });
        $( ".pop-up-marketing:nth-of-type(9)" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer9').src='';
        });
        $( ".pop-up-marketing:nth-of-type(11)" ).animate({
            opacity: 0,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
            document.getElementById('VideoPlayer11').src='';
        });
    });
    /*
     ===============abrir pop-up
     */

    $('.marketing:nth-of-type(2) > section:nth-of-type(1)').on('click',function()
    {
        $('.pop-up-marketing:nth-of-type(1) > section > h2').text('Pantallas táctiles');
        $('.pop-up-marketing:nth-of-type(1) > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer1').src='images/pantallas/pantallas1.jpg';
        $('.pop-up-marketing:nth-of-type(1)').css({display:'block'});
        $( '.pop-up-marketing:nth-of-type(1)' ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.marketing:nth-of-type(2) > section:nth-of-type(2)').on('click',function()
    {
        $('.pop-up-marketing:nth-of-type(1) > section > h2').text('Pantallas táctiles');
        $('.pop-up-marketing:nth-of-type(1) > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer1').src='images/pantallas/pantallas2.jpg';
        $('.pop-up-marketing:nth-of-type(1)').css({display:'block'});
        $( ".pop-up-marketing:nth-of-type(1)" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.marketing:nth-of-type(2) > section:nth-of-type(3)').on('click',function()
    {
        $('.pop-up-marketing:nth-of-type(1) > section > h2').text('Pantallas táctiles');
        $('.pop-up-marketing:nth-of-type(1) > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer1').src='images/pantallas/pantallas3.jpg';
        $('.pop-up-marketing:nth-of-type(1)').css({display:'block'});
        $( ".pop-up-marketing:nth-of-type(1)" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.marketing:nth-of-type(2) > section:nth-of-type(4)').on('click',function()
    {
        $('.pop-up-marketing:nth-of-type(1) > section > h2').text('Pantallas táctiles');
        $('.pop-up-marketing:nth-of-type(1) > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer1').src='images/pantallas/pantallas4.jpg';
        $('.pop-up-marketing:nth-of-type(1)').css({display:'block'});
        $( ".pop-up-marketing:nth-of-type(1)" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.marketing:nth-of-type(2) > section:nth-of-type(5)').on('click',function()
    {
        $('.pop-up-marketing:nth-of-type(1) > section > h2').text('De shopping');
        $('.pop-up-marketing:nth-of-type(1) > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer1').src='images/aplicaciones/aplicaciones1.jpg';
        $('.pop-up-marketing:nth-of-type(1)').css({display:'block'});
        $( ".pop-up-marketing:nth-of-type(1)" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });

    $('.marketing:nth-of-type(4) > section:nth-of-type(1)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('De shopping');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer3').src='images/aplicaciones/aplicaciones2.jpg';
        $('.pop-up-marketing:nth-of-type(3)').css({display:'block'});
        $( ".pop-up-marketing:nth-of-type(3)" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.marketing:nth-of-type(4) > section:nth-of-type(2)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('De shopping');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer3').src='images/aplicaciones/aplicaciones3.jpg';
        $('.pop-up-marketing:nth-of-type(3)').css({display:'block'});
        $( ".pop-up-marketing:nth-of-type(3)" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.marketing:nth-of-type(4) > section:nth-of-type(3)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('De shopping ');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer3').src='images/aplicaciones/aplicaciones4.jpg';
        $('.pop-up-marketing:nth-of-type(3)').css({display:'block'});
        $( ".pop-up-marketing:nth-of-type(3)" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.marketing:nth-of-type(4) > section:nth-of-type(4)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('Simon sein');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer3').src='images/redes/redes1.jpg';
        $('.pop-up-marketing:nth-of-type(3)').css({display:'block'});
        $( ".pop-up-marketing:nth-of-type(3)" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.marketing:nth-of-type(4) > section:nth-of-type(5)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('CET colsubsidio ');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer3').src='images/redes/redes2.jpg';
        $('.pop-up-marketing:nth-of-type(3)').css({display:'block'});
        $( ".pop-up-marketing:nth-of-type(3)" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });

    $('.marketing:nth-of-type(6) > section:nth-of-type(1)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('Trianon');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer5').src='images/desarrollo/desarrollo1.jpg';
        $('.pop-up-marketing:nth-of-type(5)').css({display:'block'});
        $( ".pop-up-marketing:nth-of-type(5)" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.marketing:nth-of-type(6) > section:nth-of-type(2)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('CONEX Chía');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer5').src='images/desarrollo/desarrollo2.jpg';
        $('.pop-up-marketing:nth-of-type(5)').css({display:'block'});
        $( ".pop-up-marketing:nth-of-type(5)" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.marketing:nth-of-type(6) > section:nth-of-type(3)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('Chía del futuro');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer5').src='images/desarrollo/desarrollo3.jpg';
        $('.pop-up-marketing:nth-of-type(5)').css({display:'block'});
        $( ".pop-up-marketing:nth-of-type(5)" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.marketing:nth-of-type(6) > section:nth-of-type(4)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('Cotexto urbano');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer5').src='images/desarrollo/desarrollo4.jpg';
        $('.pop-up-marketing:nth-of-type(5)').css({display:'block'});
        $( ".pop-up-marketing:nth-of-type(5)" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });
    $('.marketing:nth-of-type(6) > section:nth-of-type(5)').on('click',function()
    {
        $('.pop-up-content > section > h2').text('Vivienda colsubsidio');
        $('.pop-up-content > section > p').text('' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit dolor, suscipit quis ultricies ac, accumsan ac erat. Ut at pellentesque metus. Maecenas lobortis turpis nisi, eu consectetur tellus luctus vitae. Aenean in nulla ornare, egestas lacus vitae, sodales odio. Aenean a est at lacus commodo venenatis a hendrerit sem. Mauris ultrices eleifend magna a iaculis. Cras at luctus felis. Quisque eu tincidunt lorem. Maecenas tempor risus tempor mi congue, ut vestibulum turpis volutpat. Proin lobortis erat nec purus blandit sodales. Suspendisse potenti. Donec a augue odio. Suspendisse faucibus, purus ut imperdiet suscipit, nulla est mollis lorem, eu imperdiet tortor metus a mi. Vestibulum molestie iaculis eros, non tempor augue imperdiet malesuada. Cras tempus quam justo, ut consectetur felis dapibus et. Aenean tellus lacus, rutrum sit amet lorem at, finibus maximus ex. Sed nec lacus sit amet massa vulputate dapibus sed ac nulla. Vivamus luctus, magna id interdum laoreet, ligula neque viverra urna, et consectetur elit dolor ut risus. Praesent cursus, ligula ut congue gravida, lectus leo suscipit ante, vitae bibendum erat lorem at mauris. In varius rhoncus maximus. Quisque ultricies vitae dolor et sagittis. Quisque vestibulum placerat turpis, a varius mi efficitur a. Aenean et eros facilisis, tempor sem sit amet, vulputate nibh.' +
            '');
        document.getElementById('VideoPlayer5').src='images/desarrollo/desarrollo5.jpg';
        $('.pop-up-marketing:nth-of-type(5)').css({display:'block'});
        $( ".pop-up-marketing:nth-of-type(5)" ).animate({
            opacity: 1,
            height: "400px"
        }, 500, function() {
            $(this).css({display:'block'});
        });
    });

    /*============================
     * CAMPAÑAS PUBLICITARIAS
     *========================== */

    $('.close').on('click',function()
    {
        $( ".campañas-slider" ).animate({
            opacity: 1,
            height: "0"
        }, 500, function() {
            $(this).css({display:'none'});
        });

    });

    $('.campañas >section:nth-of-type(1)').on('click',function()
    {
        $( ".campañas-slider" ).css({display:'none'});
        $( ".campañas-slider:nth-of-type(1)" ).animate({
            opacity: 1,
            height: "100%"
        },0, function() {
            $(this).css({display:'block'});
        });

    });
    $('.campañas >section:nth-of-type(2)').on('click',function()
    {
        $( ".campañas-slider" ).css({display:'none'});
        $( ".campañas-slider:nth-of-type(2)" ).animate({
            opacity: 1,
            height: "100%"
        },0, function() {
            $(this).css({display:'block'});
        });

    });
    $('.campañas >section:nth-of-type(3)').on('click',function()
    {
        $( ".campañas-slider" ).css({display:'none'});
        $( ".campañas-slider:nth-of-type(3)" ).animate({
            opacity: 1,
            height: "100%"
        },0, function() {
            $(this).css({display:'block'});
        });

    });
    $('.campañas >section:nth-of-type(4)').on('click',function()
    {
        $( ".campañas-slider" ).css({display:'none'});
        $( ".campañas-slider:nth-of-type(4)" ).animate({
            opacity: 1,
            height: "100%"
        },0, function() {
            $(this).css({display:'block'});
        });

    });
    $('.campañas >section:nth-of-type(5)').on('click',function()
    {
        $( ".campañas-slider" ).css({display:'none'});
        $( ".campañas-slider:nth-of-type(5)" ).animate({
            opacity: 1,
            height: "100%"
        },0, function() {
            $(this).css({display:'block'});
        });

    });
    $('.campañas >section:nth-of-type(6)').on('click',function()
    {
        $( ".campañas-slider" ).css({display:'none'});
        $( ".campañas-slider:nth-of-type(6)" ).animate({
            opacity: 1,
            height: "100%"
        },0, function() {
            $(this).css({display:'block'});
        });

    });
    $('.campañas >section:nth-of-type(7)').on('click',function()
    {
        $( ".campañas-slider" ).css({display:'none'});
        $( ".campañas-slider:nth-of-type(7)" ).animate({
            opacity: 1,
            height: "100%"
        },0, function() {
            $(this).css({display:'block'});
        });

    });
    $('.campañas >section:nth-of-type(8)').on('click',function()
    {
        $( ".campañas-slider" ).css({display:'none'});
        $( ".campañas-slider:nth-of-type(8)" ).animate({
            opacity: 1,
            height: "100%"
        },0, function() {
            $(this).css({display:'block'});
        });

    });
    $('.campañas >section:nth-of-type(9)').on('click',function()
    {
        $( ".campañas-slider" ).css({display:'none'});
        $( ".campañas-slider:nth-of-type(9)" ).animate({
            opacity: 1,
            height: "100%"
        },0, function() {
            $(this).css({display:'block'});
        });

    });
    $('.campañas >section:nth-of-type(10)').on('click',function()
    {
        $( ".campañas-slider" ).css({display:'none'});
        $( ".campañas-slider:nth-of-type(10)" ).animate({
            opacity: 1,
            height: "100%"
        },0, function() {
            $(this).css({display:'block'});
        });

    });




});

$(window).load(function() {
    $('.flexslider').flexslider(
        {
            controlNav: false,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
            directionNav: true,             //Boolean: Create navigation for previous/next navigation? (true/false)
            prevText: "Previous",           //String: Set the text for the "previous" directionNav item
            nextText: "Next",
            direction: "horizontal",
            animation: "slide",
        });
});