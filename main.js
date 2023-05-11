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
  { name: "Project 1",
    description: "Fix code in box"},
  { name: 'Project 2',
    description: "Come up with names"},
  { name: 'Project 3',
    description: "List items in array"},
  { name: 'Project 4',
    description: "Thank the Moms"}
];

function projectsOnDom(projectArr) {
  let domString = "";
  for (const proj of projectArr) {
    domString += `<div class="card" style="width:18rem;">
      <div class="card-body">
      <p class="card-text">${proj.name}</p>
      <p class="card-text">${proj.description}</p>
      </div>
    </div>`;
  };

  renderToDom("Project-List", domString);
}
projectsOnDom(projects);

const formButton = document.querySelector("createNewProjectButton");

const renderForm = () => {
  const form = `
  <form>
    <div class="createNewProject">
      <label for="exampleInputName1" class="form-label"> Project Board Name</label>
      <input type="name" class="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Example 2">
      <div id="nameHelp" class="form-text"></div>
    </div>
    <button type="submit" class="createNewProjectButton">Create Project</button>
  </form>
  `
  renderToDOM('createNewProject', form);
}

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
