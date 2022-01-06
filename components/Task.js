import { StyleSheet, Text } from "react-native"

const Task = (props) => {
  /**
   * Need to:
   * 1) ui for rearranging tasks
   * 2) checkbox for completeing tasks
   */
  return <Text style={styles.task}>{props.task}</Text>
}

const styles = StyleSheet.create({
  task: {
    fontSize: "1rem",
    color: "blue",
  },
})

export default Task
