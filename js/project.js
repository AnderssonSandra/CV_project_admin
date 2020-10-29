'use strict'
//variables for project
let projectContainer = document.getElementById("admin-show-project"); // container where project show
let errorDiv = document.getElementById("error-div");
let messageDiv = document.getElementById("message-div-project");
let addprojectBtn = document.getElementById("add-project-btn");
let updateContainer = document.getElementById("update-div"); 

//form data variables for project
let nameInput = document.getElementById("project-form-name");
let linkInput = document.getElementById("project-form-link");
let githubInput = document.getElementById("project-form-github");
let techniquesInput = document.getElementById("project-form-techniques");
let startDateInput = document.getElementById("project-form-startDate");
let endDateInput = document.getElementById("project-form-endDate");
let descriptionInput = document.getElementById("project-form-description");

//Event listeners for project
window.addEventListener('load', getProjects, false);

if (addprojectBtn) {
    addprojectBtn.addEventListener('click', addProject);
} 

//functions for project
//Show projects
function getProjects() {
    projectContainer.innerHTML = '';
    messageDiv.innerHTML = '';
    //show project with GET
    fetch('http://studenter.miun.se/~saan1906/writeable/dt173g/CV_project/CV_Backend/api/projectApi.php', {
        method: 'GET',
    })
    .then(response => {
        if (response.status === 404) {
            throw response;
        } 
            return response.json();
    })       
    .then(data => { 
        data.forEach(projects => {
            projectContainer.innerHTML +=
            `<div class="admin-experience">
                <h3>Name of Project:</h3>
                <p>${projects.name}</p>
                <h3>Link to Website:</h3>
                <p>${projects.link !== "" ? projects.link : "Finns ingen länk till sida"}</p>
                <h3>Link to Github Repo:</h3>
                <p>${projects.github !== "" ? projects.github : "Finns ingen länk till github Repo"}</p>
                <h3>Techniques</h3>
                <p>${projects.techniques !== "" ? projects.techniques : "Inga angivna Tekniker"}</p>
                <h3>Date:</h3>
                <p>${projects.startDate}  to  ${projects.endDate !== null ? projects.endDate : "Ongoing"}</p>
                <h3>Description</h3>
                <p>${projects.description}</p>
                <button class="submit-btn" onClick="getOneProject(${projects.id})">Uppdatera</button>
                <button class="submit-btn" onClick="deleteProject(${projects.id})">Radera</button>
                <div id="error-div">
                    <!--Error div-->
                </div>
            </div>`
        })
    })
    //send message if error
    .catch(err => {
        console.log(err)
        projectContainer.innerHTML = `<p id="errorMsg">Lägg till projekt för att se några projekt här</p>`;
    })   
}

//add project
function addProject(event) {
    event.preventDefault();
    
    //value from form
    let name = nameInput.value;
    let link = linkInput.value;
    let github = githubInput.value;
    let techniques = techniquesInput.value;
    let startDate = startDateInput.value;
    let endDate = endDateInput.value;
    let description = descriptionInput.value;

    //create project with POST
    fetch('http://studenter.miun.se/~saan1906/writeable/dt173g/CV_project/CV_Backend/api/projectApi.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            'name' : name,
            'link' : link,
            'github' : github,
            'techniques' : techniques,
            'startDate' : startDate,
            'endDate' : endDate,
            'description' : description
        }),
    })
    .then(response => response.json())
    .then(data => {
        getProjects();
        nameInput.value = "";
        linkInput.value = "";
        githubInput.value = "";
        techniquesInput.value = "";
        startDateInput.value = "";
        endDateInput.value = "";
        descriptionInput.value = "";
    })
    //send message if error
    .catch(err => {
        console.log(err)
        messageDiv.innerHTML = `<p id="errorMsg">Kunde inte lägga till Projectet</p>`;
    })
}

