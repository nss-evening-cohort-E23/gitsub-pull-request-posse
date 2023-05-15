const renderToDom = (divId, htmltoRender) => {
  let targetedDiv = document.getElementById(divId);
  targetedDiv.innerHTML = htmltoRender;
};

const navBar = () => {
  let domString = `
  <nav class="navbar navbar-top navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Github</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link active" aria-current="page" href="index.html">Overview</a>
          <a class="nav-link" href="/repos.html">Repositories</a>
          <a class="nav-link" href="/projects.html">Projects</a>
          <a class="nav-link" href="/packages.html">Packages</a>
        </div>
      </div>
    </div>
  </nav>
  `;
  renderToDom("navigate", domString);
};

const footer = () => {
  let domString = `
  <nav class="footer navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="footer">
        <p>@ 2023 GitHub, Inc.</p>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Terms</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Privacy</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Security</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Status</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Help</a>
          </li>
        </ul>
        
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">Contact GitHub</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">API</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Training</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Blog</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
        </ul>
    </div>
  </nav>
  `;
  renderToDom("footer", domString);
};

//function for rendering repo cards to DOM
const reposOnDom = (reposArr) => {
  let domString = "";
  reposArr.forEach((repo) => {
    //function to return buttons for each of the repo tags
    // if (repo.id < 5) {
    const repoTags = () => {
      let tagButtons = "";
      repo.tags.forEach((tag) => {
        tagButtons += `
        <button class='card-tags'>${tag}</button>
      `;
      });
      return tagButtons;
    };

    //function for returning starred symbols based on repo.starred
    const starred = () => {
      if (repo.starred) {
        return "&starf;";
      } else {
        return "&star;";
      }
    };

    //function that calculates days since updated
    const daysSinceUpdate = () => {
      let currentDate = Date.now();
      let otherDate = new Date(repo.updatedDate);
      return Math.floor((currentDate - otherDate) / 86400000);
    };

    const repoLanguage = () => {
      switch (repo.language) {
        case "javascript":
          return `🟡 JavaScript`;
          break;
        case "typescript":
          return `🔵 TypeScript`;
          break;
        case "C#":
          return `🟢 C#`;
          break;
        case "java":
          return `☕️ Java`;
          break;
        case "ruby":
          return `🔻 Ruby`;
          break;
        case "react":
          return `☢️ React`;
          break;
        case "CSS":
          return `🌈 CSS`;
          break;
      }
    };

    domString += `
    <div class="card repo-card">
      <div class="card-body repo-card-body">
        <div class="main-repo-info">
          <h5 class="card-title repo-title">${repo.name}</h5>
          <p class="card-text repo-description">${repo.description}</p>
          <div class='repo-buttons'>
            ${repoTags()}
          </div>
          <div class='details'>
            <div class='language-${repo.language}'>
              <p>${repoLanguage()}</p>
            </div>
            <div class="stars">
              <p>&star;${repo.stars}</p>
            </div>
            <div class="branches">
              <p>${repo.branches}</p>
            </div>
            <div class="issues">
              <p>${repo.issues} issues need help</p>
            </div>
            <div>
              <p>Updated ${daysSinceUpdate()} days ago</p>
            </div>
          </div>
        </div>
        <div id="side-repo-info">
          <button class="starred" id="starred-button--${
            repo.id
          }">${starred()} Star</button>
        </div>
      </div>
    </div>`;
  });
  renderToDom("repo-div", domString);
};

//renders repo adding form to DOM
const repoAddForm = () => {
  let domString = `
  <div class="form-title"><h2>Create a new repository</h2></div>
  <form id="repo-form">
    <div class="form-group">
      <label for="repo-name">Repository Name <span id='required-star'>*</span></label>

      <input type="text" class="form-control" id="repo-name-input">
    </div>
    <div class="form-subtext">
      <small id="repo-name-help" class="form-text">Great repository names are short and memorable. Need inspiration? How about<span id='silly-repo-name'>supreme-giggle?</span>
      </small>
    </div>
    <div class="form-group">
      <label for="description">Description <span id="optional">(optional)</span></label>
      <textarea class="form-control" id="repo-description" rows="3"></textarea>
    </div>
    <div class="form-group">
      <select id="language-select" class="custom-select custom-select-lg mb-3">
        <option selected>Choose Primary Language</option>
        <option value="javascript">JavaScript</option>
        <option value="typescript">TypeScript</option>
        <option value="C#">C#</option>
        <option value="java">Java</option>
        <option value="ruby">Ruby</option>
        <option value="react">React</option>
      </select>
    </div>
    <div class="form-group">
    <button type="submit" class="btn btn-success">Create repository</button>
    </div>
  </form>
  `;
  renderToDom("repo-form-div", domString);
};

