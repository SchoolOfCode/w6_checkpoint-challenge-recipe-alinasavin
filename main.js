let foodToSearch = null;

function handleRecipeClick() {
  fetchRecipe(foodToSearch);
}

function handleFoodChange() {
  foodToSearch = document.querySelector("#food-input").value;
}

const YOUR_APP_ID = "adc26e15"
const YOUR_APP_KEY = "3dc4d461a603a76bb8d7d688f5a8c5fb"


const aTag = document.getElementById("recipe-label");
const image = document.createElement("IMG");
async function fetchRecipe(food) {
  //--- write your code below ---
  //--- write your code above ---
  // use fetch to do GET request for recipe
  const requestUrl = await fetch(`https://api.edamam.com/search?q=${food}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`);
  //console.log(requestUrl);
  const dataResponse = await requestUrl.json();

  console.log(dataResponse);
  // grab the first recipe in the hits array
  const dataResult = dataResponse.hits[0];
  //console.log(dataResult);
  // replace the innerHTML with the label name of the recipe
  aTag.innerHTML = dataResult.recipe.label;
  // set the href attribute to be the recipe's url
  aTag.href = dataResult.recipe.url;
  image.src = dataResult.recipe.image;
  document.body.appendChild(image);
}


