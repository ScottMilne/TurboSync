<?php

$data = file_get_contents('php://input'); //get audio blob

$fp = fopen("../../inbox/audio.txt", "wb");
fwrite($fp, $data);
fclose($fp);


?>