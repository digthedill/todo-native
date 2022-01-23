import { useState } from "react"
import { useMutation } from "urql"
import { Modal, Alert, Pressable, StyleSheet, Text, View, Button } from "react-native"
import { CheckBox } from "react-native-elements"

const editTask = `
  mutation($id: Int!, $completed: Boolean){
    editTask(id: $id, completed: $completed){
      id
    }
  }`

const deleteTask = `
  mutation($id: Int!){
    deleteTask(id: $id){
      id
    }
  }`

const Task = (props) => {
  const [modalVisible, setModalVisible] = useState(false)
  const { item } = props
  const complete = item.completed
  const [editRes, editTaskMutation] = useMutation(editTask)
  const [deleteRes, deleteTaskMutation] = useMutation(deleteTask)

  const completeTask = async () => {
    const payload = {
      id: item.id,
      completed: complete ? false : true
    }
    await editTaskMutation(payload)
       
  }
  const handleDeleteTask = async () => {
    const payload = {id: item.id}
    await deleteTaskMutation(payload)
    setModalVisible(false)
  }

  const completedBackground = () =>
    complete ? { backgroundColor: "#444" } : { backgroundColor: "#0e0e0e" }

  const completedColor = () =>
    complete ? { color: "#999" } : { color: "#efefef" }

  return (
    <Pressable onLongPress={() => setModalVisible(true)}>
      <View style={[styles.container, completedBackground()]}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>
              Ready to delete the task?
            </Text>
            <View style={styles.modalActions}>
              <Button title="Delete" color={'#f44336'} onPress={handleDeleteTask}/>
              <Button title="Cancel" onPress={() => setModalVisible(false)}/>
            </View>
          </View>
        </View>
       
        </Modal>
        <Text style={[styles.task, completedColor()]}>{item.task}</Text>
        <CheckBox checked={complete} onPress={completeTask} />
      </View>
    </Pressable>
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 45,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalActions: {
    marginTop: 10, 
    flexDirection: 'row',
    gap: 10
  }
})

export default Task
