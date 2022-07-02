import { ScrollView, View } from "react-native";
import React from "react";
import Header from "../components/shared/Header";
import ImageSlider from "../components/shared/ImageSlider";
import Trending from "../components/Home/Trending/Trending";
import Recommended from "../components/Home/Recommended/Recommended";
import CarSolution from "../components/Home/CarSolution/CarSolution";
import ForHome from "../components/Home/ForHome/ForHome";
import ForCare from "../components/Home/ForCare/ForCare";
import DiscountBanner from "../components/Home/DiscountBanner/DiscountBanner";
import DiscountSlider from "../components/Home/DiscountSlider/DiscountSlider";
import SmallBanner from "../components/Home/SmallBanner/SmallBanner";
import CustomerSupport from "../components/Home/CustomerSupport/CustomerSupport";
import PrimaryButton from "../components/shared/PrimaryButton";
import AllServices from "../components/Home/AllServices/AllServices";

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={{ backgroundColor: "white" }}>
      <View
        style={{
          flex: 1,
          width: "100%",
        }}
      >
        <Header />
        <ImageSlider />
        <AllServices />
        <DiscountBanner />
        <DiscountSlider />
        <ImageSlider />
        <Trending />
        <Recommended />
        <SmallBanner />
        <CarSolution />
        <ForHome />
        <ForCare />
        <CustomerSupport />
      </View>
      <View style={{ flex: 1, marginBottom: 25 }}>
        <PrimaryButton>View All Services</PrimaryButton>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
