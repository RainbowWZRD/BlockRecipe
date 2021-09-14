import {Fraction} from "fractional"

import * as model from "./model.js"
import receipeView from "./views/receipeView.js";
import searchView from "./views/searchView.js";
import resultsView from "./views/resultsView.js";

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

const controlRecipes = async function() {
  try {

    //ASSING ID TO THE HASH
    const id = window.location.hash.substr(1)
    if(!id) return

    receipeView.renderSpinner()

    //LOADING RECIPE
    await model.loadRecipe(id)

    //RENDER RECIPE
     receipeView.render(model.state.recipe)

  } catch (err) {
    receipeView.renderError()
  }
}

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner()

    const query = searchView.getQuery()
    if(!query) return;

    await model.loadSearchResults(query)
    resultsView.render(model.getSearchResultsPage(1))

  } catch (err) {
    console.log(err);
  }
}

const init = function() {
  receipeView.addHandlerRender(controlRecipes)
  searchView.addHandlerSearch(controlSearchResults)
}

init()