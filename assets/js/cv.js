function fillExperience() {
    fetch("/assets/js/data.json")
      .then((response) => response.json())
      .then((response) => {
        const experience = response.experience;
        console.log(experience);
        let i = 0;
        while (i < experience.length) {
          document.getElementById("experience").insertAdjacentHTML(
            "beforeend",
            `
            <div id="exp1" class="item">
            <div class="row">
                <div class="col-md-6">
                    <h3><strong>${experience[i].title}</strong><br></h3>
                    <h4 class="organization">${experience[i].location}</h4>
                </div>
                <div class="col-md-6"><span class="period">${experience[i].timespan}</span></div>
            </div>
            <p class="text-muted">${experience[i].description}&nbsp;<br></p>
        </div>`
          );
          i += 1;
        }
      });
  }

  function fillEducation() {
    fetch("/assets/js/data.json")
      .then((response) => response.json())
      .then((response) => {
        const education = response.education;
        console.log(education);
        let i = 0;
        while (i < education.length) {
          document.getElementById("education").insertAdjacentHTML(
            "beforeend",
            `
            <div id="exp1" class="item">
            <div class="row">
                <div class="col-md-6">
                    <h3><strong>${education[i].title}</strong><br></h3>
                    <h4 class="organization">${education[i].location}</h4>
                </div>
                <div class="col-md-6"><span class="period">${education[i].timespan}</span></div>
            </div>
            <p class="text-muted">${education[i].description}&nbsp;<br></p>
        </div>`
          );
          i += 1;
        }
      });
  }

function fillSkills() {
  fetch("/assets/js/data.json")
  .then((response) => response.json())
  .then((response) => {
    const skills = response.skills;
    console.log(skills);
    let i = 0;
    while (i < skills.length) {
      document.getElementById("skills").insertAdjacentHTML(
        "beforeend",
        `
        <h3>${skills[i].label}</h3>
        <div class="progress">
          <div class="progress-bar" aria-valuenow="${skills[i].percentage}" aria-valuemin="0" aria-valuemax="100" style="width: ${skills[i].percentage}%;"><span class="visually-hidden">${skills[i].percentage}%</span></div>
        </div>`
      );
      i += 1;
    }
  });
}

function replaceHobbies() {
  fetch("/assets/js/data.json")
  .then((response) => response.json())
  .then((response) => {
    document.getElementById("hobbies").innerHTML = response.hobbies
  })
}
  
  function init() {
    fillExperience();
    fillEducation();
    fillSkills();
    replaceHobbies();
  }
  
  window.onload = init;
  