const repoFormEventListener = () => {
  let repoForm = document.getElementById("repo-form");
  const getDate = () => {
    let date = new Date(Date.now());
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  const createNewRepo = (e) => {
    e.preventDefault();
    const newRepo = {
      name: document.getElementById("repo-name-input").value,
      description: document.getElementById("repo-description").value,
      tags: [],
      language: document.getElementById("language-select").value,
      stars: 0,
      branches: 0,
      issues: 0,
      updatedDate: `${getDate()}`,
      starred: false,
      pinned: false,
    };
    repos.push(newRepo);
    console.log(repos);
    reposOnDom(repos);
    repoForm.reset();
  };

  repoForm.addEventListener("submit", createNewRepo);
};

const searchRepos = () => {
  const search = document.getElementById("find-repo");
  const searcher = (e) => {
    console.log(e);
    console.log(e.target.value);
    const searched = [];
    repos.forEach((repo) => {
      let repoNameLowerCase = repo.name.toLowerCase();
      let repoDescLowerCase = repo.description.toLowerCase();
      if (
        repoNameLowerCase.includes(e.target.value.toLowerCase()) ||
        repoDescLowerCase.includes(e.target.value.toLowerCase())
      ) {
        searched.push(repo);
      }
    });
    reposOnDom(searched);
  };
  search.addEventListener("input", searcher);
};

const addRemoveStar = () => {
  const starDiv = document.getElementById("repo-div");
  const starClick = (e) => {
    console.log("listener is working");
    if (e.target.id.includes("starred-button")) {
      let button = document.getElementById(e.target.id);
      const [, id] = e.target.id.split("--");
      let index = repos.findIndex((element) => element.id === Number(id));
      if (repos[index].starred === false) {
        repos[index].starred = true;
        button.innerHTML = "&starf; Star";
      } else if (repos[index].starred === true) {
        repos[index].starred = false;
        button.innerHTML = "&star; Star";
      }
    }
  };
  starDiv.addEventListener("click", starClick);
};

const showMore = () => {
  const showMoreButton = document.getElementById("show-more-button");
  const repoDiv = document.getElementById("repo-div");
  const showMoreButtonClick = () => {
    repoDiv.classList.toggle("repo-div-show-more");
    console.log(repoDiv.outerHTML);
  };
  showMoreButton.addEventListener("click", showMoreButtonClick);
};

// packages array
const packages = [
  {
    id: 1,
    name: "Docker",
    description:
      "A software platform used for building applications based on containers - small and lightweight execution environments.",
  },

  {
    id: 2,
    name: "Ruby Gems",
    description:
      "A standard format for distributing Ruby programs and libraries used for the  Ruby programming language.",
  },

  {
    id: 3,
    name: "npm",
    description:
      "A package manager for JavaScript included with Node.js. npm makes it easy for developers to share and reuse code.",
  },

  {
    id: 4,
    name: "Apache Maven",
    description:
      "A default package manager for the Java programming language and the java runtime environment.",
  },

  {
    id: 5,
    name: "Nugent",
    description:
      "A free and open source package manager used for the Microsoft development platforms including .NET.",
  },
  {
    id: 6,
    name: "Containers",
    description:
      "A singe place for your team to manage Docker images and decide who can see and access your images.",
  },
];

// packages
const packagesOnDom = (array) => {
  let domString = "";

  // package cards
  for (const package of array) {
    domString += `<div class="card" style="width: 18rem;" id="pkgs">
  <div class="card-body">
    <h5 class="card-title">${package.name}</h5>
    <p class="card-text">${package.description}.</p>
   <div class="footer"><button class="btn btn-danger" id="delete--${package.id}">Delete</button>
    <a href="#" class="card-link">More Information</a>
    </div>
  </div>
</div>`;
  }
  renderToDom("packages", domString);
};

// code to create a new package
const form = document.querySelector(".form");
const packageFormEventLister = () => {
  const form = document.querySelector(".form");

  const createNewPackage = (e) => {
    e.preventDefault();

    const newPackage = {
      id: packages.length + 1,
      name: document.querySelector("#name").value,
      description: document.querySelector("#description").value,
    };

    packages.push(newPackage);
    packagesOnDom(packages);
    form.reset();
  };
  form.addEventListener("submit", createNewPackage);
};

// code to delete a package
const deletePackage = (e) => {
  console.log(e.target.id);
  if (e.target.id.includes("delete")) {
    const [, id] = e.target.id.split("--");

    const index = packages.findIndex((package) => package.id === Number(id));

    packages.splice(index, 1);
  }
  packagesOnDom(packages);
};

const deletePackageEventLister = () => {
  const pkgs = document.querySelector("#packages");
  pkgs.addEventListener("click", deletePackage);
};

const repos = [
  {
    id: 1,
    name: "Sorting-Hat",
    description: "An app to find which Hogworts House you are in.",
    tags: ["HTML", "JavaScript", "CSS"],
    language: "javascript",
    stars: 500,
    branches: 70,
    issues: 0,
    updatedDate: "05/08/2023",
    starred: false,
    pinned: true,
  },
  {
    id: 2,
    name: "Calculator",
    description: "A functioning calculator.",
    tags: ["HTML", "JavaScript", "CSS"],
    language: "javascript",
    stars: 1000,
    branches: 150,
    issues: 0,
    updatedDate: "04/08/2023",
    starred: true,
    pinned: false,
  },
  {
    id: 3,
    name: "Pet-Adoption",
    description: "An app for adopting pets.",
    tags: ["HTML", "JavaScript", "CSS"],
    language: "javascript",
    stars: 28752,
    branches: 15,
    issues: 0,
    updatedDate: "05/08/2023",
    starred: true,
    pinned: true,
  },
  {
    id: 4,
    name: "Youtube-Player",
    description: "A project to setup a mock YouTube",
    tags: ["HTML", "JavaScript", "CSS"],
    language: "javascript",
    stars: 25,
    branches: 5,
    issues: 0,
    updatedDate: "05/08/2023",
    starred: false,
    pinned: false,
  },
  {
    id: 5,
    name: "Link-In-Bio",
    description: "A mock up of your personal links.",
    tags: ["HTML", "CSS"],
    language: "CSS",
    stars: 78,
    branches: 6,
    issues: 0,
    updatedDate: "05/08/2023",
    starred: false,
    pinned: true,
  },
  {
    id: 6,
    name: "Word-Counter",
    description: "A basic JavaScript word counter",
    tags: ["HTML", "JavaScript", "CSS"],
    language: "javascript",
    stars: 2,
    branches: 14,
    issues: 2,
    updatedDate: "05/08/2023",
    starred: false,
    pinned: true,
  },
  {
    id: 9,
    name: "pikachu-gif-generator",
    description: "AI pikachu gif generator",
    tags: ["TypeScript", "JavaScript", "pokeCode", "vim"],
    language: "javascript",
    stars: 10000,
    branches: 3,
    issues: 0,
    updatedDate: "09/28/1998",
    starred: false,
    pinned: true,
  },
  {
    id: 7,
    name: "HTML-Resume",
    description: "A resume project to help learn HTML",
    tags: ["HTML", "CSS"],
    language: "CSS",
    stars: 2,
    branches: 2,
    issues: 0,
    updatedDate: "05/08/2023",
    starred: false,
    pinned: false,
  },
  {
    id: 8,
    name: "Product-Cards",
    description: "Project to learn css flex.",
    tags: ["HTML", "CSS"],
    language: "CSS",
    stars: 2,
    branches: 2,
    issues: 0,
    updatedDate: "05/08/2023",
    starred: false,
    pinned: false,
  },
  {
    id: 9,
    name: "pikachu-gif-generator",
    description: "AI pikachu gif generator",
    tags: ["TypeScript", "javascript", "pokeCode", "vim"],
    language: "javascript",
    stars: 10000,
    branches: 3,
    issues: 0,
    updatedDate: "09/28/1998",
    starred: false,
    pinned: true,
  },
];
// project section below
const projects = [
  { 
    id: 1,
    name: "Project 1",
    description: "Fix code in box"
  },
  { 
    id: 2,
    name: 'Project 2',
    description: "Come up with names"
  },
  { 
    id: 3,
    name: 'Project 3',
    description: "List items in array"
  },
  { id: 4,
    name: 'Project 4',
    description: "Thank the Moms"
  },
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
  }
  renderToDom("projectList", domString);
}

