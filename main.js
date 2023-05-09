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
