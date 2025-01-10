import React from 'react'
import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import globalStyles from '../styles'
import { formatAmount } from '../helpers'

const imgDictionary = {
  save: require('../img/icono_ahorro.png'),
  food: require('../img/icono_comida.png'),
  home: require('../img/icono_casa.png'),
  generic: require('../img/icono_gastos.png'),
  fun: require('../img/icono_ocio.png'),
  heal: require('../img/icono_salud.png'),
  subscription: require('../img/icono_suscripciones.png'),
}

const Expense = ({spent}) => {

  const {name, category, amount, id} = spent
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.imgContainer}>
          <Image 
            style={styles.img}
            source={imgDictionary[category]}
          />
          <View style={styles.textContainer}>
            <Text style={styles.category}>{category}</Text>
            <Text style={styles.name}>{name}</Text>
          </View>
        </View>
        <Text style={styles.amount}>{formatAmount(amount)}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        ...globalStyles.container,
        marginBottom: 20
    },
    content: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    imgContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1
    },
    img: {
      width: 80,
      height: 80,
      marginRight: 20
    },
    textContainer: {
      flex: 1
    },
    category: {
      color: '#94A3B8',
      fontSize: 16,
      fontWeight: '700',
      textTransform: 'uppercase',
      marginBottom: 5
    },
    name: {
      fontSize: 24,
      color: '#64848B'
    },
    amount: {
      fontSize: 20,
      fontWeight: '700'
    }
})

export default Expense