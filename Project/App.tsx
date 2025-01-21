import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  View,
  Text,
} from "react-native";

function App() : JSX.Element {
  const isDarkMode: boolean = useColorScheme() === "dark";   
  const dynamicStyles = getDynamicStyles(isDarkMode); 

  return (
    <SafeAreaView style={[styles.container, dynamicStyles.background]}>
      <View>
        <Text style={[isDarkMode ? styles.darkMode : styles.lightMode, styles.textStyle]}>
          Hello World!
        </Text>
      </View>
    </SafeAreaView>
  );
}

const getDynamicStyles = (isDarkMode: boolean) =>
  StyleSheet.create({
    background: {
      backgroundColor: isDarkMode ? "#FFFFFF" : "#000000" ,
    },
  });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  lightMode: {
    color: "#FFFFFF",
  },
  darkMode: {
    color: "#000000",
  },
  textStyle: {
    fontSize: 25,
  },
});

export default App;