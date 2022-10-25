import React from "react";
import { View, StyleSheet, Text } from "react-native";
import params from "../params";

export default (props) => {
  const { mined, opened, nearMines } = props;

  const styleField = [styles.field];
  if (opened) {
    styleField.push(styles.opened);
  }
  if (styleField.length === 1) {
    styleField.push(styles.regular);
  }

  let color = null;
  if (nearMines > 0) {
    if (nearMines == 1) color = "#00008B";
    if (nearMines == 2) color = "#008000";
    if (nearMines > 2 && nearMines < 6) color = "#FF8C00";
    if (nearMines >= 6) color = "#B22222";
  }

  return (
    <View style={styleField}>
      {!mined && opened && nearMines > 0 ? (
        <Text style={[styles.label, { color: color }]}>{nearMines}</Text>
      ) : (
        false
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  field: {
    height: params.blockSize,
    width: params.blockSize,
    borderWidth: params.borderSize,
  },
  regular: {
    backgroundColor: "#999",
    borderLeftColor: "#ccc",
    borderTopColor: "#ccc",
    borderRightColor: "#333",
    borderBottomColor: "#333",
  },
  opened: {
    backgroundColor: "#999",
    borderColor: "#777",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontWeight: "bold",
    fontSize: params.fontSize,
  },
});
