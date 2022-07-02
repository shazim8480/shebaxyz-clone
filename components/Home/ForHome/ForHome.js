import { View, Dimensions, FlatList } from "react-native";
import React from "react";
import { forHome } from "../../../data/forHome";

import { HStack } from "native-base";
import TitleText from "../../shared/TitleText";
import SubtitleText from "../../shared/SubtitleText";
import CategoryCard from "../../shared/CategoryCard";

// const SCREEN_WIDTH = Dimensions.get("window").width;

const ForHome = () => {
  const renderItem = ({ item, index }) => (
    <CategoryCard index={index} item={item} />
  );

  return (
    <View style={{ flex: 1 }}>
      {/* category title */}
      <HStack marginTop={10} alignItems="center" justifyContent="space-between">
        <TitleText>For Your Home</TitleText>
        <SubtitleText>See All</SubtitleText>
      </HStack>
      {/* category details */}
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          // paddingBottom: 10,
        }}
      >
        <FlatList
          data={forHome}
          numColumns="2"
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default ForHome;
