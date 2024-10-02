import { View, Text, Image, StyleSheet, ScrollView, Button } from 'react-native'
import React, { useContext, useLayoutEffect } from 'react'
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';
import { FavouritesContext } from '../store/context/favourites-context';
import { useDispatch, useSelector } from 'react-redux';

import { addRecipe, removeRecipe } from '../store/redux/time';

const MealDetailsScreen = ({route, navigation}) => {
    const favouriteMealsCtx = useContext(FavouritesContext)
    
    const mealId = route.params.mealId;

    const cookIds = useSelector((state)=>state.cookMeals.ids)

    const dispatch = useDispatch()

    const cookRecipeIds=cookIds.includes(mealId)


    const selectedMeal = MEALS.find((meal)=> meal.id === mealId)

    const mealIsFavourite= favouriteMealsCtx.ids.includes(mealId)

    function changeCookStatusHandler(){
      if(cookRecipeIds)
      {
        dispatch(removeRecipe({id :mealId}))
      }
      else
      {
        dispatch(addRecipe({id :mealId}))
      }
    }

    function changeFavouriteStatusHandler(){
      if(mealIsFavourite)
      {
        favouriteMealsCtx.removeFavourite(mealId)
      }
      else
      {
        favouriteMealsCtx.addFavourite(mealId)
      }
    }

    useLayoutEffect(()=>{
      navigation.setOptions({
        headerRight:()=>{
          return (<View style={styles.iconContainer}><IconButton 
          onPress={changeFavouriteStatusHandler}
          icon={mealIsFavourite ? "star" : "star-outline"}
          color="white"
          />
          <View style={styles.iconsSpace}></View>
          <IconButton 
          onPress={changeCookStatusHandler}
          icon={cookRecipeIds ? "timer" :"time-outline"}
          color="white"
        />
        </View>
        )
      },
      
    })
},[navigation, changeFavouriteStatusHandler])
  return (
    <ScrollView style={styles.rootContainer}>
        <Image style={styles.image} 
        source={{uri: selectedMeal.imageUrl}}/>
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails 
      duration={selectedMeal.duration} 
      complexity={selectedMeal.complexity} 
      affordability={selectedMeal.affordability}
      textStyle={styles.detailsText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>

    </ScrollView>
  )
}

export default MealDetailsScreen

const styles = StyleSheet.create({
  rootContainer:{
    marginBottom:32
  },
  image:{
    width:"100%",
    height:350
  },
  title:{
    fontWeight:"bold",
    fontSize:24,
    margin:8,
    textAlign:"center",
    color:"white",
  },
  detailsText:{
    color:"white"
  },
  listOuterContainer:{
    alignItems:"center",
  },
  listContainer:{
    width:"80%"
  },
  iconContainer:{
    flexDirection:"row",
    marginRight:10
  },
  iconsSpace:{
    width:10,
  }
})