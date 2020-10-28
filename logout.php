<?php
    session_start();
    session_unset();
    session_destroy();
    header("Location: login.php?message=1");
    exit();

?>