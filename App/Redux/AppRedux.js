import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { cocktailStateNormalize } from '../Transforms/CocktailStateNormaize'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getAllCocktailItemsRequest: null,
  getAllCocktailItemsSuccess: ['cocktailItems'],
  getAllCocktailItemsFailure: null
})

export const AppTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: null,
  error: null,
  cocktailItems: {
    allIds: [],
    byId: {}
  }
})

/* ------------- Reducers ------------- */

// request the cocktail Items 
export const request = (state) =>
  state.merge({ fetching: true})

// successful cocktail Items  lookup
export const success = (state, action) => {
  const { cocktailItems } = action
  return state.merge({ fetching: false, error: null, cocktailItems: cocktailStateNormalize(cocktailItems) })
}

// failed to get the cocktail Items
export const failure = (state) =>
  state.merge({ fetching: false, error: true })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_ALL_COCKTAIL_ITEMS_REQUEST]: request,
  [Types.GET_ALL_COCKTAIL_ITEMS_SUCCESS]: success,
  [Types.GET_ALL_COCKTAIL_ITEMS_FAILURE]: failure
})
