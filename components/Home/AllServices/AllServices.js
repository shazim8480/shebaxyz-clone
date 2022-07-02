import {
  View,
  Dimensions,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { VStack, HStack } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../../../constants/colors";

const SCREEN_WIDTH = Dimensions.get("window").width;

const AllServices = () => {
  const serviceInfo = [
    {
      id: "1",
      name: "AC Repair Services",
    },
    {
      id: "2",
      name: "Tips & Travels",
    },
    {
      id: "30",
      name: "Appliance Repair",
    },
    {
      id: "4",
      name: "Beauty & Salon",
    },
    {
      id: "5",
      name: "Car Care Services",
    },
    {
      id: "6",
      name: "Cleaning & Pest",
    },
    {
      id: "7",
      name: "Painting & Renovation",
    },
    {
      id: "8",
      name: "Shifting",
    },
  ];

  const renderItem = ({ item, index }) => (
    <TouchableOpacity>
      <VStack
        style={{ width: SCREEN_WIDTH / 4.35 }}
        marginTop="15px"
        marginBottom="15px"
        space={4}
        alignItems="center"
        justifyContent="flex-start"
      >
        <MaterialIcons name="category" size={28} color={colors.primary} />
        <Text style={{ fontSize: 13, lineHeight: 15, textAlign: "center" }}>
          {item.name}
        </Text>
      </VStack>
    </TouchableOpacity>
  );

  return (
    <View
      style={{
        width: SCREEN_WIDTH - 30,
        flex: 1,
        borderColor: "lightgray",
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 30,
        marginBottom: 22,
        paddingVertical: 10,
      }}
    >
      {/* service details */}
      <View
        style={{
          width: SCREEN_WIDTH,
          flex: 1,
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <FlatList
          data={serviceInfo}
          numColumns="4"
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View
        style={{
          width: SCREEN_WIDTH - 60,
          marginLeft: 15,
          marginVertical: 15,
          borderTop: 1,
          borderColor: "lightgray",
          borderStyle: "dashed",
          borderWidth: 1,
        }}
      ></View>
      <TouchableOpacity>
        <View
          style={{
            paddingVertical: 5,
          }}
        >
          <HStack space={1.5} justifyContent="center" alignItems="center">
            <Text style={{ color: colors.primary }}>View All Categories</Text>
            <AntDesign name="caretdown" size={10} color={colors.primary} />
          </HStack>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AllServices;
