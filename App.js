import { useState } from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, View, FlatList, TextInput, Button } from "react-native"

import Header from "./components/Header"
import Task from "./components/Task"

export default function App() {
  const [text, setText] = useState("")
  const [tasks, setTasks] = useState([
    { timestamp: 1, task: "do more arounds the house" },
    { timestamp: 2, task: "clean the dog" },
  ])

  const handleNewTask = () => {
    //grab date time
    const timestamp = new Date()
    setTasks((arr) => [...arr, { timestamp, task: text }])
    setText("")
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setText(text)}
          value={text}
          placeholder="Take care of my sad dog 🐩"
        />
        <Button style={styles.btn} onPress={handleNewTask} title="Add Task" />
      </View>
      <View style={styles.tasksContainer}>
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <Task key={item.timestamp} task={item.task} />
          )}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "flex-start",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    width: "98%",
    marginTop: "1rem",
    alignItems: "center",
  },
  tasksContainer: {
    padding: "1rem",
    flex: 4,
  },
  input: {
    padding: "1rem",
    margin: "0.2rem",
    width: "80%",
  },
  btn: {
    width: "20%",
    height: "100%",
  },
})
