import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import globalStyles, { container } from '../styles'

const NuevoPresupuesto = ({
    handleBudget,
    budget,
    setBudget
}) => {

  
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Define your budget</Text>
        <TextInput 
            keyboardType='numeric'
            placeholder='Define a budget, for example $300'
            style={styles.input}
            value={budget}
            onChangeText={setBudget}
        />
        <Pressable
            onPress={() => handleBudget(budget)} 
            style={styles.btnSetBudget}
        >
            <Text style={styles.btnText}>Add budget</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        ...globalStyles.container
    },
    title: {
        textAlign: 'center',
        fontSize: 24,
        color: '#3B82F6',
    },
    input: {
        backgroundColor: '#F5F5F5',
        padding: 10,
        borderRadius: 10,
        textAlign: 'center',
        marginTop: 30
    },
    btnSetBudget: {
        marginTop: 30,
        marginHorizontal: 50,
        backgroundColor: '#3B82F6',
        borderRadius: 10,
        padding: 10
    },
    btnText: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: '900'
    }
})

export default NuevoPresupuesto