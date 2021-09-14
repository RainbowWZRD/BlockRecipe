import {API_URL, RES_PER_PAGE} from "./config.js"
import {getJSON} from "./helpers.js"


export const state = {
    recipe: {},
    search : {
        query : '',
        results : [],
        page : 1,
        resultsPerPage : RES_PER_PAGE,
    }
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
        state.search.query = query

        const data = await getJSON(`${API_URL}?search=${query}`)
        console.log(data);

        //CREATING A PROBLE NOW
       state.search.results = data.data.recipes.map(rec => {
            return {
                id : rec.id,
                title : rec.title,
                imageUrl : rec.image_url,
                sourceUrl : rec.source_url,
                publisher : rec.publisher
        }
        })
    }catch (err) {
        console.error(`${err} 💥`)
        throw err
    }
}

loadSearchResults('pizza')

export const getSearchResultsPage = function(page = state.search.page) {
    state.search.page = page

    const start =  (page -1 ) * state.search.resultsPerPage   //0
    const end = page * state.search.resultsPerPage    //9

    return state.search.results.slice(start, end)
}

