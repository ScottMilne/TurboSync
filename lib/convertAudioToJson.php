<?php
    if (isset($_POST['convert']))
    {
         echo shell_exec("C:../rhubarb/rhubarb.exe -d ../inbox/audio.txt -f json -o ../outbox/audio.json ../inbox/audio.wav");
    }
 ?>
