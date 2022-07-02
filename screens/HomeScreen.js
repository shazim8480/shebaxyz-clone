import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/shared/Header";
import ImageSlider from "../components/shared/ImageSlider";
import Trending from "../components/Home/Trending/Trending";
import Recommended from "../components/Home/Recommended/Recommended";

const HomeScreen = () => {
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          width: "100%",
          marginBottom: 10,
        }}
      >
        <Header />
        <ImageSlider />
        <ImageSlider />
        <Trending />
        <Recommended />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
