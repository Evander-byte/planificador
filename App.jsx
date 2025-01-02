/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';

import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Header from './src/components/Header';
import NuevoPresupuesto from './src/components/NewBudget';
import BudgetControl from './src/components/BudgetControl';




function App() {
  const [isValidBudget, setIsValidBudget] = useState(false)
  const [budget, setBudget] = useState(0)

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
            />)
          : (<NuevoPresupuesto 
              handleBudget={handleBudget}
              budget={budget}
              setBudget={setBudget}
            />)
        }
      </View>
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
  }
});

export default App;
