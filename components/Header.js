import { Text, StyleSheet, View } from 'react-native'

const Header = () => {
    return (
        <View style={styles.container} >
            <Text style={styles.title}>time to do</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'teal',
        width: '100%',
        textAlign: 'center',
        padding: '1rem'
        
    },
    title: {
        fontSize: '3rem',
        fontWeight: '600',
        color: 'white'
    },

})

export default Header