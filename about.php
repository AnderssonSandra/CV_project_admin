<?php
//starta sektionen om den inte redan är startad
if(session_status() == PHP_SESSION_NONE) {
    session_start();
}

if(!isset($_SESSION['username'])) {
    header ("Location: login.php?message=2");
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About me</title>
    <link rel="stylesheet" href="css/styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Peddana&display=swap" rel="stylesheet"></head>
<body>
    <header class="admin-header">
        <h1>Your Account</h1>
    </header>
    <nav class="admin-main-nav">
        <ul>
            <li><a class="active" href="about.php">About me.</a></li>
            <li><a href="education.php">Education.</a></li>
            <li><a href="work.php">Work Experiences.</a></li>
            <li><a href="project.php">Projects.</a></li>
        </ul>
    </nav>
    <section>
        <article>
            <h2 class="admin-h2">Account Details</h2>
            <div id="account-form-div">
                <!--Acount form show here-->
            </div>
        </article>
        <article>
            <h2 class="admin-h2">About me</h2>
            <div id="info-form-div">
                <!--About form show here-->
            </div>
        </article>
    </section>
    <footer class="admin-footer">
        <a class="admin-footer-text" href="logout.php">Click here to sign out</a>
    </footer>
</body>
<script src="js/about.js"></script>
<script src="js/info.js"></script>
</html>