import React from 'react'
import { Pressable, View, Text, SafeAreaView } from 'react-native'

const SpentForm = ({
    setModal
}) => {
  return (
    <SafeAreaView>
        <Text>Hola desde el modal</Text>
        <Pressable
            onLongPress={() => setModal(false)}
        >
            <Text>Cerrar Modal</Text>
        </Pressable>
    </SafeAreaView>
  )
}

export default SpentForm