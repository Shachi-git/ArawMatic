import { StatusBar } from 'expo-status-bar'
import { Text, View, TouchableOpacity, TextInput } from 'react-native'
import { styled } from 'nativewind'
import { useState } from 'react'
import { useRouter } from 'expo-router'

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

  return (
    <StyledView className='flex-1 items-center justify-center bg-arawMatic-default p-4'>
      <TouchableOpacity
        className='absolute top-4 left-4'
        onPress={() => router.back()}
      >
        <Text className='text-black opacity-60 font-semibold'>
          {'< '}Go back
        </Text>
      </TouchableOpacity>
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
        className='bg-button-default px-32 py-4 rounded-md shadow-lg shadow-black mb-10 mt-12
        '
        onPress={handleSignUp}
      >
        <Text className='font-bold text-black opacity-70 text-base'>Login</Text>
      </TouchableOpacity>
      <StatusBar style='auto' />
    </StyledView>
  )
}
