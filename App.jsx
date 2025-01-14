/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react'

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
import { idGenrator } from './src/helpers'
import ListExpenses from './src/components/ListExpenses'
import Filter from './src/components/Filter'




function App() {
  const [isValidBudget, setIsValidBudget] = useState(false)
  const [budget, setBudget] = useState(0)
  const [spents, setSpents] = useState([])
  const [modal, setModal] = useState(false)
  const [expense, setExpense] = useState({})
  const [filter, setFilter] = useState('')
  const [filterExpenses, setFilterExpenses] = useState([])

  const handleBudget = (budget) => {
    if(Number(budget) > 0){
      setIsValidBudget(true)
    } else {  
      Alert.alert('Error', 'Budget cannot be 0 or less', 'Ok')
    }
  }

  const handleExpense = expense => {
    if(Object.values(expense).includes('')){
      Alert.alert(
        "Error",
        "All fields are necessary"
      )
      return
    }

    if(expense.id){
      const updateExpenses = spents.map( expenseState => expenseState.id === expense.id ? expense : expenseState)
      setSpents(updateExpenses)
    } else {
      expense.id = idGenrator()
      expense.date = Date.now()
      setSpents([...spents, expense])
    }

    setModal(!modal)
    
  }

  const deleteExpense = (id) => {
    Alert.alert(
      "Are you sure to eliminate this expense?",
      "(An expense eliminated cannot be recovered)",
      [
        {text: 'No', style: 'cancel'},
        {text: 'Yes, delete', onPress: () => {
          const updatedExpense = spents.filter( expenseState => expenseState.id !== id)
          setSpents(updatedExpense)
          setModal(!modal)
          setExpense({})
        }}
      ]
    )
  }
 
  return (
    <View style={styles.container}>
      <ScrollView>
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

        {isValidBudget && (
          <>
            <Filter
              filter={filter}
              spents={spents}
              setFilter={setFilter}
              setFilterExpenses={setFilterExpenses}
            />
            <ListExpenses
              spents={spents}
              setModal={setModal}
              setExpense={setExpense}
              filter={filter}
              filterExpenses={filterExpenses}
            />
          </>
        )}
      </ScrollView>


      {modal && (
        <Modal
          visible={modal}
          animationType='slide'
          onRequestClose={() => {
            setModal(!modal)
          }}
        >
          <SpentForm
            setModal={setModal}
            handleExpense={handleExpense}
            expense={expense}
            setExpense={setExpense}
            deleteExpense={deleteExpense}
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
    right: 30,
    bottom: 40,
    width: 60,
    height: 60
  }
});

export default App;
