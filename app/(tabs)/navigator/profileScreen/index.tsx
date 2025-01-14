import { router } from 'expo-router'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { styled } from 'nativewind'

const handleSignOutnNavigation = () => {
  router.push('../../(tabs)/createAccount/signInForm')
}

const StyledText = styled(Text)
const StyledView = styled(View)

const ProfileScreen = () => (
  <StyledView className='flex-1 bg-arawMatic-default p-4'>
    <StyledView className='mt-5'>
      <StyledView className='flex-column'>
        <StyledView className='flex-row bg-white rounded-xl p-3 mx-2 shadow-sm shadow-black mb-7'>
          <StyledView>
            <Icon name='person-circle' size={60} />
          </StyledView>
          <StyledView className='ml-1 mt-4'>
            <StyledText className='font-semibold text-lg opacity-70 mb-1'>
              Aira Maye Hermogenes
            </StyledText>
          </StyledView>
        </StyledView>
        <StyledView className='my-2 ml-2 bg-white rounded-xl p-3 mx-2 shadow-sm shadow-black'>
          <StyledView className='mb-1 flex-row'>
            {/*            <View className='mr-2 mt-3'>
              <Icon name='call' size={23} />
            </View>*/}
            <StyledView>
              <StyledText className='font-semibold text-base opacity-70'>
                Contact Number
              </StyledText>
              <StyledText className='text-sm opacity-70'>
                0994xxxxxxx
              </StyledText>
            </StyledView>
          </StyledView>
          <StyledView className='border-b mr-5 my-2'></StyledView>
          <StyledView className='mb-1'>
            <StyledText className='font-semibold text-base opacity-70'>
              Birthday
            </StyledText>
            <StyledText className='text-sm opacity-70'>May 12, 2002</StyledText>
          </StyledView>
          <StyledView className='border-b mr-5 my-2'></StyledView>
          <StyledView className='mb-1'>
            <StyledText className='font-semibold text-base opacity-70'>
              Complete Address
            </StyledText>
            <StyledText className='text-sm opacity-70 text-blue-700 underline'>
              Pulong Buhangin, Santa Maria, Bulacan
            </StyledText>
          </StyledView>
          <StyledView className='border-b mr-5 my-2'></StyledView>
          <StyledView className='mb-1'>
            <StyledText className='font-semibold text-base opacity-70'>
              Other info
            </StyledText>
            <StyledText className='text-sm opacity-70'>-----</StyledText>
          </StyledView>
        </StyledView>
      </StyledView>
      <StyledView className='mt-28 px-5'>
        <TouchableOpacity
          className='items-center py-4 bg-signOut-default rounded-xl shadow-lg shadow-black'
          onPress={handleSignOutnNavigation}
        >
          <StyledView className='flex-row'>
            <StyledView className='mr-1'>
              <Icon name='log-out-outline' size={28} />
            </StyledView>
            <StyledView>
              <StyledText className='font-semibold text-lg text-white'>
                Sign out
              </StyledText>
            </StyledView>
          </StyledView>
        </TouchableOpacity>
      </StyledView>
    </StyledView>
  </StyledView>
)
export default ProfileScreen
