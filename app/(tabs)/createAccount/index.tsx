import { StatusBar } from 'expo-status-bar'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { styled } from 'nativewind'
import { useRouter } from 'expo-router'
import React from 'react'

const StyledText = styled(Text)
const StyledView = styled(View)

export default function CreateAccount() {
  const router = useRouter()

  const handleCreateAccountNavigation = () => {
    router.push('./createAccount/createAccountForm')
  }
  const handleSignInNavigation = () => {
    router.push('./createAccount/signInForm')
  }
  return (
    <StyledView className='flex-1 items-center justify-center bg-arawMatic-default'>
      <Image
        source={require('../../../assets/images/arawMaticLogo.png')}
        className='h-16 mt-10 p-32'
        resizeMode='contain'
      />
      <TouchableOpacity
        className='bg-button-default px-20 py-4 rounded-md shadow-lg shadow-black mb-36'
        onPress={handleCreateAccountNavigation}
      >
        <Text className='font-bold text-base'>Create an account</Text>
      </TouchableOpacity>
      <View className='flex-row mt-36 text-center font-sans text-sm'>
        <View>
          <Text>Already have an account? </Text>
        </View>
        <TouchableOpacity>
          <StyledText
            className='text-signIn-default'
            onPress={handleSignInNavigation}
          >
            Sign In
          </StyledText>
        </TouchableOpacity>
      </View>
      <StatusBar style='auto' />
    </StyledView>
  )
}
