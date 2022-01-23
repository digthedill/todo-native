import { useState } from "react"
import { View, TextInput, Button, StyleSheet } from "react-native"
import { useMutation } from "urql"

const createTask = `
    mutation ($task: String!) {
        createTask(task: $task){
            id
            task
        }
    }
`
const TaskInput = () => {
    const [text, setText] = useState("")
    const [result, update] = useMutation(createTask)
    const handleNewTask = async () => {
        const payload = {task: text}
        const result = await update(payload)
        console.log(result)
    }

    return (
    <View style={styles.inputContainer}>
        <TextInput
        style={styles.input}
        onChangeText={(text) => setText(text)}
        value={text}
        placeholder="Walk my happy dog 🐩"
        />
        <Button style={styles.btn} onPress={handleNewTask} title="Add" />
  </View>)
}

const styles = StyleSheet.create({
    inputContainer: {
        display: "flex",
        flexDirection: "row",
        width: "98%",
        padding: "5%",
        marginTop: "5%",
        alignItems: "center",
      },
    
      input: {
        padding: "3%",
        margin: "1%",
        borderWidth: 1,
        borderRadius: 10,
        width: "80%",
      },
      btn: {
        width: "20%",
        height: "100%",
      }
})

export default TaskInput