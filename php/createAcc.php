<?php

if (!isset($_GET["username"])) {
    exit();
}

require "db_repository.php";

$username = $_GET["username"];
$email = $_GET["email"];
$password = $_GET["password"];
$name = $_GET["name"];

$password = "gear" . $password;

$stmt = $conn->prepare("INSERT INTO `user` (`name`, `username`, `password`) VALUES (?, ?, MD5(?))");
$stmt->bind_param("sss", $name,$username, $password);
$stmt->execute();

$msg = "Your gear.mng data: 
username: " . $username . "
email: " . $email;
$subject = "Your gear.mng data";

//Import PHPMailer classes into the global namespace
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

require "../vendor/autoload.php";

$mail = new PHPMailer;

$mail->isSMTP();

$mail->SMTPDebug = SMTP::DEBUG_SERVER;

$mail->Host = 'smtp.gmail.com';

$mail->Port = 587;

$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;

$mail->SMTPAuth = true;

$mail->Username = 'besicschule@gmail.com';

$mail->Password = '!test123';

$mail->setFrom('besicschule@gmail.com', 'gear.mng');

$mail->addReplyTo('besicmeris@gmail.com', 'gear.mng');

$mail->addAddress($email, $name);

$mail->Subject = $subject;

$mail->msgHTML($msg);

$mail->AltBody = 'This is a plain-text message body';

if (!$mail->send()) {
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message sent!';
}

function save_mail($mail)
{
    $path = '{imap.gmail.com:993/imap/ssl}[Gmail]/Sent Mail';
    $imapStream = imap_open($path, $mail->Username, $mail->Password);
    $result = imap_append($imapStream, $path, $mail->getSentMIMEMessage());
    imap_close($imapStream);

    return $result;
}


echo $username;

$conn->close();
