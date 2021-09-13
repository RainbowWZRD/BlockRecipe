import { async } from "regenerator-runtime"
import {API_URL} from "./config.js"
import {getJSON} from "./helpers.js"

export const state = {
    recipe: {},
}

export const loadRecipe = async function(id) {
    try {

        const data = await getJSON(`${API_URL}/${id}`)
    
        const {recipe} = data.data
        state.recipe = {
          id : recipe.id,
          title : recipe.title,
          cookingTime : recipe.cooking_time,
          imageUrl : recipe.image_url,
          sourceUrl : recipe.source_url,
          publisher : recipe.publisher,
          servings : recipe.servings,
          ingredients : recipe.ingredients
        }
        console.log(recipe);
    } catch (err) {
        throw err
    }
}


const loadSearchResults = async function(query) {
    try{
        const data = await getJSON(`${API_URL}?search=${query}`)
        console.log(data);
    }catch (err) {
        throw err
    }
}

loadSearchResults('avocado')