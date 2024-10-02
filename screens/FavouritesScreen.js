import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import MealList from '../components/MealList/MealList'
import { FavouritesContext } from '../store/context/favourites-context'
import { MEALS } from '../data/dummy-data'

const FavouritesScreen = () => {
  const favouriteMealsCtx = useContext(FavouritesContext)

  const favouriteMeals = MEALS.filter(meal => favouriteMealsCtx.ids.includes(meal.id) )

  if(favouriteMeals.length===0)
  {
    return<View style={styles.rootContainer}>
      <Text style={styles.text}>You have no favourite meals yet.</Text>
    </View>
  }

  return (
    <MealList items={favouriteMeals} />
  )
}

export default FavouritesScreen

const styles = StyleSheet.create({
  rootContainer:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  text:{
    fontSize: 18,
    fontWeight:"bold",
    color:"white"
  }
})