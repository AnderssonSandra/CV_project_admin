<?php
include("config/database.php");
//klass för att hantera användare och inlogggning
class User {
    private $db;
    private $username;
    private $password;
    //anslut till databas
    function __construct() {
        $this->db = new mysqli(SERVERNAME, USERNAME, PASSWORD, DBNAME);
        if($this->db->connect_errno > 0) {
            die("fel vid anslutning till databasen" . $db->connect_error);
        }
    }

    //login funktion
    public function login ($username, $password) {
        $username=$this->db->real_escape_string($username);
        $password=$this->db->real_escape_string($password);
        $sql="SELECT * from cv_user WHERE username='$username' AND password='$password'";

       $result = $this->db->query($sql);
       $count_row = $result->num_rows;

       if($count_row > 0) {
           $_SESSION['username'] = $username;
           return true;
       } else {
           return false;
       }
   }
}
?>