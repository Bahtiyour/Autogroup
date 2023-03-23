<?php
    if($Post['feedback'] == 1){
        $feedback = 'Имя';
    }
    elseif($Post['feedback'] == 2){
        $feedback = 'Телефон';
    }
    elseif($Post['feedback'] == 3){
        $feedback = 'Город';
    }
    elseif($Post['feedback'] == 4){
        $feedback = 'E-Mail';
    } else{
        $feedback = 'Ничего не заполнено:(';
    }

    $to = "cinno162@gmail.com";
    $from = trim$Post['email'];

    if(mail($to, $feedback)){
        echo 'Ваше письмо доставлено!'
    } else{
         echo 'Ваше письмо не доставлено:('
    }
?>