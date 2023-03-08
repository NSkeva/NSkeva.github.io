<?php

    $name = $_POST['ime'];
    $email = $_POST['email'];
    $broj = $_POST['broj'];
    $message = $_POST['poruka']

    $mailheader = "Od:".$name."<".$email.">\r\n";

    $recipient = "proyektconsulting@gmail.com";
    mail($recipient, "Novi klijent", $message, $mailheader) or die("Greška!");

    echo"Poruka je poslana";
?>