import { Linking, StyleSheet, Text, View , Image , TouchableOpacity} from 'react-native'
import React from 'react'

export default function ActionCards() {
    function openWebsite(websiteLink : string){
        Linking.openURL(websiteLink);
    }
  return (
    <View>
        <Text style = {styles.headingText}>Blog Card</Text>
        <View style = {[styles.cards , styles.elevatedCards]}>
        <View style = {styles.headingContainer}>
        <Text style = {styles.headerText}>What's New in React Native last Month</Text>
        </View>
        <Image  source={{uri: "https://www.stellardigital.in/blog/wp-content/uploads/2022/04/Whats-new-in-Latest-Update-of-React-Native-min.jpg"}} style = {styles.clickableCards} />
        <View style = {styles.cardBody}>
            <Text numberOfLines={3}>The React Native era is initiated by Facebook. It was not well-known at first, but as the trend of cross-platform app development gained in popularity, React Native became well-known. It has since become the most popular framework for developing, coding, and deploying Android and iOS mobile applications.

            React Native is an open-source JavaScript framework that allows you to create apps for many platforms, including iOS, Android, and web applications, all from the same codebase. It is React-based and brings all its glory to mobile app
        </Text>
        </View>
        <View style = {styles.footerContainer}>
            <TouchableOpacity onPress={() => openWebsite('https://www.stellardigital.in/blog/whats-new-in-the-latest-version-of-react-native-v0-68/')}>
                <Text style = {styles.blogLink}>Read More..</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openWebsite('https://www.linkedin.com/in/mohammad-tabrez-alam-65a551208/')}>
                <Text style = {styles.socialLink}>Follow Me</Text>
            </TouchableOpacity>
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
        marginTop : 12,
        marginBottom : 8,
    },
    cards : {
        height: 370,
        width: "100%",
        paddingHorizontal : 16,
        paddingVertical: 16,
    },
    elevatedCards : {
        elevation : 4,
        backgroundColor : "#0ABDE3",
        shadowOffset : {
            height : 1,
            width : 1,
        },
        shadowColor : "#333",
        shadowOpacity : 0.4,
    },
    cardBody : {
        marginTop : 16,
        paddingHorizontal: 12,
    },
    headingContainer : {
        flex : 1,
        flexDirection : 'row',
        justifyContent : 'center',
    },
    headerText : {
        fontWeight : "bold",
        fontSize : 18
    },
    clickableCards : {
        height : 200,
        borderTopLeftRadius : 12,
        borderTopRightRadius : 12,
    },
    footerContainer : {
        marginTop : 10,
        flex : 1,
        flexDirection : "row",
        justifyContent : 'space-between',
        paddingHorizontal : 14
    },
    blogLink : {
        backgroundColor : "#ffffff",
        fontSize : 16,
        paddingHorizontal : 21, 
        paddingVertical : 2, 
        fontWeight : "800",
        borderRadius : 6,
    },
    socialLink : {
        backgroundColor : "#ffffff",
        paddingHorizontal : 21, 
        paddingVertical : 2, 
        fontSize : 16,
        fontWeight : "600",
        borderRadius : 6,
    }
})