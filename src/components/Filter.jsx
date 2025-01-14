import React, { useEffect } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import globalStyles from '../styles'
import { Picker } from '@react-native-picker/picker'

const Filter = ({
    filter,
    spents,
    setFilter,
    setFilterExpenses
}) => {

useEffect(() => {
    if(filter === ''){
        setFilterExpenses([])
    } else {
        const filterExpenses = spents.filter(expense => expense.category === filter)
        setFilterExpenses(filterExpenses)
    }
}, [filter])
  return (
    <View style={styles.container}>
        <Text style={styles.label}>Filter expenses</Text>
        <Picker
            selectedValue={filter}
            onValueChange={(value) => {
                setFilter(value)
            }}
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
  )
}

const styles = StyleSheet.create({
    container: {
        ...globalStyles.container,
        transform: [{translateY: 0}],
        marginTop: 70
    },
    label: {
        fontSize: 22,
        fontWeight: '900',
        color: '#64748B',
        textAlign: 'center'
    }
})

export default Filter