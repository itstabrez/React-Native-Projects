import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  
    return (
    <View>
      <Text style ={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style = {styles.ElevatedCardsContainer}>
        <View style = {[styles.cards , styles.cardOne]}>
            <Text>Tap Me</Text>
        </View>
        <View style = {[styles.cards , styles.cardTwo]}>
            <Text>Tap Me</Text>
        </View>
        <View style = {[styles.cards , styles.cardThree]}>
            <Text>Tap Me</Text>
        </View>
        <View style = {[styles.cards , styles.cardFour]}>
            <Text>Tap Me</Text>
        </View>
        <View style = {[styles.cards , styles.cardFive]}>
            <Text>Tap Me</Text>
        </View>
        <View style = {[styles.cards , styles.cardSix]}>
            <Text>Tap Me</Text>
        </View>
        <View style = {[styles.cards , styles.cardSeven]}>
            <Text>Tap Me</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText : {
      fontSize:24,
      fontWeight : "bold",
      paddingHorizontal: 10,  
    },
    ElevatedCardsContainer :{
        padding : 8,
        flex: 1,
    },
    cards : {
        flex: 1,
        alignItems : "center",
        justifyContent : "center",
        borderRadius: 7,
        height: 120,
        width : 120,
        margin: 4,
        elevation : 4,

        shadowOffset: {
            width : 1,
            height: 1,
        },
        shadowColor: "blue",
        shadowOpacity: 0.4,
        shadowRadius: 5,
    },
    cardOne: {
        backgroundColor: "#CAD5E2"
    },
    cardTwo: {
        backgroundColor: "violet"
    },
    cardThree: {
        backgroundColor: "green"
    },
    cardFour: {
        backgroundColor: "#CAD5E2"
    },
    cardFive: {
        backgroundColor: "#CAD5E2"
    },
    cardSix: {
        backgroundColor: "#CAD5E2"
    },
    cardSeven: {
        backgroundColor: "#CAD5E2"
    },

  })