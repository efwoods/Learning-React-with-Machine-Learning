import React from "react";
import {useState, useRef} from 'react';
import { Text, View, Pressable, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Ionicons } from "@expo/vector-icons";


export default function CircleButton({ onPress }) {


  return (
    <View style={styles.circleButtonContainer}>
      <Pressable
        style={styles.circleButton}
        onPressIn={async () => {
            // alert("Capturing images");
            try {
                const localUri = await captureRef(imageRef, {
                    height: 440,
                    quality: 1
                })
            await MediaLibrary.saveToLibraryAsync(localUri);
            if (localUri) {
              alert("Saved!");
            }
          } catch (e) {
            console.log(e);
          }
        }}
        onPressOut={() => {
          alert("Triggering Training of the model");
        }}
      >
        <Ionicons name="ios-person-add" size={38} color="#25292e" ></Ionicons>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  circleButtonContainer: {
    width: "100%",
    height: 84,
    marginHorizontal: 60,
    // borderWidth: 10,
    // borderColor: '#000',
    // borderRadius: 42,
    padding: 3,
  },
  circleButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 42,
    backgroundColor: "#fff",
  },
});