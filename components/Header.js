import { Text, StyleSheet, View } from "react-native"

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>time to do</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0e0e0e",
    color: "#fefefe",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "15%",
    paddingBottom: "8%",
  },
  title: {
    fontSize: 60,
    fontWeight: "600",
    color: "white",
  },
})

export default Header
