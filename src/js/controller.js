import "core-js/stable"
import "regenerator-runtime/runtime"
import {Fraction} from "fractional"

import * as model from "./model.js"
import receipeView from "./views/receipeView.js";

const recipeContainer = document.querySelector('.recipe');

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


const init = function() {
  receipeView.addHandlerRender(controlRecipes)
}

init()