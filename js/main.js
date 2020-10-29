const hero_container = document.getElementById('hero-container');
const token = '100349205219068';
const hero_number = 10;

//Fetch all heroes
const fetchHeros = async () => {
  for (let i = 1; i <= hero_number; i++) {
    await getHero(i).catch(err => console.log(err));
  }
};

//Fetch single hero by id
const getHero = async id => {
  const url = `https://superheroapi.com/api/${token}/${id}`;
  const response = await fetch(url);
  const hero = await response.json();

  createHeroCard(hero);
};

//Capitalize hero name
function capitalizeFirstletter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

//Create the html card with hero statistics
function createHeroCard(hero) {
  const heroElement = document.createElement('div');

  heroElement.classList.add('hero');

  const heroInnerHTML = `
    <div class="image-container">
      <img src="${hero.image.url}">
    </div>
    <div class="info">
      <span class="number">${hero.id}</span>
      
      <h3 class="name">${hero.name}</h3>
      
      <span class="stats">Statistics:</span>
      <ul>
        <li>
          ${capitalizeFirstletter(Object.keys(hero.powerstats)[0])}
          <progress max="100" value="${Object.values(hero.powerstats)[0]}">
          </progress>
        </li>
        <li>
          ${capitalizeFirstletter(Object.keys(hero.powerstats)[1])}
          <progress max="100" value="${Object.values(hero.powerstats)[1]}">
          </progress>
        </li>
        <li>
          ${capitalizeFirstletter(Object.keys(hero.powerstats)[2])}
          <progress max="100" value="${Object.values(hero.powerstats)[2]}">
          </progress>
        </li>
        <li>
          ${capitalizeFirstletter(Object.keys(hero.powerstats)[3])}
          <progress max="100" value="${Object.values(hero.powerstats)[3]}">
          </progress>
        </li>
        <li>
          ${capitalizeFirstletter(Object.keys(hero.powerstats)[4])}
          <progress max="100" value="${Object.values(hero.powerstats)[4]}">
          </progress>
        </li>
        <li>
          ${capitalizeFirstletter(Object.keys(hero.powerstats)[5])}
          <progress max="100" value="${Object.values(hero.powerstats)[5]}">
          </progress>
        </li>
      </ul>
    </div>
  `;

  heroElement.innerHTML = heroInnerHTML;

  hero_container.appendChild(heroElement);
}

fetchHeros();
