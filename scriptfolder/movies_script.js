import {showLoader,hideLoader} from "./loader/loader.js"
const BASE_URL = "https://cors.noroff.dev/www.fjord1design.com/wp-json/";
const ALL_ENDPOINT = "wc/store/products/";
const product_grid = document.querySelector(".product_grid");
const titleIndex = document.querySelector("title");
const btn = document.querySelector(".titlebtn");



async function fetchData() {
  try {
    showLoader ();
  const response = await fetch(BASE_URL + ALL_ENDPOINT);
  const movies = await response.json();

  product_grid.innerHTML = "";
  movies.forEach(function (movies) {
    product_grid.innerHTML += `    <div class="moviecard">
                                    <a  href="details.html?id=${movies.id}">
                                    <img class="card__picture" src=${movies.images[0]?.src}>
                                    <div class"card__content">
                                    <h2 class="card__title">${movies.name}</h2>
                                    <p class="card__price">${movies.prices.price}</p> 
                                    <p class="card_description">${movies.categories[0]?.name}</p>
                                    </div>
                                  </a>   
                                  
                                </div> `;
  });
} catch (error) {
  console.log(error);
}
hideLoader();
}

fetchData();















window.addEventListener("load",() => {
    const loader = document.querySelector(".loader")
    loader.classList.add(".loader-hidden");
    loader.addEventListener("transitionend", () => {
        document.body.removeChild("loader");
    });

})
