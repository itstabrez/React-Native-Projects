import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCard() {
  return (
    <View>
      <Text style = {styles.headingText}>FlatCard</Text>
      <View style={styles.flatCardContainer}>
        <View style = {[styles.cards , styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style = {[styles.cards , styles.cardTwo]}>
          <Text>Green</Text>
        </View>
        <View style = {[styles.cards , styles.cardThree]}>
          <Text>Blue</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText : {
    fontSize:24,
    fontWeight : "bold",
    paddingHorizontal: 10,  
  },
  cards : {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 120,
    width: 120,
    borderRadius: 7,
    margin: 4,
  },
  flatCardContainer:{
    flex: 1,
    flexDirection: "row",
    padding: 8,
  },
  cardOne: {
    backgroundColor: "#EF5354",
  },
  cardTwo: {
    backgroundColor: "#50DBB4",
  },
  cardThree: {
    backgroundColor: "#5DA3FA",
  }
})