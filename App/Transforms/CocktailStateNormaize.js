// @flow

import type { CocktailItems } from '../Types'

export const cocktailStateNormalize = (cocktailItems: Array<CocktailItems>) => {
    let byId = {}
    cocktailItems.forEach(cocktailItem => {
        byId[cocktailItem.idDrink] = cocktailItem
    })
    return {
        byId,
        allIds: (Object.keys(byId): Array<string>)
    }
}
