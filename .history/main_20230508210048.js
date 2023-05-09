
const renderToDom = (divId, htmltoRender) => {
  let targetedDiv = document.getElementById(divId);
  targetedDiv.innerHTML = htmltoRender;
};

const reposCardsOnDom = () => {
  let domString = "";
  domString += `
  
  `;
};

// packages 
const packagesOnDom = () => {
  let domString = "";
}

for (const package of packages) {
  domString += `<div class="card" style="width: 18rem;" id="packages">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
  </div>
</div>`
}
