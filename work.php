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
    <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Peddana&display=swap" rel="stylesheet">
</head>    
<body>
    <header class="admin-header">
        <h1>Your Account</h1>
    </header>
    <nav class="admin-main-nav">
        <ul>
            <li><a href="about.php">About me.</a></li>
            <li><a href="education.php">Education.</a></li>
            <li><a class="active" href="work.php">Work Experiences.</a></li>
            <li><a href="project.php">Projects.</a></li>
        </ul>
    </nav>
    <section>
        <article>
            <h2 class="admin-h2">Add Work Experience.</h2>
            <form action="" method="get" id="workForm" name="workForm">
                <label for="title">Title:</label><br>
                <input type="text" id="work-form-title" name="title"><br>
                <label for="Workplace">Workplace:</label><br>
                <input type="text" id="work-form-workplace" name="workplace"><br>
                <label for="startDate">Start Date:</label><br>
                <input type="date" id="work-form-startDate" name="startDate"><br>
                <label for="endDate">End Date:</label><br>
                <input type="date" id="work-form-endDate" name="endDate"><br>
                <label for="buzzwords">Buzzwords:</label><br>
                <input type="text" id="work-form-buzzwords" name="buzzwords"><br>
                <label for="description">Description:</label><br>
                <input type="textarea" id="work-form-description" name="description"><br>
                <input class="submit-btn" type="submit" id="add-work-btn" form="workForm" value="Add Work">
                <div id="message-div-work">
                    <!--Message div-->
                </div>
            </form>
            <div id="update-div">
                <!--Div where the update info goes-->
            </div>
        </article>
        <article>
            <h2 class="admin-h2">My Work Experiences.</h2>
            <div class="admin-show-experience" id="admin-show-work">
                <!--my works gonna be here-->
            </div>
        </article>
    </section>
    <footer class="admin-footer">
        <a class="admin-footer-text" href="logout.php">Click here to sign out</a>
    </footer>
</body>
<script src="js/work.js"></script>
</html>