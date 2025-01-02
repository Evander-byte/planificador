import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

const Header = () => {
  return (
    <SafeAreaView>
        <Text style={styles.headerText}>Expenses planner</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    headerText: {
        textAlign: 'center',
        fontSize: 30,
        color: '#FFF',
        textTransform: 'uppercase',
        fontWeight: '900',
        paddingTop: 20
    }
})

export default Header