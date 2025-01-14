import React from 'react'
import { View } from 'react-native'
import CreateAccount from './(tabs)/createAccount/index'
//import VerificationCodeForm from './(tabs)/createAccount/createAccountForm/verificationCodeForm'

export default function App() {
  return (
    <View className='flex-1'>
      <CreateAccount />
    </View>
  )
}
