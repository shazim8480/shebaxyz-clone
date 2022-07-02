import { StyleSheet, Image, View, ScrollView, Dimensions } from "react-native";
import React, { useState } from "react";
import Carousel from "react-native-snap-carousel";
import { VStack, Text } from "native-base";
import TitleText from "../../shared/TitleText";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const DiscountSlider = () => {
  const [carouselItems] = useState([
    {
      id: "1",
      uri: "https://images.unsplash.com/photo-1613963931023-5dc59437c8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80",
    },
    {
      id: "2",
      uri: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
      id: "3",
      uri: "https://source.unsplash.com/random",
    },
  ]);

  const renderItem = (item, index) => {
    // console.log(item);
    return (
      <View
        style={{
          flex: 1,
          width: SCREEN_WIDTH,
          height: "100%",
        }}
      >
        <Image
          style={{
            width: SCREEN_WIDTH / 3,
            height: SCREEN_WIDTH / 3,
            borderRadius: 7,
          }}
          source={{ uri: item.item.uri }}
          resizeMode="cover"
        />
      </View>
    );
  };

  return (
    <>
      <VStack marginTop={5} alignItems="flex-start">
        <TitleText textTransform="uppercase">
          Best Deal Upto 51% Discount
        </TitleText>
      </VStack>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          marginVertical: 15,
          borderRadius: 7,
        }}
      >
        <Carousel
          layout={"default"}
          //   autoplay={true}
          loop={true}
          enableMomentum={false}
          lockScrollWhileSnapping={true}
          data={carouselItems}
          sliderWidth={SCREEN_WIDTH / 2.7}
          itemWidth={SCREEN_WIDTH / 3}
          renderItem={renderItem}
        />
      </View>
    </>
  );
};

export default DiscountSlider;
