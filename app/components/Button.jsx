import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const Button = (props) => {
  const { onPress, color, title } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor: color ? color : "#8BD5F3" }]}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#8BD5F3",
    paddingVertical: 8,
    paddingHorizontal: 25,
    borderRadius: 15,
    marginVertical: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 21,
    fontWeight: "bold",
  },
});
