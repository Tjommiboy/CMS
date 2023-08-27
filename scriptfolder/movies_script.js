const BASE_URL = "https://cors.noroff.dev/www.fjord1design.com/wp-json/";
const ALL_ENDPOINT = "wc/store/products/";
const product_grid = document.querySelector(".product_grid");
const titleIndex = document.querySelector("title");
const btn = document.querySelector(".titlebtn");



async function fetchData() {
  try {
  const response = await fetch(BASE_URL + ALL_ENDPOINT);
  const movies = await response.json();

  product_grid.innerHTML = "";
  movies.forEach(function (movies) {
    product_grid.innerHTML += `
                                    <a href=details.html/${movies.id}>
                                    <img src=${movies.images[0]?.src}><div class=" card__content">
                                    <h2 class="card__title">${movies.name}</h2>
                                    <p class="card__price">${movies.prices.price}</p> 
                                    <p class="card_description">${movies.categories[0]?.name}</p>
                                    </div>   </a>   
                                  
                                </div> `;
  });
} catch (error) {
  console.log(error);
}
}

fetchData();















window.addEventListener("load",() => {
    const loader = document.querySelector(".loader")
    loader.classList.add(".loader-hidden");
    loader.addEventListener("transitionend", () => {
        document.body.removeChild("loader");
    });

})
