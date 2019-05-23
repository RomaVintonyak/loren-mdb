<?php
    $name = $_POST['name'];
    $email = $_POST['mail'];
    $phone = $_POST['phone'];
    $message = $_POST['mesag'];

    $subject = "=?utf-8?B?".base64_encode("Повідомлення із сайту декору.")."?=";
    $headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/html; charset=utf-8\r\n";
    $text = $name + '  ' + $phone + '  ' + $message;

    $good = "Повідомлення успішно відправлене";
    $bad = "Не вірний формат даних. Заповніть усі поля коректно та спробуйте ще раз.";

    $success = mail("loren.decor@ukr.net", $subject, $text, $headers);
    if ($success === true){
        echo $good;
    }else{
        echo $bad;
    }

?>