<?php


    $to = "cinno162@gmail.com";
    $from = trim($POST)['email'];
    if(mail($to, $feedback)){
        echo 'Ваше письмо доставлено!'
    } else{
        echo 'Ваше письмо не доставлено:('
    }
?>