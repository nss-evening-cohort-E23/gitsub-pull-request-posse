const renderToDom = (divId, htmltoRender) => {
  let targetedDiv = document.getElementById(divId);
  targetedDiv.innerHTML = htmltoRender;
};

const navBar = () => {
  let domString = `
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Github</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link active" aria-current="page" href="#">Overview</a>
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
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
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
  let domString =
    "<div><input type='text' id='find-repo' placeholder='Find a repository...'></div>";

  repos.forEach((repo) => {
    //function to return buttons for each of the repo tags
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
      }
    };

    domString += `
    <div class="card" style="width: 18rem;">
      <div class="card-body repo-card">
        <div class="main-repo-info">
          <h5 class="card-title">${repo.name}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <div class='buttons'>
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
        <div class="side-repo-info">
          <button class="starred" id="starred-button">${starred()} Star</button>
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
   <div class="footer"><button class="btn btn-danger" id="delete">Delete</button>
    <a href="#" class="card-link">More Information</a>
    </div>
  </div>
</div>`;
  }
  renderToDom("packages", domString);
};

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

const repos = [
  {
    name: "serious-coding-project",
    description: "a very super serious coding project",
    tags: ["react", "javascript", "superCode", "vim"],
    language: "javascript",
    stars: 500,
    branches: 70,
    issues: 0,
    updatedDate: "05/08/2023",
    starred: false,
    pinned: true,
  },
  {
    name: "serious-coding-project",
    description: "a very super serious coding project",
    tags: ["react", "javascript", "superCode", "vim"],
    language: "javascript",
    stars: 500,
    branches: 70,
    issues: 0,
    updatedDate: "05/08/2023",
    starred: false,
    pinned: true,
  },
  {
    name: "serious-coding-project",
    description: "a very super serious coding project",
    tags: ["react", "javascript", "superCode", "vim"],
    language: "javascript",
    stars: 500,
    branches: 70,
    issues: 0,
    updatedDate: "05/08/2023",
    starred: false,
    pinned: true,
  },
  {
    name: "serious-coding-project",
    description: "a very super serious coding project",
    tags: ["react", "javascript", "superCode", "vim"],
    language: "javascript",
    stars: 500,
    branches: 70,
    issues: 0,
    updatedDate: "05/08/2023",
    starred: false,
    pinned: true,
  },
];

const startApp = () => {
  navBar();
  footer();

  //calls functions specific to repos page, so as not to cause app breaking errors on other pages
  if (document.URL.includes("repos")) {
    reposOnDom(repos);
    repoAddForm();
    repoFormEventListener();
  }
  if (document.URL.includes("packages")) {
    packagesOnDom(packages);
    packageFormEventLister();
  }
};
startApp();
