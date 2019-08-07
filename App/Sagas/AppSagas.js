import { call, put } from 'redux-saga/effects'
import AppActions from '../Redux/AppRedux'

export function * getCocktailItems (api, action) {
  // make the call to the api
  const response = yield call(api.getAllCocktailItems)

  if (response.ok) {
    const {data} = response
    const {drinks = []} = data
    yield put(AppActions.getAllCocktailItemsSuccess(drinks))
  } else {
    yield put(AppActions.getAllCocktailItemsFailure())
  }
}
