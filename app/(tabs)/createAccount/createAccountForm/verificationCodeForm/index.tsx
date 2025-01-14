import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import { styled } from 'nativewind'
import React, { useState, useRef } from 'react'
import { router } from 'expo-router'
import Icon from 'react-native-vector-icons/Entypo'

const StyledText = styled(Text)
const StyledView = styled(View)
const CircleInput = styled(TextInput) // Styled for circular input

export default function VerificationCodeForm() {
  const [code, setCode] = useState(['', '', '', '']) // State for each digit
  const inputRefs = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ]

  const handleChange = (text: string, index: number) => {
    const newCode = [...code]

    // Handle backspace
    if (text === '') {
      newCode[index] = '' // Clear current input
      setCode(newCode)

      // Move focus to the previous input if not the first input
      if (index > 0) {
        const prevInputRef = inputRefs[index - 1].current
        if (prevInputRef) {
          prevInputRef.focus()
        }
      }
    } else {
      newCode[index] = text // Update the current input
      setCode(newCode)

      // Move to the next input automatically when a digit is entered
      if (text && index < 3) {
        const nextInputRef = inputRefs[index + 1].current
        if (nextInputRef) {
          nextInputRef.focus() // Focus the next input if it exists
        }
      }
    }
  }
  const handleBackButton = () => {
    router.back()
  }
  return (
    <StyledView className='flex-1 bg-arawMatic-default'>
      <StyledView className='p-4'>
        <StyledText className='opacity-60 text-sm' onPress={handleBackButton}>
          <Icon name='chevron-left'></Icon> Go Back
        </StyledText>
      </StyledView>
      <StyledView className='flex-1 items-center justify-center p-9 bottom-8'>
        <Image
          source={require('../../../../../assets/images/verificationIcon.png')}
          className='h-24'
          resizeMode='contain'
        />
        <StyledText className='font-extrabold text-2xl opacity-70 text-center'>
          Verification Code
        </StyledText>
        <StyledText className='font-medium text-base opacity-65 text-center'>
          Enter the 4-digit code we've sent to
        </StyledText>
        <StyledView className='flex-row justify-between mt-8'>
          {code.map((digit, index) => (
            <CircleInput
              key={index}
              ref={inputRefs[index]} // Attach ref for focus
              className='border border-light-blue-500 rounded-2xl w-14 h-14 ml-3 text-center text-xl'
              keyboardType='numeric'
              maxLength={1}
              value={digit}
              onChangeText={(text) => handleChange(text, index)}
              placeholder='•' // Placeholder character
              placeholderTextColor='lightgray'
            />
          ))}
        </StyledView>
        <StyledView className='relative w-full'>
          <TouchableOpacity className='bg-button-default py-4 rounded-2xl shadow-lg shadow-black mt-12 mx-10'>
            <StyledText className='text-black text-center'>Submit</StyledText>
          </TouchableOpacity>
        </StyledView>
      </StyledView>
    </StyledView>
  )
}
