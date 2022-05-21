// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { themes } from "./src/constants/themes/index";

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const onHandleInput = (text) => {
    setTask(text);
  };

  const onHandleSubmit = () => {
    setTask("");
    setTasks([...tasks, task]);
  };

  console.warn({ tasks });

  return (
    <View style={themes.container}>
      <View style={styles.containerTask}>
        <TextInput
          style={styles.textInput}
          placeholder="add new task"
          value={task}
          onChangeText={onHandleInput}
        />
        <Button title="ADD" color="#8CBCB9" onPress={() => onHandleSubmit()} />
      </View>
      <View style={styles.containerList}>
        {tasks.map((item, idx) => (
          <View key={`task-${idx}`} style={styles.containerItem}>
            <Text style={styles.item}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerTask: {
    padding: 25,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: {
    borderColor: "#8CBCB9",
    borderBottomWidth: 1,
    marginBottom: 10,
    width: "60%",
    height: 40,
    fontSize: 14,
    color: "#212121",
  },
  containerList: {
    margin: 25,
  },
  containerItem: {
    padding: 10,
  },
  item: {
    fontSize: 14,
    color: "#212121",
    fontWeight: "bold",
  },
});
