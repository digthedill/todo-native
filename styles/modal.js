import { StyleSheet } from "react-native";

const modalStyle = StyleSheet.create({
    title: {
        fontSize: 25,
        marginBottom: 25
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

export default modalStyle