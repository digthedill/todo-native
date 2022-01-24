import { StyleSheet, View} from "react-native"
import { StatusBar } from "expo-status-bar"
import Header from "../components/Header"
import TaskContainer from "../components/TaskContainer"
import TaskInput from "../components/TaskInput"


const TodoScreen = () => {

    return (
      <View style={styles.container}>
        <Header />
        <TaskInput />
        <TaskContainer/>
        <StatusBar style="auto" />
      </View>
      )
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      justifyContent: "flex-start",
    }
  })

export default TodoScreen