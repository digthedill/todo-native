import { useState } from "react"
import { Button, StyleSheet, Text, View } from "react-native"
import { CheckBox } from "react-native-elements"

const Task = (props) => {
  const { setTasks, item, tasks } = props
  const [complete, setComplete] = useState(false)

  const removeTask = () => {
    //on swipe right trigger method
    setTasks((arr) => arr.filter((task) => task.timestamp !== item.timestamp))
  }

  const completeTask = () => {
    setComplete(!complete)
    if (complete === false) {
      const reorderedList = array_move(
        tasks,
        tasks.indexOf(item),
        tasks.length - 1
      )
      setTasks(reorderedList)
    }
  }

  const completedBackground = () =>
    complete ? { backgroundColor: "#444" } : { backgroundColor: "#0e0e0e" }

  const completedColor = () =>
    complete ? { color: "#999" } : { color: "#efefef" }

  const array_move = (arr, old_index, new_index) => {
    if (new_index >= arr.length) {
      var k = new_index - arr.length + 1
      while (k--) {
        arr.push(undefined)
      }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0])
    return arr // for testing
  }

  return (
    <View style={[styles.container, completedBackground()]}>
      <Text style={[styles.task, completedColor()]}>{item.task}</Text>
      <CheckBox checked={complete} onPress={completeTask} />
      {/* <Button title="x" onPress={removeTask} /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "95%",
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 10,
  },
  task: {
    fontSize: 16,
  },
})

export default Task
