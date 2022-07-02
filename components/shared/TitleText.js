// import { View, Text } from "react-native";
import React from "react";
import { Text, VStack } from "native-base";

import { colors } from "../../constants/colors";

const TitleText = (props) => {
  return (
    <VStack>
      <Text
        textTransform={props.textTransform}
        color={colors.text}
        fontSize="xl"
        fontWeight="bold"
      >
        {props.children}
      </Text>
    </VStack>
  );
};

export default TitleText;
