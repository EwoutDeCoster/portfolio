function fillProjects() {
  fetch("/assets/js/data.json")
    .then((response) => response.json())
    .then((response) => {
      const projects = response.projects;
      console.log(projects);
      let i = 0;
      while (i < projects.length) {
        document.getElementById("proj").insertAdjacentHTML(
          "beforeend",
          `
            <div class="col-md-6 col-lg-4">
            <div class="card border-0"><a href="${projects[i].src}" target="_blank"><img class="card-img-top scale-on-hover" src="${projects[i].img}" alt="Card Image"></a>
                <div class="card-body">
                    <h6><a href="#">${projects[i].title}</a></h6>
                    <p class="text-muted card-text">${projects[i].description}</p>
                </div>
            </div>
        </div>`
        );
        i += 1;
      }
    });
}

function init() {
  console.log("test");
  fillProjects();
}

window.onload = init;
