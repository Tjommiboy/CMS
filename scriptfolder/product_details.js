const product_container = document.querySelector(".product_preview");
const queryString = document.location.search;

const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = "https://cors.noroff.dev/www.fjord1design.com/wp-json/wc/store/products/" + id;

async function getproduct() {
  try {
    const response = await fetch(url);
    const product_preview = await response.json();

    createHtml(product_preview);
    attachEventListeners();
  } catch (error) {
    console.log(error);
    product_container.innerHTML = message("error", error);
  }
}

getproduct();

function createHtml(product_preview) {
    product_container.innerHTML = `
    <div class="product_preview">
      <div >${product_preview.id}</div>
      <h2 class="card__title">${product_preview.name}</h2>
      <p class="card__price">${product_preview.prices.price}</p> 
    <p class="card_description">${product_preview.categories[0]?.name}</p>
    </div>
  `;
}
