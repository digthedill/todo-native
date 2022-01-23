import { useState } from "react"
import { StatusBar } from "expo-status-bar"
import { createClient, Provider } from "urql"

import { StyleSheet, View} from "react-native"

import Header from "./components/Header"
import TaskContainer from "./components/TaskContainer"
import TaskInput from "./components/TaskInput"


export default function App() {

  const client = createClient({
    url: 'http://localhost:4000/graphql'
  })


  return (
    <Provider value={client}>
      <View style={styles.container}>
      <Header />
      <TaskInput />
      <TaskContainer/>
      <StatusBar style="auto" />
    </View>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "flex-start",
  }
})
