// const aTag = document.getElementById("recipe-label");
// const image = document.createElement("IMG");

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

let foodToSearch = null;

function handleRecipeClick() {
    fetchRecipe(foodToSearch);
 }

function handleFoodChange() {
  foodToSearch = document.querySelector("#food-input").value;
  
}

const YOUR_APP_ID = "adc26e15"
const YOUR_APP_KEY = "3dc4d461a603a76bb8d7d688f5a8c5fb"
//const searchForm = document.querySelector('form');
const searchResultSection = document.getElementById('search-result');
const recipeSection = document.getElementById('recipe-section');
const recipeDataDiv = document.querySelector(".recipe-data");
const figure = document.getElementById("result-image");
const recipeResult = document.querySelector(".item-result");



// searchForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     foodToSearch = event.target.querySelector('#food-input').value;
//     //console.log(foodToSearch);
//     fetchRecipe();
// });


 async function fetchRecipe() {
   //use fetch to do GET request for recipe 
   const requestUrl = await fetch(`https://api.edamam.com/search?q=${foodToSearch}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`);
   //console.log(requestUrl);
   const dataResponse = await requestUrl.json();
   // only grabs the hits array from the response
 
   console.log(dataResponse);
    const recipeResult = dataResponse.hits;
       for(let i=0; i < 3; i++){
         generateRecipeResults(recipeResult[i].recipe);
       }
    

 };


function generateRecipeResults(recipe){

 const image = document.createElement("img");
  image.classList.add("recipe-img");
  image.src = recipe.image;
  const recipeLabel = document.createElement("h2");
  recipeLabel.classList.add("title");
  recipeLabel.innerHTML = recipe.label;
 
  const aTag = document.createElement("a");
  aTag.classList.add("recipe-label");
  aTag.innerHTML = "View Recipe";
  aTag.href = recipe.url;
  recipeResult.appendChild(image);
  recipeResult.appendChild(recipeLabel);
  recipeResult.appendChild(aTag);
}

