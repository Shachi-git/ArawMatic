import { StatusBar } from 'expo-status-bar'
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native'
import { styled } from 'nativewind'
import { useState } from 'react'
import { useRouter } from 'expo-router'
import React from 'react'
import { getDatabase, ref, get, child } from 'firebase/database' // Import Firebase Realtime Database

const StyledView = styled(View)
const StyledTextInput = styled(TextInput)

export default function SignInForm() {
  const router = useRouter()
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleSignIn = async () => {
    const db = getDatabase()
    const sanitizedPhoneNumber = phoneNumber.replace(/\D/g, '') // Sanitize input

    try {
      const userRef = ref(db, `users/${sanitizedPhoneNumber}`)
      const snapshot = await get(userRef)
      if (phoneNumber === '' && password === '') {
        Alert.alert('Login Failed', 'Enter your phone number and password!')
      } else if (phoneNumber !== '' && password === '') {
        Alert.alert('Login Failed', 'Enter your password!')
      } else if (phoneNumber === '' && password !== '') {
        Alert.alert('Login Failed', 'Enter your phone number!')
      } else {
        if (snapshot.exists()) {
          const userData = snapshot.val()
          if (userData.password === password) {
            console.log('Login successful!')
            router.push('../../navigator')
          } else {
            Alert.alert('Login Failed', 'Incorrect password.')
          }
        } else {
          Alert.alert('Login Failed', 'No user found with this phone number.')
        }
      }
    } catch (error) {
      console.error('Error during sign in:', error)
      Alert.alert('Login Failed', 'An unexpected error occurred.')
    }
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
        onPress={handleSignIn} // Call handleSignIn on press
      >
        <Text className='font-bold text-black opacity-70 text-base'>Login</Text>
      </TouchableOpacity>
      <View className='flex-row mt-2 text-center text-sm'>
        <Text className='font-poppins'>Does not have an account? </Text>
        <TouchableOpacity onPress={handleCreateAccountNavigation}>
          <Text className='text-signIn-default font-poppins'>
            Create Account
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar style='auto' />
    </StyledView>
  )
}