const renderProjectForm = () => {
  const form = `
  <form id='projectForm'>
  <div class="createNewProject">
  <label for="exampleInputName1" class="form-label"> Project Board Name</label>
  <input type="name" class="form-control" id="projectName" aria-describedby="nameHelp" placeholder="Name">
  <input type="name" class="form-control" id="projectDescription" aria-describedby="nameHelp" placeholder="Example 2">
  <div id="nameHelp" class="form-text"></div>
</div>
<button type="submit" id="createNewProjectButton">Create Project</button>
  </form>
  `;
  renderToDom("createNewProjectForm", form);
};

// const formButton = document.querySelector("#createNewProjectButton");
// formButton.addEventListener('click', renderForm);
const newProject =() => {
  const formSubmission = document.querySelector("#projectForm");
  const createProject = (e) => {
    e.preventDefault();
    const form = document.querySelector("form");
    const newProjectObj = {
      name: document.querySelector("#projectName").value,
      description: document.querySelector("#projectDescription").value,
    };
    projects.push(newProjectObj);
    projectsOnDom(projects);
    formSubmission.reset();
  };
  formSubmission.addEventListener('submit', createProject);
};

// form.addEventListener('Create Project', createProject);

// project section above

const pinnedOnDom = (array) => {
  let domString = "";

  const colorDot = () => {
    if (language === javascript) {
      return "&#128993;";
    } else if (language === HTML) {
      return "&#128308;";
    } else if (language === CSS) {
      return "&#128995;";
    } else {
      return "";
    }
    colorDot();
  };

  for (const pinned of array) {
    if (pinned.pinned === true) {
      domString += `<div class="card pinned-repo" style="width: 18rem;">
  <div class="card-body pinned-card-body">
    <h5 class="card-title repo-name">${pinned.name}</h5>
    <p class="card-text repo-description">${pinned.description}</p>
    <div class="details">
      <p>${pinned.language}</p>
      <p>${pinned.branches}</p>
    </div>
  </div>
</div>`;
    }
  }
  // projectForm.addEventListener('submit', creatNewProject);
  renderToDom("pinned-repo", domString);
};

