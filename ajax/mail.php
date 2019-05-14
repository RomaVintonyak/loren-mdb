<?php
    $name = $_POST['name'];
    $email = $_POST['mail'];
    $phone = $_POST['phone'];
    $mesag = $_POST['mesag'];




    $success = mail("loren.decor@ukr.net", $subject, $message, $headers);
    echo $success;
?>