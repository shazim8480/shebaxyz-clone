import { View, Image, Dimensions } from "react-native";
import React from "react";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const DiscountBanner = () => {
  return (
    <View
      style={{
        height: SCREEN_HEIGHT / 4.2,
        width: SCREEN_WIDTH,
        borderRadius: 8,
        marginVertical: 25,
      }}
    >
      <Image
        resizeMode="cover"
        source={{
          uri: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        }}
        style={{
          height: SCREEN_HEIGHT / 4.2,
          width: SCREEN_WIDTH - 30,
          borderRadius: 8,
        }}
      />
    </View>
  );
};

export default DiscountBanner;
