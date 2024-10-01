import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Subtitle = ({children}) => {
  return (
    <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>{children}</Text>
      </View>
  )
}

export default Subtitle

const styles = StyleSheet.create({
    subtitle:{
        color:"rgb(185, 58, 195)",
        fontSize:18,
        fontWeight:"bold",
        textAlign:"center",
      },
      subtitleContainer:{
        // margin:6,
    
        padding:6,
        marginHorizontal:12,
        marginVertical:4,
        borderBottomColor:"rgb(185, 58, 195)",
        borderBottomWidth:2,
      }
})