import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
  return (
    <View>
      <Text style = {styles.headingText}>Trending Places</Text>
      <View style = {[styles.cards , styles.elevatedCards]}>
        <Image source={{uri : "https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?cs=srgb&dl=pexels-pixabay-208745.jpg&fm=jpgs"}} style ={styles.cardImage}></Image>
        <View style = {styles.cardBody}>
            <Text style = {styles.cardTitle}>Golden Gate Bridge</Text>
            <Text style = {styles.cardLabel}>Mill Valley, CA, United States</Text>
            <Text style = {styles.cardDescription}>Beautiful View Of The Bridge Over Ocean</Text>
            <Text style = {styles.cardFooter}>Distance is almost 70k Miles</Text>
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
        height: 320,
        width: "100%",
        paddingHorizontal : 16,
        paddingVertical: 12,
        borderRadius: 7,
      },
      elevatedCards : {
        elevation: 4,
        shadowOffset: {
          height: 1,
          width : 1,
        },
        backgroundColor: "#ffffff",
      },
      cardBody : {
        flex : 1,
        flexGrow : 1,
        paddingHorizontal : 12,
      },
      cardTitle : {
        fontSize : 22,
        fontWeight : 'bold',
        marginBottom : 4,
      },
      cardLabel : {
        fontSize : 16,
        marginBottom : 7,
      },
      cardDescription : {
        color:"#616C6F",
        flexShrink : 1,
        fontSize : 14,
        marginTop : 5,
        marginBottom : 2,
      },
      cardFooter : {
        fontSize : 12,
      },
    
      cardImage : {
        height: 180,
        marginBottom: 12,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,

      }

})