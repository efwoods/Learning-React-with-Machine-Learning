import { StyleSheet, View, Pressable, Text } from "react-native";
import React from 'react'
export default function Button({label, theme, onPress}) {
    if (theme === "primary") {
        return (
          <View
            style={[
              styles.buttonContainer,
              { borderWidth:14, borderColor: "#60e096", borderRadius: 8 },
            ]}
          >
            <Pressable
              style={[styles.button, { backgroundColor: "#fff" }]}
              onPress={onPress}
            >
              <FontAwesome
                name="picture-o"
                size={18}
                color="#25292e"
                style={styles.buttonIcon}
              />
              <Text style={[styles.buttonLabel, { color: "#25292e" }]}>
                {label}
              </Text>
            </Pressable>
          </View>
        );
      }
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: 68,
    width: 320,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 16,
  },
});
