const product_container = document.querySelector(".product_preview");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "https://cors.noroff.dev/www.fjord1design.com/wp-json/wc/store/products/" + id

async function getproduct() {
  try {
    const response = await fetch(url);
    const movie = await response.json();

    createHtml(movie);
    attachEventListeners();
  } catch (error) {
    console.log(error);
    product_container.innerHTML = message("error", error);
  }
}

getproduct();

function createHtml(movie) {
    product_container.innerHTML = `
    <div class="product_preview">
      <div >${movie.id.images}</div>
      <h2 class="card__title">${movie.name}</h2>
      <p class="card__price">${movie.prices.price}</p> 
    <p class="card_description">${movie.categories[0]?.name}</p>
    </div>
  `;
}
createHtml ();