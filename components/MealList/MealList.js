import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import MealItem from './MealItem'

const MealList = ({items}) => {
  
    function renderMealItem(itemData){
        const item=itemData.item
        const mealItemProps = {
          id:item.id,
          title:item.title,
          imageUrl:item.imageUrl,
          affordability: item.affordability,
          complexity: item.complexity,
          duration:item.duration
        }
          return <MealItem {...mealItemProps}/>
      }
    return (
      <View style={styles.container}>
        <FlatList data={items} 
        keyExtractor={(item)=> item.id}
        renderItem = {renderMealItem}
        />
      </View>
    )
}

export default MealList

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:16,
    }
})