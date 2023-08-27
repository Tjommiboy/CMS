export async function getProducts () {
const apiURL = "http://wp-test.noroff.dev/w-json/";

const response = await fetch(apiURL + "wc/store/products");
const products = await response. json() ;

if (response.ok) {
return products;
} else{
console. log ('something went wrong!');
alert ("Error: " + response. statusText)
throw new Error("Errors: "+ response.statusText)
}
}