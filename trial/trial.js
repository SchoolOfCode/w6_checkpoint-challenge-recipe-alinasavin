let foodToSearch = null;

function handleRecipeClick() {
    fetchRecipe(foodToSearch);
 }

function handleFoodChange() {
  foodToSearch = document.querySelector("#food-input").value;
  
}

const YOUR_APP_ID = "adc26e15"
const YOUR_APP_KEY = "3dc4d461a603a76bb8d7d688f5a8c5fb"



async function fetchRecipe() {
    //use fetch to do GET request for recipe 
    const requestUrl =`https://api.edamam.com/search?q=${foodToSearch}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=4`;
    //console.log(requestUrl);
    const response = await fetch(requestUrl);

    let { hits}  = await response.json();
    // only grabs the hits array from the response
  
    //console.log(dataResponse);
    //Clear section
     let searchResultSection = document.getElementById('search-result');
     searchResultSection.innerHTML = "";
    //  let recipeResult = dataResponse.hits;
        for(let i=0; i < hits.length; i++){
          generateRecipeResults(hits[i].recipe);
        }
    
  };

function generateRecipeResults(recipe){
    // create container  
    let resultSection = document.getElementById('search-result');
    // create API data section 
    let searchData = document.createElement("section");
      // append search data to the container section
      resultSection.appendChild(searchData);
    // create h2 title  
    let h2 = document.createElement("h2");
    searchData.setAttribute("class", "recipe-data");
    searchData.appendChild(h2);
    // change h2 to be name of recipe
    h2.innerText = recipe.label;
    h2.setAttribute("class", "title");
     // show recipe Image  
     let image = document.createElement("img");
     image.src = recipe.image;
     image.setAttribute("alt", "Image of ${recipe.label} recipe");
     image.classList.add("recipe-img");
     searchData.appendChild(image);
    // create aTag  
    let aTag = document.createElement("a");
    aTag.href = recipe.url;
    aTag.setAttribute("target", "_blank");
    aTag.classList.add("recipe-label");
    aTag.innerText = "View recipe";
    searchData.appendChild(aTag);
    // create p tag for extra recipe info 
    let calories = document.createElement("p");
    calories.innerText = `Calories : ${result.recipe.calories.toFixed(2)}`;
    calories.classList.add("recipe-info");
    searchData.appendChild(calories);
    let dietLabel = document.createElement("p");
    dietLabel.innerText = `Diet label : ${result.recipe.dietLabels}`;
    dietLabel.setAttribute("class", "recipe-info");
    searchData.appendChild(dietLabel);
    let ingredients = document.createElement("p");
    ingredients.innerText = `Ingredients: ${result.recipe.ingredientLines}`;
    ingredients.setAttribute("class", "recipe-info");
    searchData.appendChild(ingredients);
  
}