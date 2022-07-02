import { View, Image, Dimensions } from "react-native";
import React from "react";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const CustomerSupport = () => {
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
          uri: "https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?t=st=1656736459~exp=1656737059~hmac=9e5416d9a00147dfd8b9ecb834a6a4a074550b5e57404a57659e9c2c13129ec1&w=1380",
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

export default CustomerSupport;
