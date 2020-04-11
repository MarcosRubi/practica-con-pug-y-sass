    $(document).ready(function(){
        $("#menu ul li:nth-child(4)").click(function(){
             $("#menu ul ul").css("display","block");
             $("#menu ul ul").css("position","relative");
        });
        
    });
    function mobile() {
        $( "nav.menu" ).toggleClass( "toggle" );
    };
 

