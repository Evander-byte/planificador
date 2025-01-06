/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react'

import {
  Alert,
  Image,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import Header from './src/components/Header'
import BudgetControl from './src/components/BudgetControl'
import NewBudget from './src/components/NewBudget'
import SpentForm from './src/components/SpentForm'




function App() {
  const [isValidBudget, setIsValidBudget] = useState(false)
  const [budget, setBudget] = useState(0)
  const [spents, setSpents] = useState([])
  const [modal, setModal] = useState(false)

  const handleBudget = (budget) => {
    if(Number(budget) > 0){
      setIsValidBudget(true)
    } else {  
      Alert.alert('Error', 'Budget cannot be 0 or less', 'Ok')
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
        {isValidBudget 
          ? (<BudgetControl 
              budget={budget}
              spents={spents}
            />)
          : (<NewBudget 
              handleBudget={handleBudget}
              budget={budget}
              setBudget={setBudget}
            />)
        }
      </View>
      {modal && (
        <Modal
          visible={modal}
          animationType='slide'
        >
          <SpentForm
            setModal={setModal}
          />  
        </Modal>
      )}
      {isValidBudget && (
        <Pressable 
          style={styles.btnContainer}
          onLongPress={() => setModal(true)}
        >
          <Image
            source={require('./src/img/nuevo-gasto.png')}
            style={styles.btnSpend}
          />
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#F5F5F5',
    flex: 1
  },
  header: {
    backgroundColor: '#3B82F6'
  },
  btnContainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5,    
  },
  btnSpend:{
    position: 'absolute',
    right: 20,
    top: 160,
    width: 60,
    height: 60
  }
});

export default App;