const profile = () => {
  let domString = `<div class="card pro-card" style="width: 18rem;">
      <div class="card-body">
        <img src="photos/image.png" class="card-img-top pro-img" alt="Pull Request Posse">
        <h3 class="card-title pro-title">Pull Request Posse</h3>
        <h5 class="card-subtitle mb-2 text-body-secondary">PRP</h5>
        <p class="card-text pro-text">Coding our hearts out for a better, brighter, techier future!
        </p>
        <div>
        <button type="button" class="btn btn-dark follow-btn">Follow</button>
        <button type="button" class="btn btn-dark sponsor-btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
</svg> Sponsor</button>
        <button type="button" class="btn btn-dark more-btn">...</button>
        </div>
        <div class="followers">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
</svg> 2.8m followers - 48 following - &starf; 10
        </div>
        <hr>
        <div class="location"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-pin-map" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"/>
  <path fill-rule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"/>
</svg> Nashville,TN</div>
        <div class="web-address"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
  <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
  <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
</svg> https://github.com/nss-evening-cohort-E23/gitsub-pull-request-posse</div>
        <hr>
        <div class="highlights">
          <h5>Highlights</h5>
          <p><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-half" viewBox="0 0 16 16">
  <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/>
</svg> Best Group in Class</p>
          <p><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-half" viewBox="0 0 16 16">
  <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/>
</svg> GitSub Masters</p>
          <p><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-half" viewBox="0 0 16 16">
  <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/>
</svg> Pro... Of Course</p>
        </div>
        <hr>
        <div class="organ">
          <h5>Organizations</h5>
          <img src="https://avatars.githubusercontent.com/u/109764697?s=200&v=4" class="org">
          <img src="https://avatars.githubusercontent.com/u/129906791?s=200&v=4" class="org">
        </div>
        <hr>
        <div class="sponsors">
          <h5>Sponsors</h5>
          <img src="https://ca.slack-edge.com/T03F2SDTJ-U04RQ6SRKJB-5f76c7c0a76b-512" class="sponsor-img">
          <img src="https://ca.slack-edge.com/T03F2SDTJ-U04S1QC70HK-260085a625d5-512" class="sponsor-img">
          <img src="https://ca.slack-edge.com/T03F2SDTJ-U04S76RTBFE-73c92cc7fc1a-512" class="sponsor-img">
          <img src="https://ca.slack-edge.com/T03F2SDTJ-U04SUD9EMK2-a0d7f6b8aa0c-512" class="sponsor-img">
        </div>
      </div>
    </div>`;

  renderToDom("profile", domString);
};

const startApp = () => {
  navBar();
  footer();
  profile();
  //calls functions specific to repos page, so as not to cause app breaking errors on other pages
  if (document.title.includes("Overview")) {
    repoAddForm();
    pinnedOnDom(repos);
  }
  if (document.URL.includes("repos")) {
    renderToDom(
      "search-div",
      "<div><input type='text' id='find-repo' value='' placeholder='Find a repository...'></div>"
    );
    reposOnDom(repos);
    renderToDom(
      "show-more-container",
      "<button id='show-more-button'>Show More</button>"
    );
    repoAddForm();
    repoFormEventListener();
    searchRepos();
    addRemoveStar();
    showMore();
  }
  if (document.URL.includes("packages")) {
    packagesOnDom(packages);
    packageFormEventLister();
    deletePackageEventLister();
  }
  if (document.URL.includes("packages")) {
    projectsOnDom(projects);
    renderProjectForm();
  }
  if (document.URL.includes("projects")) {
    projectsOnDom(projects);
    renderProjectForm();
    newProject();
  }
};
startApp();
