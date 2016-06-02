<?php
if($_SERVER['REQUEST_METHOD'] == 'POST')
	{
		$error = 0;
		$name = $_POST['name'];
		$email = $_POST['email'];
		$message = $_POST['message'];

		if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $error = 0;
    } else {
      $error = 1;
    }

		if($error == 0){
			$to = 'your_email@domain.com';
      $subject = 'Email from your website';
      $message = $message;
      $headers = 'From:'.$email . "\r\n" .
      'Reply-To: '. $email . "\r\n" .
      'X-Mailer: PHP/' . phpversion();
      mail($to, $subject, $message, $headers);
			echo "The email has been sent! We will contact you soon!";
		}else{
			echo "The fields are not valid.";
		}

	}else{
		echo "Sorry there was an error and the email was not sent.";
	}
