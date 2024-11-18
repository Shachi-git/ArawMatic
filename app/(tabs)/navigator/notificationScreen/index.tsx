import React from 'react'
import { ScrollView, View, Text } from 'react-native'

const NotificationScreen = () => {
  return (
    <View className='flex-1 bg-arawMatic-default'>
      <ScrollView
        contentContainerStyle={{ paddingVertical: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <View className='flex items-center px-4'>
          <View className='bg-white rounded-lg shadow-sm shadow-black mb-4 w-full'>
            <View className='flex items-center px-4 py-3 bg-yellow-100'>
              <View className='bg-yellow-50 rounded-full w-8 h-8 flex justify-center items-center mr-3'>
                <Text className='text-xl'>🌞</Text>
              </View>
              <Text className='font-bold flex-1'>Reminder!</Text>
              <Text className='text-gray-500 text-sm'>2 mins ago</Text>
            </View>
            <Text className='px-4 py-3'>
              Sun is shining again! Clothesline is being used.
            </Text>
          </View>

          <View className='bg-white rounded-lg shadow-md mb-4 w-full shadow-black'>
            <View className='flex items-center px-4 py-3 bg-red-100'>
              <View className='bg-red-50 rounded-full w-8 h-8 flex justify-center items-center mr-3'>
                <Text className='text-xl'>🚨</Text>
              </View>
              <Text className='font-bold flex-1'>System Alert!</Text>
              <Text className='text-gray-500 text-sm'>1 hr ago</Text>
            </View>
            <Text className='px-4 py-3'>
              Rain detected. Clothesline is retracting automatically.
            </Text>
          </View>

          <View className='bg-white rounded-lg shadow-md mb-4 w-full shadow-black'>
            <View className='flex items-center px-4 py-3 bg-blue-100'>
              <View className='bg-blue-50 rounded-full w-8 h-8 flex justify-center items-center mr-3'>
                <Text className='text-xl'>👕</Text>
              </View>
              <Text className='font-bold flex-1'>Cloth Status</Text>
              <Text className='text-gray-500 text-sm'>1 hr ago</Text>
            </View>
            <Text className='px-4 py-3'>Your clothes are 21.43% dry.</Text>
          </View>

          <View className='bg-white rounded-lg shadow-md mb-4 w-full shadow-black'>
            <View className='flex items-center px-4 py-3 bg-blue-100'>
              <View className='bg-blue-50 rounded-full w-8 h-8 flex justify-center items-center mr-3'>
                <Text className='text-xl'>👕</Text>
              </View>
              <Text className='font-bold flex-1'>Reminder!</Text>
              <Text className='text-gray-500 text-sm'>01 Oct</Text>
            </View>
            <Text className='px-4 py-3'>
              Clothes are dry. System will retract automatically.
            </Text>
          </View>

          <View className='bg-white rounded-lg shadow-md mb-4 w-full shadow-black'>
            <View className='flex items-center px-4 py-3 bg-blue-100'>
              <View className='bg-blue-50 rounded-full w-8 h-8 flex justify-center items-center mr-3'>
                <Text className='text-xl'>👕</Text>
              </View>
              <Text className='font-bold flex-1'>Cloth Status</Text>
              <Text className='text-gray-500 text-sm'>26 Sep</Text>
            </View>
            <Text className='px-4 py-3'>
              Almost there! Your clothes are 80% dry.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default NotificationScreen
