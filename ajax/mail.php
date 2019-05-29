<?php
/*$name = $_POST['name'];
$email = $_POST['mail'];
$phone = $_POST['phone'];
$message = $_POST['mesag'];*/

$name = trim(strip_tags($_POST['name']));
$mail = trim(strip_tags($_POST['mail']));
$phone = trim(strip_tags($_POST['phone']));
$massage = trim(strip_tags($_POST['mesag']));

$subject = "=?utf-8?B?".base64_encode("Повідомлення із сайту декору.")."?=";
$headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/html; charset=utf-8\r\n";

$text = $name + '  ' + $phone + '  ' + $message;


$success = mail("loren.decor@ukr.net", $subject, $massage, $headers);
echo $success;

?>