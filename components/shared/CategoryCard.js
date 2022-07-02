import { View, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import { Box, Image, Text } from "native-base";
// import { TouchableOpacity } from "react-native-gesture-handler";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const CategoryCard = ({ index, item }) => {
  return (
    <TouchableOpacity>
      <View
        style={[
          {
            height: SCREEN_HEIGHT / 4.5,
            width: SCREEN_WIDTH / 2.2,
            borderRadius: 8,
          },
          index % 2 == 0 ? { marginRight: 12 } : { marginRight: 0 },
        ]}
      >
        <Box rounded="lg" marginTop={7} marginBottom="20px">
          <Image
            style={{
              height: SCREEN_HEIGHT / 8,
              width: SCREEN_WIDTH / 2.3,
              borderRadius: 8,
            }}
            source={{ uri: item.uri }}
            alt="image"
            resizeMode="cover"
          />
          <View style={{ marginTop: 5 }}>
            <Text fontWeight="light" fontSize="md">
              {item.name}
            </Text>
          </View>
        </Box>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;
