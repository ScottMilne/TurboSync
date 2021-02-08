<?php
  session_start();
?>

<!DOCTYPE html>
<html>

<head>
  <title>TurboSync</title>

  <link rel="stylesheet" href ="/~1802324/cmp306/VIEW/css/style.css"> <!-- # -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
  <script src = "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="/~1802324/cmp306/CONTROLLER/api.js"> </script> <!-- # -->

</head>

<body> 

  <!--Navbar-->
    <nav class="navbar navbar-expand-sm bg-dark justify-content-center ">

        <!--Page Title-->
        <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">

            <ul class= " navbar-nav mr-auto text-info">

                <li class = "nav-item nav-text">
                    TurboSync Speech Simulator
                </li>

            <ul>
        </div>

        <!--Links-->
        <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul class="navbar navbar-nav ml-auto">
            
                <!--Home-->
                <li>
                    <a class="nav-link"  href="#" >
                        Home
                    </a> 
                </li>

                <!--Basic Dynamic Website (Block 1)-->
                <li class="nav-item">
                    <a class="nav-link"  href="#" id="login-link">
                        Link
                    </a> 
                </li>

            </ul>
        </div>

    </nav>

    <br/> <br/> 

  <!--Grid-->
  <div class = "container white-font">

    <!--Row 1, Lips-->
    <div class = "row justify-content-center text-center">
        <img src="/~1802324/TurboSync/view/img/lips.jpg" class="img-fluid img-index" alt="lips"> 
    </div> </br>

    <!--Row 2, Text-->
    <div class = "row justify-content-center text-center">

    
    </div> </br>

    <!--Row 3, Button-->
    <div class = "row justify-content-center text-center">
        <img src="/~1802324/TurboSync/view/img/button.jpg" class="img-fluid img-index" alt="Button"> 
    </div>  </br>

  </div>

  <br/>

  <!--Footer-->
  <div class="bg-dark">
    <footer class=" container white-font justify-content-center">
        <h3>
        Wet Behind the Engineers
        </h3>

        <ul>
            <li>Lee Aikenhead 2005251 </li>
            <li>Akash D'Cross 1905942 </li>
            <li>Salomon Ghitis 1802324 </li>
            <li>Scott Milne 1905944 </li>
            <li>James Ireland 1801700 </li>
            <li>Greg Harrison 0100603 </li>
        </ul>
    </footer>
  </div>
</body>