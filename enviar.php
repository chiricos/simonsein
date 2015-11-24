<?php

    if(isset($_POST['contacto'])){
        $name=$_POST['name'];
        $email=$_POST['email'];
        $message=$_POST['message'];
        $obj= new Enviar();
        $errorName=$obj->errorEmpty($name);
        $errorEmail=$obj->errorEmpty($email);
        $errorMessage=$obj->errorEmpty($message);
        $errorEmail=$obj->errorEmail($email,$errorEmail);
        $message=$obj->validationComplete($errorName,$errorEmail,$errorMessage);
    }else{

    }
    class Enviar
    {
        public function errorEmpty($value)
        {
            if($value=='')
            {
                return '* El campo es obligatorio';
            }
            return '';
        }
        public function errorEmail($value,$value1)
        {

            if($value1=='')
            {
                if (filter_var($value, FILTER_VALIDATE_EMAIL)) {
                    return '';
                }
                return '* El correo esta mal escrito';
            }
            return $value1;
        }
        public function validationComplete($value1,$value2,$value3)
        {
            if($value1=='' and $value2=='' and $value3=='')
            {
                $this->send();
                $_POST['name']='';
                $_POST['email']='';
                $_POST['message']='';
                return 'Sus datos han sido enviados correctamente.';
            }
        }

        private $mensaje;
        public function sendMessaje($mensaje)
        {
            $this->mensaje=$mensaje;
        }
        public function getMessage()
        {
            return $this->mensaje;
        }

        public function send(){

            date_default_timezone_set('Etc/UTC');
            require 'vendor/phpmailer/phpmailer/PHPMailerAutoload.php';
//Create a new PHPMailer instance
            $mail = new PHPMailer;
            $mail->isSMTP();                                      // Set mailer to use SMTP
            $mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
            $mail->SMTPAuth = true;                               // Enable SMTP authentication
            $mail->Username = 'bancaqabi@gmail.com';                 // SMTP username
            $mail->Password = 'bancaqabi123456';                           // SMTP password
            $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
            $mail->Port = 587;                                    // TCP port to connect to
            $mail->From = 'webmaster@simonsein.com';
            $mail->FromName = 'correo de la pagina de simonsein.com';
            $mail->addAddress('webmaster@simonsein.com', 'webmaster');     // Add a recipient
            $mail->addAddress('webmaster@simonsein.com');               // Name is optional
            $mail->addReplyTo('webmaster@simonsein.com', 'webmaster');
            $mail->addCC('webmaster@simonsein.com');
            $mail->addBCC('webmaster@simonsein.com');
// Set email format to HTML
            $mail->Subject = 'correo de la pagina de simonsein.com';
            $mail->Body    = '<h1>Simon sein</h1>
            <table>
                <tbody>
                    <tr>
                        <td>Nombre:</td>
                        <td>'.$_POST['name'].'</td>
                    </tr>
                    <tr>
                        <td>Correo:</td>
                        <td>'.$_POST['email'].'</td>
                    </tr>

                    <tr>
                        <td>Mensaje:</td>
                        <td>'.$_POST['message'].'</td>
                    </tr>
                </tbody>
            </table>
               ';
            $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
            $enviar=new enviar();
            if(!$mail->send()) {
                $enviar->sendMessaje("El correo no fue enviado");
                header('location:contacto.php');
            } else {
                $enviar->sendMessaje('El correo fue enviado correctemente');
                header('location:contacto.php');
            }

        }
    }

