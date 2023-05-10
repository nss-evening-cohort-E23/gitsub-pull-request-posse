const renderToDom = (divId, htmltoRender) => {
  let targetedDiv = document.getElementById(divId);
  targetedDiv.innerHTML = htmltoRender;
};

const reposCardsOnDom = () => {
  let domString =
    "<div><input type='text' id='findRepo' placeholder='Find a repository...'></div>";

  repos.forEach((repo) => {
    domString += ``;
  });
};

const repos = [
  {
    name: "serious-coding-project",
    description: "a very super serious coding project",
    tags: ["react", "javascript", "superCode", "vim"],
    language: "JavaScript",
    stars: 500,
    branches: 70,
    issues: 0,
    updatedDate: "2023-05-08",
    starred: false,
  },
];
const projects = [
  { name: 'Project 1'},
  { name: 'Project 2'},
  { name: 'Project 3'},
  { name: 'Project 4'},
];

const projectsOnDom = (projectArr) => {
  let domString = "";
  for (const proj of projectArr) {
    domString += `<div class="card" style="width:18rem;">
      <div class="card-body">
      <p class="card-text">${proj.name}</p>
      </div>
    </div>`;
  };

  renderToDom("Project-List", domString);
};
projectsOnDom(projects);

// whateverElement.addEventListener("event type", () => {
//   const searchInput = document.querySelector('.input')
//   const clearButton = document.getElementById('clear')

//   searchInput.addEventListener("input", (e) => {
//     let value = e.target.value

//     if (value && value.trim().length > 0){
//          value = value.trim().toLowerCase()
//     } else {
//     }
//   }); 

//   clearButton.addEventListener("click", () => {
//   });
// }); 

// projectsOnDom();
