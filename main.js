let foodToSearch = null;

function handleRecipeClick() {
  fetchRecipe(foodToSearch);
}

function handleFoodChange() {
  foodToSearch = document.querySelector("#food-input").value;
}

const YOUR_APP_ID = "adc26e15"
const YOUR_APP_KEY = "3dc4d461a603a76bb8d7d688f5a8c5fb"


// const aTag = document.getElementById("recipe-label");
// const image = document.createElement("IMG");
const generatedRecipes = document.getElementById("recipe-result");

// async function fetchRecipe(food) {
//   // use fetch to do GET request for recipe
//   const requestUrl = await fetch(`https://api.edamam.com/search?q=${food}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`);
//   //console.log(requestUrl);
//   const dataResponse = await requestUrl.json();

//   console.log(dataResponse);
//   // grab the first recipe in the hits array
//   const dataResult = dataResponse.hits[0];
//   //console.log(dataResult);
//   // replace the innerHTML with the label name of the recipe
//   aTag.innerHTML = dataResult.recipe.label;
//   // set the href attribute to be the recipe's url
//   aTag.href = dataResult.recipe.url;
//   image.src = dataResult.recipe.image;
//   document.body.appendChild(image);
// }



async function fetchRecipe() {
  // use fetch to do GET request for recipe
  const requestUrl = await fetch(`https://api.edamam.com/search?q=${foodToSearch}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`);
  //console.log(requestUrl);
  const dataResponse = await requestUrl.json();

  //console.log(dataResponse);
  // grab the hits array of recipes
  const recipeResult = dataResponse.hits;
  //console.log(recipeResult);
// for looop to loop through the array oh hits
  for(let i=0; i < 4; i++){
    //console.log(recipeResult[i].recipe);
   showRecipeResults(recipeResult[i].recipe);
  }
 
};


 function showRecipeResults(recipe){
  //console.log(recipe);
  let recipeLabel = recipe.label;
  //console.log(recipeLabel);
  const aTag = document.createElement("a");
  // replace the innerHTML with the label name of the recipe
  aTag.innerHTML = recipeLabel;
   // set the href attribute to be the recipe's url
   aTag.href = recipe.url;
   const image = document.createElement("IMG");
  // set src attribute to be the recipe's image
  image.src = recipe.image;
  aTag.appendChild(image);
  generatedRecipes.appendChild(aTag);

}

  // aTag.innerHTML = dataResult.recipe.label;
  
  // aTag.href = dataResult.recipe.url;
  // 
  // image.src = dataResult.recipe.image;
  // // display image of the recipe selected
  // document.body.appendChild(image)



