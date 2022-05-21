// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { themes } from "./src/constants/themes/index";

export default function App() {
  return (
    <View style={themes.container}>
      <View style={styles.containerTask}>
        <TextInput placeholder="add new task" />
        <Button title="ADD" color="#8CBCB9" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerTask: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
