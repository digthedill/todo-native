import { Button, StyleSheet, Text, View } from "react-native"

const Task = (props) => {
  /**
   * Need to:
   * 1) ui for rearranging tasks
   * 2) checkbox for completeing tasks
   */
  const removeTask = () => {
    props.setTasks((arr) =>
      arr.filter((task) => task.timestamp !== props.item.timestamp)
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.task}>{props.item.task}</Text>
      <Button title="x" onPress={removeTask} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    marginBottom: "6%",
  },
  task: {
    fontSize: 16,
    color: "blue",
  },
})

export default Task
