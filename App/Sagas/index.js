import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/Api'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { AppTypes } from '../Redux/AppRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { getCocktailItems } from './AppSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api =  API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(AppTypes.GET_ALL_COCKTAIL_ITEMS_REQUEST,getCocktailItems, api)
  ])
}
