import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';

const MealDetailsScreen = ({route}) => {
    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal)=> meal.id === mealId)
  return (
    <View>
        <Image style={styles.image} source={{uri: selectedMeal.imageUrl}}/>
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails 
      duration={selectedMeal.duration} 
      complexity={selectedMeal.complexity} 
      affordability={selectedMeal.affordability}
      textStyle={styles.detailsText}
      />
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>Ingredients</Text>
      </View>
      {
        selectedMeal.ingredients.map((ingredient, index)=>(
            <Text key={index}>{ingredient}</Text>
        ))
      }
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>Steps</Text>
      </View>
      {
        selectedMeal.steps.map((step, index)=>(
            <Text key={index}>{step}</Text>
        ))
      }

    </View>
  )
}

export default MealDetailsScreen

const styles = StyleSheet.create({
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
  subtitle:{
    color:"white",
    fontSize:18,
    fontWeight:"bold",
    textAlign:"center",
  },
  subtitleContainer:{
    // margin:6,
    padding:6,
    marginHorizontal:24,
    marginVertical:4,
    borderBottomColor:"white",
    borderBottomWidth:2,
  }
})