import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const List = ({data}) => {
  return (
         data.map((ingredient, index)=>(
            <View style={styles.listItem}  key={index}>
                <Text style={styles.itemText}>{ingredient}</Text>
            </View>
        ))
  )
}

export default List

const styles = StyleSheet.create({
    listItem:{
        borderRadius:6,
        paddingHorizontal:8,
        paddingVertical:4,
        marginVertical:4,
        marginHorizontal:12,
        backgroundColor:"rgb(185, 58, 195)"
    },
    itemText:{
        color:"#3d004c",
        textAlign:"center"
    }
})