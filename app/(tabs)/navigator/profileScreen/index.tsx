import { router } from 'expo-router'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const handleSignOutnNavigation = () => {
  router.push('../../(tabs)/createAccount/signInForm')
}

const ProfileScreen = () => (
  <View className='flex-1 bg-arawMatic-default p-4'>
    <View className='mt-5'>
      <View className='flex-column'>
        <View className='flex-row bg-white rounded-xl p-3 mx-2 shadow-sm shadow-black mb-7'>
          <View>
            <Icon name='person-circle' size={60} />
          </View>
          <View className='ml-1 mt-4'>
            <Text className='font-semibold text-lg opacity-70 mb-1'>
              Aira Maye Hermogenes
            </Text>
          </View>
        </View>
        <View className='my-2 ml-2 bg-white rounded-xl p-3 mx-2 shadow-sm shadow-black'>
          <View className='mb-1 flex-row'>
            {/*            <View className='mr-2 mt-3'>
              <Icon name='call' size={23} />
            </View>*/}
            <View>
              <Text className='font-semibold text-base opacity-70'>
                Contact Number
              </Text>
              <Text className='text-sm opacity-70'>0994xxxxxxx</Text>
            </View>
          </View>
          <View className='border-b mr-5 my-2'></View>
          <View className='mb-1'>
            <Text className='font-semibold text-base opacity-70'>Birthday</Text>
            <Text className='text-sm opacity-70'>May 12, 2002</Text>
          </View>
          <View className='border-b mr-5 my-2'></View>
          <View className='mb-1'>
            <Text className='font-semibold text-base opacity-70'>
              Complete Address
            </Text>
            <Text className='text-sm opacity-70 text-blue-700 underline'>
              Pulong Buhangin, Santa Maria, Bulacan
            </Text>
          </View>
          <View className='border-b mr-5 my-2'></View>
          <View className='mb-1'>
            <Text className='font-semibold text-base opacity-70'>
              Other info
            </Text>
            <Text className='text-sm opacity-70'>-----</Text>
          </View>
        </View>
      </View>
      <View className='mt-28 px-5'>
        <TouchableOpacity
          className='items-center py-4 bg-signOut-default rounded-xl shadow-lg shadow-black'
          onPress={handleSignOutnNavigation}
        >
          <View className='flex-row'>
            <View className='mr-1'>
              <Icon name='log-out-outline' size={28} />
            </View>
            <View>
              <Text className='font-semibold text-lg text-white'>Sign out</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  </View>
)
export default ProfileScreen
