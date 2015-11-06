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
            console.log('entro');
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

});