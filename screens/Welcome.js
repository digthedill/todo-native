import { useState } from "react"
import { Button, View, StyleSheet, Modal, Text } from "react-native"
import { TextInput } from "react-native"
import Header from "../components/Header"
import modalStyle from "../styles/modal"

const WelcomeScreen = ({navigation}) => {
    const [showModal, setShowModal] = useState(false)
    const [login, setLogin] = useState({
        username: '',
        password: ''
    })
    const [register, setRegister] = useState({
        name: '',
        email: '',
        username: '',
        password: ''
    })
    const [loginOrRegister, setLoginOrRegister] = useState('login')


    const sendRegistration = () => {
        console.log(register)
    }
    const sendLogin = () => {
        console.log(login)
    }

    const LoginComponent = (
    <View style={modalStyle.centeredView}>
        <View style={modalStyle.modalView}>
        <Text style={modalStyle.title}>Login</Text>
         <TextInput
            onChangeText={(text) => setLogin({...login, username: text})}
            value={login.username}
            placeholder="cool_guy"
            style={styles.input}
        />
         <TextInput
            onChangeText={(text) => setLogin({...login, password: text})}
            value={login.password}
            secureTextEntry={true}
            placeholder="password"
            style={styles.input}
        />
           <View style={modalStyle.modalActions}>
                <Button title="Submit" onPress={sendLogin} />
                <Button title="Cancel" color={'#f44336'} onPress={() => setShowModal(false)} />
            </View>
        </View>
    </View>)

    const RegisterComponent = (
    <View style={modalStyle.centeredView}>
        <View style={modalStyle.modalView}>
        <Text style={modalStyle.title}>Register</Text>
         <TextInput
            onChangeText={(text) => setRegister({...register, name: text})}
            value={register.name}
            placeholder="Full Name"
            style={styles.input}
        />
         <TextInput
            onChangeText={(text) => setRegister({...register, email: text})}
            value={register.email}
            placeholder="joe_shmo@example.com"
            style={styles.input}
        />
         <TextInput
            onChangeText={(text) => setRegister({...register, username: text})}
            value={register.username}
            placeholder="username"
            style={styles.input}
        />
         <TextInput
            onChangeText={(text) => setRegister({...register, password: text})}
            value={register.password}
            secureTextEntry={true}
            placeholder="password"
            style={styles.input}
        />
        <View style={modalStyle.modalActions}>
            <Button title="Submit" onPress={sendRegistration} />
            <Button title="Cancel" color={'#f44336'} onPress={() => setShowModal(false)} />
        </View>
        </View>
    </View>)

    const handleRegistration = () => {
        setLoginOrRegister('register')
        setShowModal(true)

    }
    const handleLogin = () => {
        setLoginOrRegister('login')
        setShowModal(true)
    }
    return (
        <View style={styles.container}>
            <Header />
            <Button style={styles.button} title="Register" onPress={handleRegistration}/>
            <Button style={styles.button} title="Login" onPress={handleLogin}/>
            <Button style={styles.button} title="Continue as Guest"/>
            <Modal 
                animationType="fade"
                transparent={true}
                visible={showModal}
                >
                    {loginOrRegister === 'login' ?
                        LoginComponent :
                        RegisterComponent}
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
        gap: 30
    },
    button: {
        marginBottom: 10,
        marginTop: 10
    },
    title: {
        fontSize: 50
    },
    input: {
        width: '100%',
        padding: 10,
        marginBottom: 20,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 10
    }
})

export default WelcomeScreen