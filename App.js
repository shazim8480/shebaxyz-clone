import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import HomeScreen from "./screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";

import { colors } from "./constants/colors";

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={colors.primary}
      inactiveColor={colors.text}
      barStyle={{ backgroundColor: "white" }}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={colors.text} />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Inbox",
          tabBarIcon: ({ color }) => (
            <AntDesign name="inbox" size={24} color={colors.text} />
          ),
        }}
        name="Inbox"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Orders",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="reorder" size={24} color={colors.text} />
          ),
        }}
        name="Orders"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Help",
          tabBarIcon: ({ color }) => (
            <Entypo name="help" size={24} color={colors.text} />
          ),
        }}
        name="Help"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "More",
          tabBarIcon: ({ color }) => (
            <Foundation name="indent-more" size={24} color={colors.text} />
          ),
        }}
        name="More"
        component={HomeScreen}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            {/* the top most component is regarded as the default screen */}
            <Stack.Screen name="Home" component={BottomTabNavigator} />
            {/* <Stack.Screen name="DetailsScreen" component={DetailsScreen} /> */}
          </Stack.Navigator>
          <StatusBar style="auto" />
        </NavigationContainer>
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
