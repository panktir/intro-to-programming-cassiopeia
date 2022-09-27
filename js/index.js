const today = new Date();

const thisYear = today.getFullYear();

const footer = document.querySelector('footer');

const copyright = document.createElement('p');

copyright.innerHTML = `Pankti Rana© ${thisYear}`;

footer.appendChild(copyright);

const skills = ["Javascript", "HTML" , "CSS"];

const skillsSection = document.querySelector('#Skills');

const skillsList = skillsSection.querySelector('ul');


for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}