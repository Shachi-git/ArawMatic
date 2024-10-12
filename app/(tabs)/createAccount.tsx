import { StatusBar } from 'expo-status-bar'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { styled } from 'nativewind'
import { useRouter } from 'expo-router'

const StyledText = styled(Text)
const StyledView = styled(View)

export default function CreateAccount() {
  const router = useRouter()

  const handleCreateAccountNavigation = () => {
    router.push('./createAccountForm' as const)
  }
  return (
    <StyledView className='flex-1 items-center justify-center bg-ArawMatic-default'>
      <Image
        source={require('../../assets/images/arawMaticLogo.png')}
        className='h-16 mt-10 p-32'
        resizeMode='contain'
      />
      <TouchableOpacity
        className='bg-Button-default px-20 py-4 rounded-md shadow-lg shadow-black mb-36'
        onPress={handleCreateAccountNavigation}
      >
        <Text className='font-bold'>Create an account</Text>
      </TouchableOpacity>
      <Text className='mt-36 flex-row text-center font-sans'>
        Already have an account?{' '}
        <TouchableOpacity className='inline'>
          <StyledText className='text-[#50C2C9]'>Sign In</StyledText>
        </TouchableOpacity>
      </Text>
      <StatusBar style='auto' />
    </StyledView>
  )
}
