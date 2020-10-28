let accountContainer = document.getElementById("account-form-div"); //account details

window.addEventListener('load', getUser(1), false); //ändra så att 1 är id från användaren sen

function getUser($id) {
    fetch('http://localhost/CV_project/CV_Backend/api/userApi.php?id=' + $id, {
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        method: 'GET',
    })
    .then(response => response.json())
    .then (data => {
        //get users again to update
        data.forEach(user => {
            accountContainer.innerHTML +=
            `<form action="" method="get" id="userForm" name="userForm">
                <label for="username">Username:</label><br>
                <input type="text" name="username" id="user-username" value="${user.username}"><br>
                <label for="password">Password:</label><br>
                <input type="text" name="password" id="user-password" value="${user.password}"><br>
                <input class="submit-btn" type="submit" id="userBtn" form="userForm" value="Update info" onClick="updateUser(${user.id})">
            </form>`
        })
    })
    .catch((err) => console.log(err));
}

//update user
function updateUser($id) {
        
    //form data variables for update user
    let username = document.getElementById("user-username");
    let password = document.getElementById("user-password");

    //get value from form data
    username = username.value;
    password = password.value;

    //Update user with PUT
    fetch('http://localhost/CV_project/CV_Backend/api/userApi.php?id=' + $id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            'id' : $id,
            'password' : password
        }),
    })
    .then(response => response.json())
    .then(data => {
        getUser();
    })
    //send message if error
    .catch(err => {
        console.log(err)
    })
}
