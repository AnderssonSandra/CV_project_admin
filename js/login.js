//submit login
function submitlogin() {
    var form =document.login;
    if (form.email.value == "") {
        altert("skriv in användarnamn");
        return false;
    } else {
        if(form.password.value == "") {
            alert("Skriv in lösenord");
            return false;
        }
    }
}