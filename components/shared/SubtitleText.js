// import { View, Text } from "react-native";
import React from "react";
import { Text, VStack } from "native-base";

import { colors } from "../../constants/colors";

const SubtitleText = (props) => {
  return (
    <VStack>
      <Text color={colors.primary} fontSize="md" fontWeight="semibold">
        {props.children}
      </Text>
    </VStack>
  );
};

export default SubtitleText;
