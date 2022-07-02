import { View, Dimensions } from "react-native";
import React from "react";
import { Box, AspectRatio, Image, Text } from "native-base";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const CategoryCard = ({ index, item }) => {
  return (
    <View
      style={[
        { paddingBottom: 40 },
        { height: SCREEN_HEIGHT / 4.5, width: SCREEN_WIDTH / 2.3 },
        { marginTop: index === 0 || index === 1 ? 15 : 25 },
        index % 2 == 0 ? { marginRight: 25 } : { marginRight: 0 },
      ]}
    >
      <Box rounded="lg" marginTop={6} marginBottom="20px">
        <AspectRatio w="25%" h="100%" ratio={12 / 8}>
          <Image source={{ uri: item.uri }} alt="image" resizeMode="cover" />
        </AspectRatio>
        <Text fontWeight="light" marginTop="5px" fontSize="md">
          {item.name}
        </Text>
      </Box>
    </View>
  );
};

export default CategoryCard;
