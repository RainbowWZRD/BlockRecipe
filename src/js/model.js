import { async } from "regenerator-runtime"
import {API_URL, RES_PER_PAGE} from "./config.js"
import {getJSON} from "./helpers.js"

export const state = {
    recipe: {},
    search: {
      query: '',
      results: [],
      page: 1,
      resultsPerPage: RES_PER_PAGE,
    }
  }

  export const loadRecipe = async function (id) {
    try {
      const data = await AJAX(`${API_URL}${id}`);
      state.recipe = createRecipeObject(data);
  
      if (state.bookmarks.some(bookmark => bookmark.id === id))
        state.recipe.bookmarked = true;
      else state.recipe.bookmarked = false;
  
      console.log(state.recipe);
    } catch (err) {
      // Temp error handling
      console.error(`${err} 💥💥💥💥`);
      throw err;
    }
  };


  export const loadSearchResults = async function (query) {
    try {
      state.search.query = query;
  
      const data = await fetch(`${API_URL}?search=${query}`);
      console.log(data);
  
      state.search.results = data.data.recipes.map(rec => {
        return {
          id: rec.id,
          title: rec.title,
          publisher: rec.publisher,
          image: rec.image_url,
        };
      });
      state.search.page = 1;
    } catch (err) {
      console.error(`${err} 💥💥💥💥`);
      throw err;
    }
  };

  export const getSearchResultsPage = function (page = state.search.page) {
    state.search.page = page;
  
    const start = (page - 1) * state.search.resultsPerPage; // 0
    const end = page * state.search.resultsPerPage; // 9
  
    return state.search.results.slice(start, end);
  };
