import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCard from './Component/FlatCard'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
        <FlatCard></FlatCard>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App