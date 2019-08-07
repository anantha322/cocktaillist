// @flow
import React from 'react'
import { compose } from 'redux'
import {FlatList, Text} from 'react-native'
//HOC
import cocktailData from '../Hoc/cocktailData'

//Components
import {ListItem}  from './index'
import styles from './Styles/CocktailListStyles'
import type {cocktailNormalised} from "../Types"

//type
type Props = {
    cocktailItems: cocktailNormalised,
    loading: Boolean,
    error: Boolean
}
const cocktailList = ({ cocktailItems, loading, error }: Props) => {
    
    const keyExtractor = item => item

    const renderListItem = item => {
        return <ListItem 
                    title={item.strDrink}
                    icon={item.strDrinkThumb}
               />
    }

    const renderItems = (items : cocktailNormalised) => {
        return (
            <FlatList
                style={styles.container}
                data={items.allIds}
                renderItem={({ item }) => renderListItem(items.byId[item])}
                keyExtractor={keyExtractor}
            />
        )
    }
    if (cocktailItems.allIds.length > 0) {
        return renderItems(cocktailItems)
    }

    if(loading){
        return <Text>Loading ...</Text>
    }

    if(error){
        return <Text>Error in getting data</Text>
    }

    return <Text>No data available</Text>
}

export default compose(cocktailData())(cocktailList)