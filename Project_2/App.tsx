import { View, Text, SafeAreaView, ScrollView , StyleSheet , useColorScheme, Switch} from 'react-native'
import React from 'react'
import { useState } from 'react'
import FlatCard from './Component/FlatCard'
import ElevatedCards from './Component/ElevatedCards'
import FancyCards from './Component/FancyCards'

const App = () => {
    const systemIsDarkMode : boolean = useColorScheme() === 'dark';
    const [isDarkMode, setIsDarkMode] = useState(systemIsDarkMode);
    const dynamicStyles = getDynamicStyles(isDarkMode); 
    const toggleSwitch = () => setIsDarkMode(previousState => !previousState);


  return (
    <SafeAreaView style={[dynamicStyles.mainContainer]}>
       <Switch
        trackColor={{ false: '#000000', true: '#FFFFFF' }}
        thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
        onValueChange={toggleSwitch}
        value={isDarkMode}
      />
      <ScrollView>
        <View>
          <FlatCard />
          <ElevatedCards />
          <FancyCards />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
const getDynamicStyles = (isDarkMode : boolean) => StyleSheet.create({
    mainContainer : {
        backgroundColor: isDarkMode ? '#888888' : '#ffffff',
        color: isDarkMode ? "white" : " black",
        height : "100%",
        width : "100%"
    }
});
export default App