const today = new Date();

const thisYear = today.getFullYear();

const footer = document.querySelector('footer');

const copyright = document.createElement('p');

copyright.innerHTML = `Pankti Rana© ${thisYear}`;

footer.appendChild(copyright);

const skills = ["JAVASCRIPT", "HTML" , "CSS", "GITHUB"];

const skillsSection = document.querySelector('#Skills');

const skillsList = skillsSection.querySelector('ul');


for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
};

const messageForm = document.querySelector('[name= leave_message]');

messageForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;
    console.log(`name: ${name}, email: ${email}, message: ${message}`);

    const messageSection = document.querySelector('#messages');

    const messageList = messageSection.querySelector('ul');
    
    const newMessage = document.createElement('li');
    
    newMessage.innerHTML = `<a href="mailto:${email}">${name} </a><span>${message}</span>`;
    
    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.setAttribute('type', 'button');
    removeButton.addEventListener('click', function(event) {
       const entry = event.target.parentNode;
       entry.remove();
    });
    
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);   

    messageForm.reset();
});

const projectSection = document.querySelector('#projects');

fetch('https://api.github.com/users/panktir/repos')
.then((response) => response.json())
.then(data)
    function data(repo) {
        for (let i = 0; i < repo.length; i++) {
            let projectList = document.createElement("li");
            projectList.innerHTML = repo[i].name;
            projectList.classList.add("projects");
            projectSection.appendChild(projectList);

        

    }
    }
