<?php
$recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
$recaptcha_secret = '6LdFO4QUAAAAAOotYWZ3OtmOg3MHVHwJ7brUoAe0';
$recaptcha_response = $_POST['recaptcha_response'];
   // Make and decode POST request:
      $recaptcha = file_get_contents($recaptcha_url . '?secret=' . $recaptcha_secret . '&response=' . $recaptcha_response);
      $recaptcha = json_decode($recaptcha);
      // Take action based on the score returned:
      if ($recaptcha->score >= 0.5) 
      {
      echo "Poruka je poslata" . "<br>";     
      echo "Sadrzaj poruke :" . "<br>";      
      echo $_POST['message'] ;
      } 
      else 
      {
       echo "Nije verifikovano";
      }


?>