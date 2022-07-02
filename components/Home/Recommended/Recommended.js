import { View, FlatList } from "react-native";
import React from "react";
import { recommended } from "../../../data/recommended";

import { HStack } from "native-base";
import TitleText from "../../shared/TitleText";
import SubtitleText from "../../shared/SubtitleText";
import CategoryCard from "../../shared/CategoryCard";

const Recommended = () => {
  const renderItem = ({ item, index }) => (
    <CategoryCard index={index} item={item} />
  );

  return (
    <View style={{ flex: 1 }}>
      {/* category title */}
      <HStack marginTop={10} alignItems="center" justifyContent="space-between">
        <TitleText>Recommended</TitleText>
        <SubtitleText>See All</SubtitleText>
      </HStack>
      {/* category details */}
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <FlatList
          data={recommended}
          // nestedScrollEnabled={true}
          scrollEnabled={false}
          numColumns="2"
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default Recommended;
