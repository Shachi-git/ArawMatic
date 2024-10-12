import React from 'react'
import { View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import CreateAccount from './(tabs)/createAccount'

export default function App() {
  return (
    <View className='flex-1'>
      <CreateAccount />
    </View>
  )
}
