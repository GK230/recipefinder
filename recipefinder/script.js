// URLs
const API_ENDPOINT = "http://localhost:3000";
const RECIPES_URL = `${API_ENDPOINT}/recipefinder`;

const response = await fetch('db.json');
const myJson = await response.json();
console.log(JSON.stringify(myJson));

function useringredients(){
  //get variables
  let chkonions = document.querySelector("onions");
  let chkgarlic = document.querySelector("garlic");
  let chktinnedplumtomatoes = document.querySelector("tinnedplumtomatoes");
  let chkmixedpeppers = document.querySelector("mixedpeppers");
  let chkkidneybeans = document.querySelector("kidneybeans");
  let chkspaghetti = document.querySelector("spaghetti");
  let chkredchillies = document.querySelector("redchillies");
  let chkoliveoil = document.querySelector("oliveoil");
  let chkcoriander = document.querySelector("coriander");
  let chkojalapenos = document.querySelector("jalapenos");
  let chklonggrainrice = document.querySelector("longgrainrice");
  let chkpizzabases = document.querySelector("pizzabases");
  let chkbasil = document.querySelector("basil");
  let chkblackolives = document.querySelector("blackolives");
  let chktinnedchoppedtomatoes = document.querySelector("tinnedchoppedtomatoes");
  let chkfreshtomatoes = document.querySelector("freshtomatoes");
  let chkcucmumber = document.querySelector("cucumber");
  let chkherbs = document.querySelector("herbs");
  let chklemons = document.querySelector("lemons");
  let chkpenne = document.querySelector("penne");

if (chkonions == true)
function getRecipes(obj, val) {
  var recipes = [];
  for (var i in obj) {
      if (!obj.hasOwnProperty(i)) continue;
      if (typeof obj[i] == 'onions') {
          objects = objects.concat(getKeys(obj[i], val));
      } else if (obj[i] == val) {
          recipes.push(i);
      }
  }
  document.querySelector(".possrecipes").innerHTML = recipes;
  return recipes;

}




  




  

