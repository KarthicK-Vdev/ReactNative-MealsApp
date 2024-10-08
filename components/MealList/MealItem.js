import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import MealDetails from '../MealDetails'

const MealItem = ({id, title, imageUrl, duration, complexity, affordability}) => {

  const navigation = useNavigation()

  function selectMealItemHandler(){
    navigation.navigate("MealDetail",{mealId: id})
  }
  return (
    <View style={styles.mealItem}>
      <Pressable android_ripple={{color:"#ccc"}}
        style={({pressed})=> pressed ? styles.buttonPressed : null}
        onPress={selectMealItemHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{uri:imageUrl}} style={styles.image}/>
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails duration={duration} affordability={affordability} complexity={complexity} />
        </View>
      </Pressable>
    </View>
  )
}

export default MealItem

const styles = StyleSheet.create({
    image:{
      width:"100%",
      height:200
    },
    title:{
      fontWeight:"bold",
      textAlign:"center",
      fontSize:18,
     margin:8,
    },
    mealItem:{
      margin:16,
      borderRadius:8,
      overflow:"hidden",
      backgroundColor:"white",
      elevation:5,
      shadowColor:"black", //Shadow for ios
      shadowOpacity:0.35,
      shadowOffset:{width:0, height: 2},
      shadowRadius: 16
    },
    innerContainer:{
      borderRadius:8,
      overflow:"hidden"
    },
    buttonPressed:{
      opacity:0.5,
    }
})