
const renderToDom = (divId, htmltoRender) => {
  let targetedDiv = document.getElementById(divId);
  targetedDiv.innerHTML = htmltoRender;
};

const reposCardsOnDom = () => {
  let domString = "";
  domString += `
  
  `;
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
const packagesOnDom = (packages) => {
  let domString = "";

// package cards
for (const package of packages) {
  domString += `<div class="card" style="width: 18rem;" id="pkgs">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
  </div>
</div>`
}

renderToDom('#pkgs', domString);
}
packagesOnDom(packages);