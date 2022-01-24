import { useState } from "react"
import { useMutation } from "urql"
import { Button, View, StyleSheet, Modal, Text } from "react-native"
import { TextInput } from "react-native"
import Header from "../components/Header"
import modalStyle from "../styles/modal"

import { useContext } from "react"
import { AuthContext } from "../context/auth"

/**
 * TODO:
 * 1) persit user token in application
 * 2) show data dynamically in app
 */

const loginMutation = `
    mutation($username: String!, $password: String!){
        login(username: $username, password: $password){
            token
            user {
                id
                username
            }
        }
    }
`
const registrationMutation = `
    mutation($name: String!, $email: String!, $username: String!, $password: String!){
        signup(
            username: $username,
            name: $name,
            email: $email,
            password: $password
        ){
            token
            user {
                id
                username
            }
        }
    }
`

const WelcomeScreen = ({navigation}) => {
    const ctx = useContext(AuthContext)
    const [showModal, setShowModal] = useState(false)
    const [loginPayload, setLoginPayload] = useState({
        username: '',
        password: ''
    })
    const [registerPayload, setRegisterPayload] = useState({
        name: '',
        email: '',
        username: '',
        password: ''
    })
    const [loginOrRegister, setLoginOrRegister] = useState('login')
    const [loginRes, loginUpdate] = useMutation(loginMutation)
    const [registerRes, registerUpdate] = useMutation(registrationMutation)

    const sendRegistration = async () => {
        const {data} = await registerUpdate(registerPayload)
        const token = data.signup.token
        const user = data.signup.user
        ctx.authContext.signup({
            user, 
            token
        })
    }
    const sendLogin = async () => {
        try{
            const {data} = await loginUpdate(loginPayload)
            const token = data.login.token
            const user = data.login.user
            ctx.authContext.signIn({
                user,
                token
            })
        } catch(err) {
            console.log(err.message)
        }
    }

    const LoginComponent = (
    <View style={modalStyle.centeredView}>
        <View style={modalStyle.modalView}>
        <Text style={modalStyle.title}>Login</Text>
         <TextInput
            onChangeText={(text) => setLoginPayload({...loginPayload, username: text})}
            value={loginPayload.username}
            placeholder="cool_guy"
            style={styles.input}
        />
         <TextInput
            onChangeText={(text) => setLoginPayload({...loginPayload, password: text})}
            value={loginPayload.password}
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
            onChangeText={(text) => setRegisterPayload({...registerPayload, name: text})}
            value={registerPayload.name}
            placeholder="Full Name"
            style={styles.input}
        />
         <TextInput
            onChangeText={(text) => setRegisterPayload({...registerPayload, email: text})}
            value={registerPayload.email}
            placeholder="joe_shmo@example.com"
            style={styles.input}
        />
         <TextInput
            onChangeText={(text) => setRegisterPayload({...registerPayload, username: text})}
            value={registerPayload.username}
            placeholder="username"
            style={styles.input}
        />
         <TextInput
            onChangeText={(text) => setRegisterPayload({...registerPayload, password: text})}
            value={registerPayload.password}
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
        marginTop: 10,
        padding: 10
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