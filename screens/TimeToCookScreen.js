import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import MealList from '../components/MealList/MealList'
import { FavouritesContext } from '../store/context/favourites-context'
import { MEALS } from '../data/dummy-data'
import { useSelector } from 'react-redux'

const TimeToCookScreen = () => {
//   const favouriteMealsCtx = useContext(FavouritesContext)
    const cookMealsIds = useSelector( state => state.cookMeals.ids)

  const favouriteMeals = MEALS.filter(meal => cookMealsIds.includes(meal.id) )

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

export default TimeToCookScreen

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