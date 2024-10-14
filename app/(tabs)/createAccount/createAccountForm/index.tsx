import { StatusBar } from 'expo-status-bar'
import { Text, View, TouchableOpacity, TextInput } from 'react-native'
import { styled } from 'nativewind'
import { useState } from 'react'
import { useRouter } from 'expo-router'
import React from 'react'

const StyledText = styled(Text)
const StyledView = styled(View)
const StyledTextInput = styled(TextInput)

export default function CreateAccountForm() {
  const router = useRouter()
  const [fullName, setFullName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showRepeatPassword, setShowRepeatPassword] = useState(false)

  const handleSignUp = () => {
    console.log({ fullName, phoneNumber, password, repeatPassword })
  }

  const isFormValid = () => {
    return (
      fullName &&
      phoneNumber &&
      password.length >= 8 &&
      password === repeatPassword
    )
  }

  return (
    <StyledView className='flex-1 items-center justify-center bg-arawMatic-default p-4'>
      {/* Back Button */}
      <TouchableOpacity
        className='absolute top-4 left-4'
        onPress={() => router.back()}
      >
        <Text className='text-black opacity-60 font-semibold'>
          {'< '}Go back
        </Text>
      </TouchableOpacity>
      <Text className='text-xl font-bold opacity-75 mb-[14px]'>
        Welcome Onboard!
      </Text>
      <Text className='text-base opacity-60 mb-10'>
        Let’s help you meet up your tasks
      </Text>

      <StyledTextInput
        className='w-full bg-white py-4 px-5 mb-4 rounded-full shadow-md shadow-black'
        placeholder='Enter your username'
        value={fullName}
        onChangeText={setFullName}
      />
      <StyledTextInput
        className='w-full bg-white py-4 px-5 mb-4 rounded-full shadow-md shadow-black'
        placeholder='Enter your phone number'
        keyboardType='phone-pad'
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <View className='relative w-full'>
        <StyledTextInput
          className='w-full bg-white py-4 px-5 mb-4 rounded-full shadow-md shadow-black'
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
      <View className='relative w-full'>
        <StyledTextInput
          className='w-full bg-white py-4 px-5 mb-4 rounded-full shadow-md shadow-black'
          placeholder='Confirm password'
          secureTextEntry={!showRepeatPassword}
          value={repeatPassword}
          onChangeText={setRepeatPassword}
        />
        <TouchableOpacity
          className='absolute right-5 top-[18px]'
          onPress={() => setShowRepeatPassword(!showRepeatPassword)}
        >
          <Text className='text-signIn-default'>
            {showRepeatPassword ? 'Hide' : 'Show'}
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        className={`bg-button-default px-32 py-4 rounded-md shadow-lg shadow-black mb-10 mt-12 ${
          isFormValid() ? '' : 'opacity-50'
        }`}
        onPress={handleSignUp}
        disabled={!isFormValid()}
      >
        <Text
          className={`font-bold text-white ${
            isFormValid() ? 'text-black' : ''
          }`}
        >
          Register
        </Text>
      </TouchableOpacity>

      <Text className='mt-2 text-center font-sans'>
        Already have an account?{' '}
        <TouchableOpacity className='inline'>
          <StyledText className='text-signIn-default'>Sign In</StyledText>
        </TouchableOpacity>
      </Text>
      <StatusBar style='auto' />
    </StyledView>
  )
}
