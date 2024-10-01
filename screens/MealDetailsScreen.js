import { View, Text, Image, StyleSheet, ScrollView, Button } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';

const MealDetailsScreen = ({route, navigation}) => {
    const mealId = route.params.mealId;

    function headerButtonPressHandler(){
      console.log("hello")
    }

    const selectedMeal = MEALS.find((meal)=> meal.id === mealId)
    useLayoutEffect(()=>{
      navigation.setOptions({
        headerRight:()=>{
          return <IconButton 
          onPress={headerButtonPressHandler}
          icon="star"
          color="white"
          />
      }
    })
},[navigation, headerButtonPressHandler])
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
  }
})