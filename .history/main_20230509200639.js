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
packagesOnDom(packages);