//delete project
function deleteProject($id) {
    fetch('http://studenter.miun.se/~saan1906/writeable/dt173g/CV_project/CV_Backend/api/projectApi.php?id=' + $id, {
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        method: 'DELETE',
    })
    .then(response => response.json())
    .then (data => {
        //get projects again to update
        getProjects()
    })
    .catch((err) => console.log(err));
}

function getOneProject($id, event) {
    event.preventDefault();

    fetch('http://studenter.miun.se/~saan1906/writeable/dt173g/CV_project/CV_Backend/api/projectApi.php?id=' + $id, {
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        method: 'GET',
    })
    .then(response => response.json())
    .then(updateContainer.style.display = 'block')
    .then (data => {
        //get educations again to update
        data.forEach(project => {
            updateContainer.innerHTML +=
            `<div id="cv-admin-popup" class="cv-popup active">
            <form action="" method="get" class="update-form" id="projectUpdateForm" name="projectUpdateForm">
                <label for="name">Name of Project:</label><br>
                <input type="text" id="project-update-name" value="${project.name}" name="name"><br>
                <label for="link">Link to Website:</label><br>
                <input type="text" id="project-update-link" value="${project.link}" name="link"><br>
                <label for="github">Link to Github Repo:</label><br>
                <input type="text" id="project-update-github" value="${project.github}" name="github"><br>
                <label for="techniques">Techniques:</label><br>
                <input type="text" id="project-update-techniques" value="${project.techniques}" name="techniques"><br>
                <label for="startDate">Start Date for project:</label><br>
                <input type="date" id="project-update-startDate" value="${project.startDate}" name="startDate"><br>
                <label for="endDate">Relese Date for project:</label><br>
                <input type="date" id="project-update-endDate" value="${project.endDate}" name="endDate"><br>
                <label for="description">Description:</label><br>                
                <input type="textarea" id="project-update-description" value="${project.description}" name="description"><br>
                <input class="submit-btn" type="submit" id="update-project-btn" form="projectUpdateForm" value="Update Project" onClick="updateProject(${project.id})">
                <input class="submit-btn" type="submit" id="update-project-btn" form="projectUpdateForm" value="Close" onClick="closeUpdateDiv()">
                <div id="message-div">
                    <!--Message div-->
                </div>
            </form>
            </div>
            <!--overlay for popups-->
            <div id="overlay" class="active"></div>`

        })
    })
    .catch((err) => console.log(err));
}

//update project
function updateProject($id) {
        
    //form data variables for update project
    let nameUpdate = document.getElementById("project-update-name");
    let linkUpdate = document.getElementById("project-update-link");
    let githubUpdate = document.getElementById("project-update-github");
    let techniquesUpdate = document.getElementById("project-update-techniques");
    let startDateProjectUpdate = document.getElementById("project-update-startDate");
    let endDateProjectUpdate = document.getElementById("project-update-endDate");
    let descriptionProjectUpdate = document.getElementById("project-update-description");

    //get value from form data
    nameUpdate = nameUpdate.value;
    linkUpdate = linkUpdate.value;
    githubUpdate = githubUpdate.value;
    techniquesUpdate = techniquesUpdate.value;
    startDateProjectUpdate = startDateProjectUpdate.value;
    endDateProjectUpdate = endDateProjectUpdate.value;
    descriptionProjectUpdate = descriptionProjectUpdate.value;

    //Update project with PUT
    fetch('http://studenter.miun.se/~saan1906/writeable/dt173g/CV_project/CV_Backend/api/projectApi.php?id=' + $id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            'id' : $id,
            'name' : nameUpdate,
            'link' : linkUpdate,
            'github' : githubUpdate,
            'techniques' : techniquesUpdate,
            'startDate' : startDateProjectUpdate,
            'endDate' : endDateProjectUpdate,
            'description' : descriptionProjectUpdate
        }),
    })
    .then(response => response.json())
    .then(data => {
        getProjects();
    })
    //send message if error
    .catch(err => {
        console.log(err)
    })
}

//close update div
function closeUpdateDiv() {
    updateContainer.style.display = 'none'
}