$(document).ready(function() {
  const skillsList = [
    "HTML5",
    "CSS3",
    "Sass",
    "Bootstrap ",
    "JavaScript",
    "Jquery",
    "Ajax",
    "Php",
    "MySQL",
    "Git and GitHub"
  ];

  let skillsListContainer = "";

  skillsList.map(list => {
    console.log(list);
    skillsListContainer += `<p> ${list}</p>`;
  });

  $(".skills-list").html(skillsListContainer);
});
