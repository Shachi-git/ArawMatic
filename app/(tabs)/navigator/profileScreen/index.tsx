import { router } from 'expo-router'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const handleSignOutnNavigation = () => {
  router.push('../../(tabs)/createAccount/signInForm')
}

const ProfileScreen = () => (
  <View className='flex-1 bg-arawMatic-default p-4'>
    <Text className='text-xl ml-2.5 opacity-70 font-semibold mt-5'>
      Profile
    </Text>
    <View className='flex-column'>
      <View className='items-center'>
        <Icon name='person-circle' size={75} />
      </View>
      <View className='my-2 ml-2'>
        <Text className='font-semibold text-base opacity-70 mb-1'>
          Name: Aira Maye Hermogenes
        </Text>
        <Text className='font-semibold text-base opacity-70 mb-1'>
          Number: 0994xxxxxxx
        </Text>
        <Text className='font-semibold text-base opacity-70'>
          Address: Pulong Buhangin
        </Text>
      </View>
    </View>
    <View className='mt-72 px-5'>
      <TouchableOpacity
        className='items-center py-4 bg-signOut-default rounded-xl shadow-lg shadow-black'
        onPress={handleSignOutnNavigation}
      >
        <View className='flex-row'>
          <View className='mr-1'>
            <Icon name='log-out-outline' size={28} />
          </View>
          <View>
            <Text className='font-semibold text-lg'>Sign Out</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  </View>
)
export default ProfileScreen
