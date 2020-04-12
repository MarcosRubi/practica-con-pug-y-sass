    $(document).ready(function(){
        $("#menu ul li:nth-child(4)").click(function(){
             $("#menu ul ul").css("display","block");
             $("#menu ul ul").css("position","relative");
        });
        
   
        //ANIMACION PARA IR AL PRINCIPIO DE LA PAGINA
        $("#up").click({
            scrollTop: 0
        }, 2);                  

    });
    //MOSTRAR SUBMENU
    function mobile() {
        $( "nav.menu" ).toggleClass( "toggle" );
    };