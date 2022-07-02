import { View, Dimensions, FlatList, Image } from "react-native";
import React from "react";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const SmallBanner = () => {
  const bannerImages = [
    {
      id: "1",
      uri: "https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80",
    },
    {
      id: "2",
      uri: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
      id: "3",
      uri: "https://images.unsplash.com/photo-1482446439224-59276c41a5fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
  ];

  const renderItem = ({ item, index }) => (
    <Image
      source={{ uri: item.uri }}
      resizeMode="cover"
      index={index}
      style={{
        height: SCREEN_HEIGHT / 8,
        width: SCREEN_WIDTH,
        marginVertical: 15,
        borderRadius: 7,
      }}
    />
  );

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        marginTop: 12,
      }}
    >
      <FlatList
        data={bannerImages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default SmallBanner;
