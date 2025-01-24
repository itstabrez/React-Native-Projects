import { Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ContactUs() {
    const contactList = [
        {   
            uid : 1,
            socialMedia : 'https://www.linkedin.com/in/mohammad-tabrez-alam-65a551208/',
            name : 'Tabrez Alam',
            imageUrl : 'https://media.licdn.com/dms/image/v2/D5603AQHI4xgdNnGO6g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1729934236257?e=1743033600&v=beta&t=FrUT-Xhm2OlGg9tqelj4vl6HREJNpicy3xfI9Mv5XOo',
        },
        {
            uid : 2,
            socialMedia : 'https://www.linkedin.com/in/haiderali81/',
            name : 'Haider Ali',
            imageUrl : 'https://media.licdn.com/dms/image/v2/D5603AQHCUqq3DUOk1g/profile-displayphoto-shrink_400_400/B56ZRf.D9KH0Ag-/0/1736776893914?e=1743033600&v=beta&t=rYvd6FGG4iOP1B6-SUBzE1nnrHLdwrNBLHFfVsUmmzg',
        },
        {
            uid : 3,
            socialMedia : 'https://www.linkedin.com/in/mohsinali0899/',
            name : 'Mohsin Ali',
            imageUrl : 'https://media.licdn.com/dms/image/v2/C4E03AQHrjQ-FlT5wEA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1622806605880?e=1743033600&v=beta&t=9w2BPVXsyac3kVW4fpjqvgZ-0ByzEaPkj7sp7zm4fik',
        }
    ]
    const openProfile = (link : string) => {
        Linking.openURL(link);
    }
  return (
    <View>
      <Text style = {styles.headerText}>Application Dev Team</Text>
        <ScrollView horizontal = {true} style = {styles.container}>
        {contactList.map(({uid , name , socialMedia , imageUrl}) => (
            <View key={uid}>
                <Image source={{uri: imageUrl}} style ={styles.contactImage} />
                <View style = {styles.contactBody}>
                <Text style = {styles.textDesign}>{name}</Text>
                <TouchableOpacity style = {styles.socialMediaLink} onPress={() => openProfile(socialMedia)}>
                    <Text>View Profile</Text>
                </TouchableOpacity>
                </View>
            </View>
        ))}
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headerText : {
        fontSize : 24 ,
        fontWeight : 'bold',
        paddingHorizontal: 10,  
        marginTop : 12,
        marginBottom : 8,
    },
    container : {
        height : 250,
        width : "100%",
    },
    contactImage : {
        height: 120,
        width : 120,
        borderRadius : 120 / 2,
        margin: 10,
    },
    contactBody : {
        flex : 1,
        flexDirection : 'column',
        alignItems : 'center',
        width : 120,
        marginHorizontal: 10,
    },
    socialMediaLink : {
        backgroundColor : '#EEC213',
        paddingHorizontal : 10,
        paddingVertical : 4,
        borderRadius : 12,
    },
    textDesign : {
        fontSize : 16,
        fontWeight : 'bold',
    }
})