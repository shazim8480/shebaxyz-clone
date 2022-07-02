import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";

import { colors } from "../../constants/colors";

const SCREEN_WIDTH = Dimensions.get("window").width;

const PrimaryButton = (props) => {
  return (
    <View style={styles.buttonWrapper}>
      <TouchableOpacity activeOpacity={0.8}>
        <View style={{ ...styles.button, ...props.style }}>
          <Text style={styles.buttonText}>{props.children}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonWrapper: {
    width: SCREEN_WIDTH - 32,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    width: SCREEN_WIDTH - 32,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 16,
  },
});
