const renderToDom = (divId, htmltoRender) => {
  let targetedDiv = document.getElementById(divId);
  targetedDiv.innerHTML = htmltoRender;
};


//function for rendering repo cards to DOM
const reposOnDom = (reposArr) => {
  let domString =
    "<div><input type='text' id='find-repo' placeholder='Find a repository...'></div>";

  //function to return buttons for each of the repo tags
  const repoTags = () => {
    let tagButtons = "";
    reposArr.forEach((repo) => {
      repo.tags.forEach((tag) => {
        tagButtons += `
      <button class='card-tags'>${tag}</button>
    `;
      });
    });
    return tagButtons;
  };

  repos.forEach((repo) => {
    //function for returning starred symbols based on repo.starred
    const starred = () => {
      if (repo.starred) {
        return "U+02605";
      } else {
        return "U+02606";
      }
    };

    domString += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${repo.name}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <div class='buttons'>
          ${repoTags()}
        </div>
        <div class='details'>
          <div class='language-${repo.language}'>
             <p>🟡${repo.language}</p>
          </div>
        </div>
      </div>
    </div>`;
  });
};


// packages array
const packages = [
  {
    id: 1,
    name: 'Docker',
    description: 'A software platform used for building applications based on containers - small and lightweight execution environments.',

  },

  {
    id: 2,
    name: 'Ruby Gems',
    description: 'A standard format for distributing Ruby programs and libraries used for the  Ruby programming language.',
    
  },
  
  {
    id: 3,
    name: 'npm',
    description: 'A package manager for JavaScript included with Node.js. npm makes it easy for developers to share and reuse code.',

  },

  {
    id: 4,
    name: 'Apache Maven',
    description: 'A default package manager for the Java programming language and the java runtime environment.',

  },

  {
    id: 5,
    name: 'Nugent',
    description: 'A free and open source package manager used for the Microsoft development platforms including .NET.',

  },

  {
    id: 6,
    name: 'Containers',
    description: 'A singe place for your team to manage Docker images and decide who can see and access your images.',
  },
]

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
</div>`
}
renderToDom("packages", domString);

}
// packagesOnDom(packages);



const form = document.querySelector('.form');

const createNewPackage = (e) => {
  e.preventDefault();

  const newPackage = {
    id: packages.length + 1,
    name: document.querySelector('#name').value,
    description: document.querySelector('#description').value,
  }

  packages.push(newPackage);
  packagesOnDom(packages);
  form.reset();
}

// form.addEventListener('submit', createNewPackage);



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



const profile = () => {
  let domString =  `<div class="card pro-card" style="width: 18rem;">
      <div class="card-body">
        <img src="photos/image.png" class="card-img-top pro-img" alt="Pull Request Posse">
        <h3 class="card-title">Pull Request Posse</h3>
        <h5 class="card-subtitle mb-2 text-body-secondary">PRP</h5>
        <p class="card-text">Coding our hearts out for a better, brighter, techier future!
        </p>
        <div>
        <button type="button" class="btn btn-dark follow-btn">Follow</button>
        <button type="button" class="btn btn-dark sponsor-btn">Sponsor</button>
        <button type="button" class="btn btn-dark more-btn">...</button>
        </div>
        <div class="followers">
        2.8m followers - 48 following -  10
        </div>
        <hr>
        <div class="location">Nashville,TN</div>
        <div class="web-address">https://github.com/nss-evening-cohort-E23/gitsub-pull-request-posse</div>
        <hr>
        <div class="highlights">
          <h5>Highlights</h5>
          <p>Best Group in Class</p>
          <p>GitSub Masters</p>
          <p>Pro... Of Course</p>
        </div>
        <hr>
        <div class="organ">
          <h5>Organizations</h5>
          <img src="https://avatars.githubusercontent.com/u/109764697?s=200&v=4" class="org">
          <img src="https://avatars.githubusercontent.com/u/129906791?s=200&v=4" class="org">
        </div>
        <hr>
        <div>
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
  profile();
  if (document.URL.includes("repos")) {
    reposOnDom(repos);
  }
  if (document.URL.includes("packages")) {
    packagesOnDom(packages);
    packageFormEventLister();
  }
  // packagesOnDom(packages);
}

startApp();
