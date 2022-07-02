import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/shared/Header";
import ImageSlider from "../components/shared/ImageSlider";
import Trending from "../components/Home/Trending/Trending";
import Recommended from "../components/Home/Recommended/Recommended";
import CarSolution from "../components/Home/CarSolution/CarSolution";
import ForHome from "../components/Home/ForHome/ForHome";
import ForCare from "../components/Home/ForCare/ForCare";

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
        <CarSolution />
        <ForHome />
        <ForCare />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
