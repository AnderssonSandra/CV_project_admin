<?php
include("config/database.php");
//klass för att hantera användare och inlogggning
class User {
    private $db;
    private $email;
    private $password;
    //anslut till databas
    function __construct() {
        $this->db = new mysqli(SERVERNAME, USERNAME, PASSWORD, DBNAME);
        if($this->db->connect_errno > 0) {
            die("fel vid anslutning till databasen" . $db->connect_error);
        }
    }

    //login funktion
    public function login ($email, $password) {
        $email=$this->db->real_escape_string($email);
        $password=$this->db->real_escape_string($password);
        $sql="SELECT * from cv_user WHERE email='$email' AND password='$password'";

       $result = $this->db->query($sql);
       $count_row = $result->num_rows;

       if($count_row > 0) {
           $_SESSION['email'] = $email;
           return true;
       } else {
           return false;
       }
   }

}

?>