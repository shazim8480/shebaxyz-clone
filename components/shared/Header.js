import { StyleSheet, View } from "react-native";
import React from "react";
import { Box, Text, Stack, VStack, HStack, Pressable } from "native-base";
import SearchBar from "./SearchBar";
import { colors } from "../../constants/colors";

import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={{ flex: 1, paddingTop: 25 }}>
      <Stack paddingTop={3} space={4}>
        {/* <Box justifyContent="space-between" maxWidth="100%"> */}
        <HStack space={3} justifyContent="flex-start">
          <VStack>
            <Box
              alignSelf="center"
              justifyContent="center"
              bg={colors.primary}
              marginTop="4px"
              paddingVertical={8}
              paddingHorizontal={10}
              //   borderRadius="50%"
              rounded="full"
            >
              <FontAwesome5 name="map-marker-alt" size={20} color="white" />
            </Box>
          </VStack>
          <VStack space={1}>
            <Text fontWeight="semibold" fontSize="md" color={colors.primary}>
              Gulshan
            </Text>
            <Pressable>
              <HStack alignItems="center" space={1.5}>
                <Text fontSize="sm" color={colors.text}>
                  Gulshan
                </Text>
                <AntDesign name="caretdown" size={10} color={colors.text} />
              </HStack>
            </Pressable>
          </VStack>
        </HStack>
        {/* </Box> */}
        {/* search bar */}
        <SearchBar />
      </Stack>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
