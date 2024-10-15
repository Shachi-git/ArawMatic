import { StatusBar } from 'expo-status-bar'
import { Text, View, TouchableOpacity, TextInput } from 'react-native'
import { styled } from 'nativewind'
import { useState } from 'react'
import { useRouter } from 'expo-router'
import React from 'react'

const StyledView = styled(View)
const StyledTextInput = styled(TextInput)

export default function signInForm() {
  const router = useRouter()
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleSignUp = () => {
    console.log({ phoneNumber, password })
  }

  const handleLoginNavigation = () => {
    router.push('../../navigator')
  }

  const handleCreateAccountNavigation = () => {
    router.push('../createAccountForm')
  }

  return (
    <StyledView className='flex-1 items-center justify-center bg-arawMatic-default p-4'>
      <Text className='text-xl font-bold opacity-75 mb-9'>
        Log into ArawMatic
      </Text>
      <StyledTextInput
        className='w-full bg-white py-4 px-5 rounded-full shadow-md shadow-black mb-5'
        placeholder='Enter your phone number'
        keyboardType='phone-pad'
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <View className='relative w-full mb-10'>
        <StyledTextInput
          className='w-full bg-white py-4 px-5 rounded-full shadow-md shadow-black'
          placeholder='Enter password'
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          className='absolute right-5 top-[18px]'
          onPress={() => setShowPassword(!showPassword)}
        >
          <Text className='text-signIn-default'>
            {showPassword ? 'Hide' : 'Show'}
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        className='bg-button-default px-32 py-4 rounded-md shadow-lg shadow-black mb-10 mt-12'
        onPress={() => {
          handleSignUp()
          handleLoginNavigation()
        }}
      >
        <Text className='font-bold text-black opacity-70 text-base'>Login</Text>
      </TouchableOpacity>
      <View className='flex-row mt-2 text-center text-sm'>
        <View>
          <Text className='font-poppins '>Does not have an account? </Text>
        </View>
        <TouchableOpacity>
          <Text
            className='text-signIn-default font-poppins'
            onPress={handleCreateAccountNavigation}
          >
            Create Account
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar style='auto' />
    </StyledView>
  )
}
