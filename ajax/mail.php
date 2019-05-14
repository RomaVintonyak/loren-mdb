<?php
    $name = $_POST['name'];
    $email = $_POST['mail'];
    $phone = $_POST['phone'];
    $message = $_POST['mesag'];

    $subject = "=?utf-8?B?".base64_encode("Повідомлення із сайту декору.")."?=";
    $headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/html; charset=utf-8\r\n";


    $success = mail("loren.decor@ukr.net", $subject, $message, $headers);
    echo $success;
?>