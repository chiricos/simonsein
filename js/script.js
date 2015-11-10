window.onload = function() {

    function bgadj(){

        var videoActualWidth = video.getBoundingClientRect().width;
        var videoActualHeight = video.getBoundingClientRect().height;

        var ratio =  videoActualWidth / videoActualHeight;

        if ((window.innerWidth / window.innerHeight) < ratio){

            video.setAttribute("style", "width: auto");
            video.setAttribute("style", "height: 100%");

            <!-- si el vídeo es mas ancho que la ventana lo centro. Esta parte es opcional -->
            if (videoActualWidth > window.innerWidth){

                var ajuste = (window.innerWidth - videoActualWidth)/2;

                video.setAttribute("style", "left:"+ajuste+"px");
            }

        }
        else{

            video.setAttribute("style", "width: 100%");
            video.setAttribute("style", "height: auto");
            video.setAttribute("style", "left: 0");

        }

    }

    <!-- vuelvo a llamar a la función  bgadj() al redimensionar la ventana -->
    window.onresize = function() {
        bgadj();

    }

}

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
            }, 1000, function() {
                $(this).css({display:'block'});
            });

            i++;
        }else{
            $( "nav" ).animate({
                opacity: 0,
                height: "0"
            }, 1000, function() {
                $(this).css({display:'none'});
            });
            i=0;
        }

   });

    /*============================
    * REELS
    *========================== */

    $('.pop-up-reels span').on('click',function()
    {
        $( ".pop-up-content" ).animate({
            opacity: 0,
            height: "0"
        }, 1000, function() {
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
            height: "500px"
        }, 1000, function() {
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
            height: "500px"
        }, 1000, function() {
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
            height: "500px"
        }, 1000, function() {
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
            height: "500px"
        }, 1000, function() {
            $(this).css({display:'block'});
        });
    });


});