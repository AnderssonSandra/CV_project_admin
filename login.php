<?php
include_once 'classes/UserClass.php';
if(session_status() == PHP_SESSION_NONE) {
    session_start();
}

if(isset($_SESSION['username'])) {
    header ("Location: about.php");
}

if(isset($_POST['username'])){
   $username=$_POST['username'];
    $password=$_POST['password']; 

    $users = new User();
    if($users->login($username, $password)) {
        header("location: about.php");
    } else $message= "<p class='message'>Wrong username or password, please try again.</p>";

}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Log in</title>
    <link rel="stylesheet" href="css/styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Peddana&display=swap" rel="stylesheet"></head>
<body>
    <header class="admin-header">
        <h1>Login or Create Account</h1>
    </header>
    <section>
        <article>
        <?php
            if(isset($_GET['message'])){
                if($_GET['message'] == 1) {
                    $message= "<p class='message'> You logged out, please login again to edit your portfolio</p>";
                }
                if($_GET['message'] == 2) {
                    $message= "<p class='message'>You need to log in to access the page you just entered</p>";
                }      
            }
            if(isset($message)) {
                echo $message;
            }
            ?>
        </article>
        <article>
            <h2 class="admin-h2">Login</h2>
            <!-- where prompt / messages will appear -->
            <div id="response"></div>
            <form action="login.php" method="post" id="loginForm" name="loginForm">
                <label for="username">username</label><br>
                <input type="text" id="username" name="username" placeholder="Enter your username" required><br>
                <label for="password">Password</label><br>
                <input type="text" id="password" name="password" placeholder="Enter your password" required>
                <input class="submit- btn" type="submit" id="login-button" form="loginForm" value="Log in" onclick="return(submitlogin());">
            </form>
        </article>
    </section>
    <footer class="admin-footer">
        <p class="admin-footer-text">You Have to Login to Build Your Cv</p>
    </footer>
</body>
<script src="js/login.js"></script>
</html>