// // URLs
const API_ENDPOINT = "http://localhost:3000";
const RECIPES_URL = `${API_ENDPOINT}/recipes`;

let allTheRecipes = []

fetch(RECIPES_URL)
  .then(res => res.json())
  .then(recipes => {
    allTheRecipes = recipes
    renderCheckboxes(allTheRecipes)
  })

const renderCheckboxes = recipes => {
  const ingredients = recipes.reduce((array, recipe) => {
    return [...array, ...recipe.ingredients.filter(ing => !array.includes(ing))]
  }, [])
  // Set
  console.log(ingredients)

  const ingContainer = document.querySelector('.ingredients')

  ingredients.forEach(ing => {
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.value = ing
    const label = document.createElement('label')
    label.innerText = ing

    ingContainer.append(checkbox, label)
  })
}
// // const myJson = await response.json();
// console.log(JSON.stringify(myJson));

function useringredients() {
  const allTheCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked')

  const allTheIngredients = [...allTheCheckboxes].map(item => item.value)

  return allTheIngredients
}

const form = document.querySelector('form')
form.addEventListener('submit', (event) => {
  event.preventDefault()
  console.log('submit')
  document.querySelector('.possrecipes').innerHTML = ''
  const userSelectedIngredients = useringredients()
  renderRecipesFromIngredients(allTheRecipes, userSelectedIngredients)
})

const renderRecipesFromIngredients = (recipes, ingredients) => {

  recipes.forEach(recipe => {
    // let containsIng = false

    // ingredients.forEach(ing => {
    //   if (recipe.ingredients.includes(ing)) {
    //     containsIng = true
    //   }
    // })

    // if (containsIng) {
    //   renderRecipe(recipe)
    // }

    const ingredientsInRecipe = ingredients.filter(ing => recipe.ingredients.includes(ing))
    let containsAllIngredients = ingredientsInRecipe.length === ingredients.length
    if (containsAllIngredients) {
      renderRecipe(recipe)
    }
  })
}

const renderRecipe = (recipe) => {
  const list = document.querySelector('.possrecipes')

  const li = document.createElement('li')
  li.innerText = recipe.name

  list.append(li)

}