import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Expense from './Expense'

const ListExpenses = ({spents}) => {
    console.log(spents)
  return (
    <View style={styles.container}>
        <Text style={styles.title}>List of expenses</Text>
        {spents.length === 0 
            ? <Text style={styles.nonExpenses}>No Expenses</Text>
            : spents.map((spent) => (
                <Expense
                    key={spent.id} 
                    spent={spent}
                />
            ))
        }
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 70,
        marginBottom: 100
    },
    title: {
        color: '#64748B',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: '700',
        marginTop: 20
    },
    nonExpenses: {
        marginTop: 20,
        textAlign: 'center',
        fontSize: 20
    }
})

export default ListExpenses