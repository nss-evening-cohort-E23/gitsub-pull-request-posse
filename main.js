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
