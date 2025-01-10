import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import globalStyles from '../styles'
import { formatAmount } from '../helpers'

const BudgetControl = ({
    budget,
    spents
}) => {
    const [avaible, setAvaible] = useState(0)
    const [spent, setSpent] = useState(0)

    useEffect(() => {
        const totalSpent = spents.reduce((total, spent) => Number(spent.amount) + total, 0)
        const totalAvaible = budget - totalSpent
        setSpent(totalSpent) 
        setAvaible(totalAvaible)
    },[spents])
  return (
    <View style={styles.container}>
        <View style={styles.centerChart}>
            <Image
                style={styles.img}
                source={require('../img/grafico.jpg')}
            />
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.amount}>
                <Text style={styles.label}>Budget:{''}</Text>
                {formatAmount(budget)}
                </Text>
        
            <Text style={styles.amount}>
                <Text style={styles.label}>Avaible to spend:{''}</Text>
                {formatAmount(avaible)}
            </Text>
        
            <Text style={styles.amount}>
                <Text style={styles.label}>Spent:{''}</Text>
                {formatAmount(spent)}
            </Text>
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
    },
    textContainer: {
        marginTop: 50
    },
    amount: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 10
    },
    label: {
        fontWeight: '700',
        color: '#3B82F6'
    }
})

export default BudgetControl