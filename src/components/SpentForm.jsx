import { Picker } from '@react-native-picker/picker'
import React, { useState, useEffect } from 'react'
import { Pressable, View, Text, SafeAreaView, StyleSheet, TextInput } from 'react-native'
import globalStyles from '../styles'

const SpentForm = ({
    setModal,
    handleExpense,
    expense: currentExpense,
    setExpense: setCurrentExpense
}) => {

    const [expense, setExpense] = useState({
        name: '',
        amount: '',
        category: ''
    })

    useEffect(() => {
        if(currentExpense?.nombre){

        }
        setExpense(currentExpense)
    }, [currentExpense])


  return (
    <SafeAreaView style={styles.container}>
        <View>
            <Pressable
                onLongPress={() => {
                    setModal(false)
                    setCurrentExpense({})
                }}
                style={styles.btnCancel}
            >
                <Text 
                    style={styles.btnCancelText}
                >Cancel</Text>
            </Pressable>
        </View>
        <View style={styles.form}>
            <Text style={styles.title}>
                {
                    currentExpense?.name 
                    ? 'Edit Spent' 
                    : 'New Spent'
                }
            </Text>
            <View style={styles.field}>
                <Text style={styles.label}>Expense name</Text>
                <TextInput
                    placeholder='Name of expense. exp Vacations suveniers'
                    style={styles.input}
                    value={expense.name}
                    onChangeText={(name) => setExpense({
                        ...expense,
                        name
                    })}
                />
            </View>
            <View style={styles.field}>
                <Text style={styles.label}>Expense amount</Text>
                <TextInput
                    placeholder='Amount of expense. exp $4'
                    keyboardType='numbers-and-punctuation'
                    style={styles.input}
                    value={expense.amount}
                    onChangeText={(amount) => setExpense({
                        ...expense,
                        amount
                    })}
                />
            </View>
            <View style={styles.field}>
                <Text style={styles.label}>Expense category</Text>
                <Picker
                    selectedValue={expense.category}
                    onValueChange={(category) => setExpense({
                        ...expense,
                        category
                    })}
                >
                    <Picker.Item label='-- Select a category --' value=""/>
                    <Picker.Item label='Save' value="save"/>
                    <Picker.Item label='Food' value="food"/>
                    <Picker.Item label='Home' value="home"/>
                    <Picker.Item label='Generic' value="generic"/>
                    <Picker.Item label='Fun' value="fun"/>
                    <Picker.Item label='Heal' value="heal"/>
                    <Picker.Item label='Subscription' value="subscription"/>
                </Picker>
            </View>
            <Pressable
                style={styles.btnAdd}
                onPress={() => {
                    handleExpense(expense)
                }}
            
            >
                <Text style={styles.btnAddText}>
                    {
                        currentExpense?.name 
                        ? 'Save changes' 
                        : 'Add expense'
                    }
                </Text>
            </Pressable>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1E40AF',
        flex: 1
    },
    btnCancel: {
        backgroundColor: '#3B82F6',
        marginHorizontal: 90,
        padding: 15,
        borderRadius: 30
    },
    btnCancelText: {
        color: '#FFF',
        textAlign: 'center',
        fontWeight: 700,
        fontSize: 20,
    },
    title: {
        textAlign: 'center',
        fontSize: 28,
        color: '#64748B'
    },
    form: {
        ...globalStyles.container
    },
    field: {
        marginVertical: 10
    },
    label: {
        color: '#64748B',
        textTransform: 'uppercase',
        fontSize: 16,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#F5F5F5',
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
    },
    btnAdd: {
        backgroundColor: '#3B82F6',
        marginTop: 10,
        padding: 15,
        borderRadius: 30
    },
    btnAddText: {
        color: '#FFF',
        textAlign: 'center',
        fontWeight: 700,
        fontSize: 20,
    }
})

export default SpentForm