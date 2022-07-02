import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";

import { NativeBaseProvider } from "native-base";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NativeBaseProvider>
        {/* <View style={{ flex: 1 }}> */}
        <HomeScreen />
        {/* </View> */}
        <StatusBar style="auto" />
      </NativeBaseProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 15,
  },
});
