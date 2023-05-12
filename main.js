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
// const projects = [
//   { name: "Project 1",
//     description: "Fix code in box"},
//   { name: 'Project 2',
//     description: "Come up with names"},
//   { name: 'Project 3',
//     description: "List items in array"},
//   { name: 'Project 4',
//     description: "Thank the Moms"}
// ];

// function projectsOnDom(projectArr) {
//   let domString = "";
//   for (const proj of projectArr) {
//     domString += `<div class="card" style="width:18rem;">
//       <div class="card-body">
//       <p class="card-text">${proj.name}</p>
//       <p class="card-text">${proj.description}</p>
//       </div>
//     </div>`;
//   };

//   renderToDom("Project-List", domString);
// }
// projectsOnDom(projects);

// const formButton = document.querySelector("createNewProjectButton");

// const renderForm = () => {
//   const form = `
//   <form>
//     <div class="createNewProject">
//       <label for="exampleInputName1" class="form-label"> Project Board Name</label>
//       <input type="name" class="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Example 2">
//       <div id="nameHelp" class="form-text"></div>
//     </div>
//     <button type="submit" class="createNewProjectButton">Create Project</button>
//   </form>
//   `
//   renderToDOM('createNewProject', form);
// }

// createNewProjectButton.addEventListener('click', renderForm);

// const formSubmission = document.querySelector("createNewProject");

// const createStudent = (e) => {
//   e.preventDefault();
// const form = document.querySelector('form');

// const newProjectObj = {
//   name: document.querySelector("#name").value,
//   description: document.querySelector("#description").value
// };

// projects.push(newProjectObj);
// projectsOnDOM(projects);
// form.reset();
// }

// // form.addEventListener('Create Project', createProject);

// const app = document.querySelector("#app");

// app.addEventListener('click', (e) => {
//   if (e.target.id.includes("create project")) {
//     console.log(index);
//     projectsOnDOM(projects);
//   }
// });

// const start =() => {
//   projectsOnDOM(projects);
// }

// startApp();

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

const formButton = document.querySelector(".createNewProjectButton");

const renderForm = () => {
  const form = `
  <form>
    <div class="createNewProject">
      <label for="exampleInputName1" class="form-label"> Project Board Name</label>
      <input type="name" class="form-control" id="name" aria-describedby="nameHelp" placeholder="Example 2">
      <div id="nameHelp" class="form-text"></div>
    </div>
    <button type="submit" class="createNewProjectButton">Create Project</button>
  </form>
  `
  renderToDom('createNewProject', form);
}

formButton.addEventListener('click', renderForm);

const formSubmission = document.querySelector(".createNewProject");

const createProject = (e) => {
  e.preventDefault();
  const form = document.querySelector('form');

  const newProjectObj = {
    name: document.querySelector("#name").value,
    description: document.querySelector("#description").value
  };

  projects.push(newProjectObj);
  projectsOnDom(projects);
  form.reset();
}

formSubmission.addEventListener('submit', createProject);

const app = document.querySelector("#app");

app.addEventListener('click', (e) => {
  if (e.target.id.includes("create project")) {
    console.log(index);
    projectsOnDom(projects);
  }
});

const startApp = () => {
  projectsOnDom(projects)
};
