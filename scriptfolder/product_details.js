import { showLoader, hideLoader } from "./loader/loader.js";
const product_container = document.querySelector(".product_preview");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "https://cors.noroff.dev/www.fjord1design.com/wp-json/wc/store/products/" + id

console.log(url)
 
export async function getproduct() {
  try {
 
    const response = await fetch(url);
    const movie = await response.json();
    console.log(movie);
   
    product_container.innerHTML ="";
    createHtml(movie);
    attachEventListeners();
  } catch (error) {
    console.log(error);
    product_container.innerHTML = message("error", error);
  }
  hideLoader();
}

getproduct();

function createHtml(movie) {
  showLoader ();
    product_container.innerHTML += `
    <div class="product_card">
    <img class="card__picture" src=${movie.images[0].src}>
      <h2 class="detail__title">${movie.name}</h2>
      <p class="detail__title">${movie.prices.price/100}</p> 
    <p class="detail__title">${movie.categories[0]?.name}</p>
    <p class="detail__title">${movie.description}</p>
    

    <div>
    <a class="purchase bg-red " href="../checkout.html">Purchase</a>
 </div>
    </div>
  `;
  hideLoader();
}
