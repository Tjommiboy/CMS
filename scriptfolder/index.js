import { showLoader, hideLoader } from "./loader/loader.js";
const BASE_URL = "https://cors.noroff.dev/www.fjord1design.com/wp-json/";
const ALL_ENDPOINT = "wc/store/products/";
const movieContainer = document.querySelector(".list_container");

async function fetchMovies() {
  try {
    showLoader();
    const response = await fetch(BASE_URL + ALL_ENDPOINT);

    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status code: ${response.status}`);
    }

    const newMovies = await response.json();

    movieContainer.innerHTML = "";
    for (let count = 0; count < newMovies.length && count <= 3; count++) {
      if (newMovies[count]) {
        movieContainer.innerHTML += `
                                  <div class="moviecard">
                                   <a  href="details.html?id=${newMovies[count].id}"><img class="card__picture"  src=${newMovies[count].images[0]?.src}>
                                   <div class="card__content">
                                   <h2 class="card__title">${newMovies[count].name}</h2>
                                   <p class="card__price">${newMovies[count].prices.price}</p> 
                                   <p class="card_description">${newMovies[count].categories[0]?.name}</p>
                                   </div>   
                                   </a>   
                                 </div> `;
      }
      
    }
  } catch (error) {
    console.error("Error:", error);
  }
  hideLoader();
}

fetchMovies();

//Consumer key : ck_a97098b27bc0daebe692d057a1c6b355ef28f53d
//Consumer secret: cs_84b998d4c3aa8178b1e74691acf811e9cc59a7d5
