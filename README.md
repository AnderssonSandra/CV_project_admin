# CV_project_admin
Sida som används för att administrera 

## PHP filer
* **about.php:** Sidan är låst, man måste vara inloggad för att nå den. Innehåller information om användaren som är inloggad samt allmän information som används i portfolion. Formulären skapas och med informaiton i med hjälp av anrop till REST API med hjälp av fetch. Informationen och användaren kan uppdateras. 
* **education.php:** Sidan är låst, man måste vara inloggad för att nå den. Innehåller formulär för att skapa ny utbildnings-post. Hämtar även de poster som finns och visar upp dem. Finns möjlighet att uppdatera samt radera posterna.
* **login.php.:** innehåller ett formulär för att logga in och komma åt övriga sidor. PHP sessions används för inloggning.
* **logout.php:** Används för att logga ut PHP Sessionen. Man skickas till denna via "sign out" länkarna och så avbryts sessionen. 
* **project.js:** Sidan är låst, man måste vara inloggad för att nå den. Innehåller formulär för att skapa ny projekt-post. Hämtar även de poster som finns och visar upp dem. Finns möjlighet att uppdatera samt radera posterna.
* **work.js:** Sidan är låst, man måste vara inloggad för att nå den. Innehåller formulär för att skapa ny arbetserfarenhet-post. Hämtar även de poster som finns och visar upp dem. Finns möjlighet att uppdatera samt radera posterna.


## JS filer
* **about.js:** innehåller funktion för att hämta användare baserat på id med hjälp av fetch api och visa upp de i formulär. Innehåller även funktion för att uppdatera användare med hjälp av fetch api, ett id skickas med värdena som tas in från formuläret.  
* **education.js:** innehåller funktionalitet för att hämta alla utbildnings-poster och visa upp i div, hämta en utbildnings-post och visa upp i formulär, lägga till utbildnings-post med data från formulär, uppdatera utbildnings-post med data från formulär samt radera utbildnings-post. Allt görs medd fetch och anrop mot REST API med antingen POST, GET, UPDATE eller DELETE.
* **info.js:** innehåller funktion för att hämta information baserat på id med hjälp av fetch api och visa upp de i formulär. Innehåller även funktion för att uppdatera information med hjälp av fetch api, ett id skickas med värdena som tas in från formuläret.
* **login.js:** innehåller funktion som kollar om användaren skrivit in användarnamn och lösenord i formuläret när hen ska logga in och returnerar meddelande om någon av de inte är ifyllt. 
* **project.js:** innehåller funktionalitet för att hämta alla projekt-poster och visa upp i div, hämta en projekt-post och visa upp i formulär, lägga till projekt-post med data från formulär, uppdatera projekt-post med data från formulär samt radera projekt-post. Allt görs medd fetch och anrop mot REST API med antingen POST, GET, UPDATE eller DELETE.
* **work.js:** innehåller funktionalitet för att hämta alla arbetserfarenhet-poster och visa upp i div, hämta en arbetserfarenhet-post och visa upp i formulär, lägga till arbetserfarenhet-post med data från formulär, uppdatera arbetserfarenhet-post med data från formulär samt radera arbetserfarenhet-post. Allt görs medd fetch och anrop mot REST API med antingen POST, GET, UPDATE eller DELETE.


## LOGIN
PHP sessions används för inloggning på sidan. Användarnamn och lösenord tas in från formuläret och så kollar de om det finns i databasen som connectas till med hjälp av MySQLi teknik. Om de finns och stämmer överens med varandra returneras true och en session skapas. Om det inte är rätt användarnamn och lösenord skickas false tillbaka och ingen session skapas. Det görs sedan en koll på alla sidor om sessionen finns och då når man sidan annars skickas men till login-sidan.
