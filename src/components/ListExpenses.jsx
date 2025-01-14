import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Expense from './Expense'

const ListExpenses = ({
    spents,
    setModal,
    setExpense,
    filter,
    filterExpenses
}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>List of expenses</Text>
        {
            filter 
            ? filterExpenses.map(spent => (
                <Expense
                    key={spent.id} 
                    spent={spent}
                    setModal={setModal}
                    setExpense={setExpense}
                />
            ))
            : spents.map((spent) => (
                <Expense
                    key={spent.id} 
                    spent={spent}
                    setModal={setModal}
                    setExpense={setExpense}
                />
            ))
        }

        {
            spents.length === 0 || (filterExpenses.length === 0 && !!filter) && (
                <Text style={styles.nonExpenses}>No expenses found</Text>
            )
        }

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
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