let formContainer = document.getElementById("info-form-div"); 

window.addEventListener('load', getInfo(2), false);

function getInfo($id) {
    formContainer.innerHTML += '';
    fetch('http://studenter.miun.se/~saan1906/writeable/dt173g/CV_project/CV_Backend/api/infoApi.php?id=' + $id, {
        method: 'GET',
    })
    .then(response => response.json())
    .then (data => {
        //get info to update
        data.forEach(info => {
            formContainer.innerHTML +=
            `<form action="" method="get" id="infoForm" name="infoForm">
                <label for="name">Name:</label><br>
                <input type="text" name="name" id="info-name" value="${info.name !== "" ? info.name : ""}"><br>
                <label for="lastname">Lastname:</label><br>
                <input type="text" name="lastname" id="info-lastname" value="${info.lastname !== "" ? info.lastname : ""}"><br>
                <label for="email">Email:</label><br>
                <input type="text" name="email" id="info-email" value="${info.email !== "" ? info.email : ""}"><br>
                <label for="phone">Phone:</label><br>
                <input type="text" name="phone" id="info-phone" value="${info.phone !== "" ? info.phone : ""}"><br>
                <label for="linkedin">LinkedIn:</label><br>
                <input type="text" name="linkedin" id="info-linkedin" value="${info.linkedin !== "" ? info.linkedin : ""}"><br>
                <label for="introduction">Introduction text:</label><br>
                <input type="textarea" name="introduction" id="info-introduction" value="${info.introduction !== "" ? info.introduction : ""}"><br>
                <label for="description">Description:</label><br>
                <input type="textarea" name="description" id="info-description" value="${info.description !== "" ? info.description : ""}"><br>
                <input class="submit-btn" type="submit" id="infoBtn" form="infoForm" value="Update info" onClick="updateInfo(${info.id})">
            </form>`
        })
    })
    .catch((err) => console.log(err));    
}

//update info
function updateInfo($id) {
        
    //form data variables for update info
    let name = document.getElementById("info-name");
    let lastname = document.getElementById("info-lastname");
    let email = document.getElementById("info-email");
    let phone = document.getElementById("info-phone");
    let linkedin = document.getElementById("info-linkedin");
    let introduction = document.getElementById("info-introduction");
    let description = document.getElementById("info-description");


    //get value from form data
    name = name.value;
    lastname = lastname.value;
    email = email.value;
    phone = phone.value;
    linkedin = linkedin.value;
    introduction = introduction.value;
    description = description.value;

    //Update info with PUT
    fetch('http://studenter.miun.se/~saan1906/writeable/dt173g/CV_project/CV_Backend/api/infoApi.php?id=' + $id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            'id' : $id,
            'name' : name,
            'lastname' : lastname,
            'email' : email,
            'phone' : phone,
            'linkedin' : linkedin,
            'introduction' : introduction,
            'description' : description
        }),
    })
        .then(response => response.json())
        .then(data => {
            getInfo();
        })
        //send message if error
        .catch(err => {
            console.log(err)
        })
}
