<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$email = $_POST['email'];
$form = $_POST['form'];

$contactFirstName = $_POST['contact-first-name'];
$contactLastName = $_POST['contact-last-name'];
$contactEmail = $_POST['contact-email'];
$contactMessage = $_POST['contact-message'];

// Формирование самого письма для формы contact
if ($form == 'contact-form') {
  $title = "Сообщение на сайте Skater";
  $body = "
  <h3>Новое сообщение</h3>
  <b>First name:</b> $contactFirstName<br>
  <b>Last name:</b> $contactLastName<br>
  <b>Email:</b> $contactEmail<br>
  <b>Message:</b> $contactMessage<br>
  ";
};

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'from@gmail.com'; // Логин на почте
    $mail->Password   = 'password'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('from@gmail.com', 'Jack Shepard'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('to@gmail.com');  

    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
if ($form == 'contact-form') {
  header('Location: phpmailer-contact.html');
};

//echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);