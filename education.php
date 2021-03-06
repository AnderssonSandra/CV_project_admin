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
    <title>Education</title>
    <link rel="stylesheet" href="css/styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Peddana&display=swap" rel="stylesheet"></head>
<body>
    <header class="admin-header">
        <h1>Your Account</h1>
    </header>
    <nav class="admin-main-nav">
        <ul>
            <li><a href="about.php">About me.</a></li>
            <li><a class="active" href="education.php">Education.</a></li>
            <li><a href="work.php">Work Experiences.</a></li>
            <li><a href="project.php">Projects.</a></li>
        </ul>
    </nav>
    <section>
        <article>
            <h2 class="admin-h2">Add Education.</h2>
            <form action="" method="get" id="educationForm" name="educationForm">
                <label for="education">Name of Education:</label><br>
                <input type="text" name="education" id="education-form-education"><br>
                <label for="school">Name of School:</label><br>
                <input type="text" name="school" id="education-form-school"><br>
                <label for="startDate">Start Date:</label><br>
                <input type="date" name="startDate" id="education-form-startDate"><br>
                <label for="endDate">End Date:</label><br>
                <input type="date" value="" name="endDate" id="education-form-endDate"><br>
                <label for="description">Description:</label><br>
                <input type="textarea" name="description" id="education-form-description"><br>
                <input class="submit-btn" type="submit" id="add-education-btn" form="educationForm" value="Add Education">
                <div id="message-div-education">
                    <!--Message div-->
                </div>
            </form>
            <div id="update-div">
                <!--Div where the update info goes-->
            </div>
        </article>
        <article>
            <h2 class="admin-h2">My Education Experiences.</h2>
            <div class="admin-show-experience" id="admin-show-education">
                <!--my educations gonna be here-->
            </div>
        </article>
    </section>
    <footer class="admin-footer">
        <a class="admin-footer-text" href="logout.php">Click here to sign out</a>
    </footer>
</body>
<script src="js/education.js"></script>
</html>