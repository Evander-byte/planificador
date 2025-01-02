import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import globalStyles from '../styles'
import { formatAmount } from '../helpers';

const BudgetControl = ({
    budget
}) => {
    console.log(budget);
  return (
    <View style={styles.container}>
        <View style={styles.centerChart}>
            <Image
                style={styles.img}
                source={require('../img/grafico.jpg')}
            />
        </View>
        <View>
            <Text>Budget: {formatAmount(budget)}</Text>
        </View>
        <View>
            <Text>Avaible to spend: {formatAmount(budget)}</Text>
        </View>
        <View>
            <Text>Spent: {formatAmount(budget)}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        ...globalStyles.container
    },
    centerChart: {
        alignItems: 'center'
    },
    img: {
        width: 250,
        height: 250
    }
})

export default BudgetControl