<?php

	header("Access-Control-Allow-Origin: *");
	require 'PHPMailerAutoload.php';

	$nome = $_POST['nome'];
	$email = $_POST['email'];
	$body = 		
				'Esta mensagem foi enviada pelo site.'.
				'<br/><br/>'.
				'Nome: '.$nome.
				'<br/>'.
				'E-mail: '.$email.
				'<br/>'.
				'Mensagem: '.$_POST['mensagem'];

	$mail = new PHPMailer;

	$mail->isSMTP();
	$mail->Host = 'smtp.gmail.com';
	$mail->SMTPAuth = true;
	$mail->Username = 'email@email.com';
	$mail->Password = 'senha';
	$mail->SMTPSecure = 'tls';
	$mail->Port = 587;

	$mail->CharSet  = "UTF-8";
	$mail->From = $email;
	$mail->FromName = $nome;
	$mail->addAddress('email@email.com', 'Protarget');
	$mail->addReplyTo('email@email.com', 'Protarget');
	$mail->addBCC('email@email.com'); 
	$mail->addBCC('email@email.com');
	$mail->addBCC('email@email.com');

	$mail->isHTML(true);

	$mail->Subject = 'Protarget - Site';
	$mail->Body    = $body;
	$mail->AltBody = $body;

	if(!$mail->send()) {
	    echo 'Mailer Error: ' . $mail->ErrorInfo;
	}

?>