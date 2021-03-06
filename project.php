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
    <title>CV- Project</title>
    <link rel="stylesheet" href="css/styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Peddana&display=swap" rel="stylesheet"></head>
<body>
    <header class="admin-header">
        <h1>Your Account</h1>
    </header>
    <nav class="admin-main-nav">
        <ul>
            <li><a href="about.php">About me.</a></li>
            <li><a href="education.php">Education.</a></li>
            <li><a href="work.php">Work Experiences.</a></li>
            <li><a class="active" href="project.php">Projects.</a></li>
        </ul>
    </nav>
    <section>
        <article>
            <h2 class="admin-h2">Add Project.</h2>
            <form action="" method="get" id="projectForm" name="projectForm">
                <label for="name">Name of Project:</label><br>
                <input type="text" id="project-form-name" name="name"><br>
                <label for="link">Link to Website:</label><br>
                <input type="text" id="project-form-link" name="link"><br>
                <label for="github">Link to Github Repo:</label><br>
                <input type="text" id="project-form-github" name="github"><br>
                <label for="techniques">Techniques:</label><br>
                <input type="text" id="project-form-techniques" name="techniques"><br>
                <label for="startDate">Start Date for project:</label><br>
                <input type="date" id="project-form-startDate" name="startDate"><br>
                <label for="endDate">Relese Date for project:</label><br>
                <input type="date" id="project-form-endDate" name="endDate"><br>
                <label for="description">Description:</label><br>
                <input type="textarea" id="project-form-description" name="description"><br>
                <input class="submit-btn" type="submit" id="add-project-btn" form="projectForm" value="Add Project">
                <div id="message-div-project">
                    <!--Message div-->
                </div>
            </form>
            <div id="update-div">
                <!--Div where the update info goes-->
            </div>
        </article>
        <article>
            <h2 class="admin-h2">My Projects.</h2>
            <div class="admin-show-experience" id="admin-show-project">
                <!--my projects gonna be here-->
            </div>
        </article>
    </section>
    <footer class="admin-footer">
        <a class="admin-footer-text" href="logout.php">Click here to sign out</a>
    </footer>
</body>
<script src="js/project.js"></script>
</html>