<?php

$data = file_get_contents('php://input'); //get audio blob

$fp = fopen("audio.wav", "wb");
fwrite($fp, $data);
fclose($fp);


?>