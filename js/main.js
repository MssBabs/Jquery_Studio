$(document).ready(function(){
    $ejercicio1=$("#contenido1Res");
    $ejercicio1.click(function(){
        
        $($ejercicio1).hide(5000,
            function(){
                $($ejercicio1).show(3000,
                    function(){
                        $($ejercicio1).hide(200,
                            function(){
                                $($ejercicio1).show(2000,
                                    function(){
                                        alert("He tardado 2 segundos en mostrarme");
                                    }
                                );
                            }
                        );
                    }
                );
            }
        );
    });

    $ejercicio2=$('button[name="buttonContenido2"]');

    $ejercicio2.mouseenter(
        function(){
            $ejercicio2.fadeTo(400, 0.3);
        }
    );

    $ejercicio2.mouseleave(
        function(){
            $ejercicio2.fadeTo(400,1);
        }
    );

    $ejercicio3=$('button[name="buttonContenido3"]');
    $num=0;
    $ejercicio3.click(function(){
        
        if($num%2==0){
            $ejercicio3.animate({position: 'relative', left: '400px'},'slow');
        }else{
            $ejercicio3.animate({position: 'relative', left: '0px'},'fast');

        }
        $num++;
    })

    $ejercicio51=$("input#check1");
    $ejercicio51.change(
        function(){
            if($ejercicio51.is(":checked")){
                $("#linea1").hide();
            }else{
                $("#linea1").hide().show();
            }
        }
    )
    $ejercicio52=$("input#check2");
    $ejercicio52.change(
        function(){
            if($ejercicio52.is(":checked")){
                $("#linea2").hide();
            }else{
                $("#linea2").hide().show();
            }
        }
    )    
    $ejercicio53=$("input#check3");
    $ejercicio53.change(
        function(){
            if($ejercicio53.is(":checked")){
                $("#linea3").hide();
            }else{
                $("#linea3").hide().show();
            }
        }
    )

    $ejercicio61=$("#asignatura1");
    $ejercicio61.focus(
        function(){
            $ejercicio61.parent().css({color: "red"});
        }
    )
    $ejercicio61.focusout(
        function(){
            $ejercicio61.parent().css({color: "green"});
        }
    )
    $ejercicio62=$("#asignatura2");
    $ejercicio62.focus(
        function(){
            $ejercicio62.parent().css({color: "red"});
        }
    )
    $ejercicio62.focusout(
        function(){
            $ejercicio62.parent().css({color: "green"});
        }
    )
    $ejercicio63=$("#asignatura3");
    $ejercicio63.focus(
        function(){
            $ejercicio63.parent().css({color: "red"});
        }
    )
    $ejercicio63.focusout(
        function(){
            $ejercicio63.parent().css({color: "green"});
        }
    )


    $ejercicio7=$("div.selected > p");
    $ejercicio7.css({"background-color": "yellow"});
});