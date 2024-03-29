import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import endpoints from "../utils/endpoint";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.mainView}>
      <Text>Home Screen</Text>
      <TouchableOpacity
        style={styles.touchableView}
        onPress={() => {
          navigation.navigate("Home_to_Details", endpoints[0]);
        }}
      >
        <View>
          <Text style={styles.touchableText}>Star Wars</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.touchableView}
        onPress={() => {
          navigation.navigate("Home_to_Details", endpoints[1]);
        }}
      >
        <View>
          <Text style={styles.touchableText}>Black Panther</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchableView}
        onPress={() => {
          navigation.navigate("Home_to_Details", endpoints[2]);
        }}
      >
        <View>
          <Text style={styles.touchableText}>The Matrix</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  touchableView: {
    marginBottom: 30,
    width: 150,
    height: 50,
    alignItems: "center",
    backgroundColor: "orange",
    borderWidth: 5,
    borderRadius: 10,
  },
  touchableText: {
    textAlign: "center",
    paddingTop: 5,
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});

export default HomeScreen;
