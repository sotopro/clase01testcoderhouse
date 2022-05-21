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
    setTasks((currentTasks) => [
      ...currentTasks,
      { id: Math.random(), value: task },
    ]);
  };

  return (
    <View style={themes.container}>
      <View style={styles.containerTask}>
        <TextInput
          style={styles.textInput}
          placeholder="add new task"
          value={task}
          onChangeText={onHandleInput}
        />
        <Button
          title="ADD"
          color="#8CBCB9"
          onPress={() => onHandleSubmit()}
          disabled={task.length === 0}
        />
      </View>
      {tasks.length > 0 && (
        <View style={styles.containerList}>
          <Text style={styles.titleList}>Task List</Text>
          {tasks.map((item) => (
            <View key={`task-${item.id}`} style={styles.containerItem}>
              <Text style={styles.item}>{item.value}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  containerTask: {
    marginTop: 40,
    paddingHorizontal: 25,
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
    marginHorizontal: 20,
  },
  containerItem: {
    marginVertical: 10,
  },
  item: {
    fontSize: 14,
    color: "#212121",
  },
  titleList: {
    marginTop: 10,
    fontSize: 18,
    color: "#212121",
    fontWeight: "bold",
  },
});
