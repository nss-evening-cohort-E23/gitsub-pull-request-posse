const projects = [
  { name: 'Project 1'},
  { name: 'Project 2'},
  { name: 'Project 3'},
  { name: 'Project 4'},
];

const renderToDom = (divId, htmltoRender) => {
  let targetedDiv = document.getElementById(divId);
  targetedDiv.innerHTML = htmltoRender;
};

const projectsOnDom = (projectArr) => {
  let domString = "";
  for (const Proj of projectarray) {
    domString += `<div class="card" style="width:18rem;">
      <div class="card-body">
      <p class="card-text">${project.name}</p>
      </div>
    </div>`;
  };

  renderToDom("#Projects-List", domString);
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
