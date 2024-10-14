import React, { useEffect, useRef } from 'react'
import { View, Text, Animated } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons' // Update with your icon library

const HomeScreen: React.FC = () => {
  const scaleValue = useRef(new Animated.Value(1)).current // For scaling effect

  useEffect(() => {
    const startAnimation = () => {
      Animated.sequence([
        Animated.timing(scaleValue, {
          toValue: 1.1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(scaleValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]).start(() => startAnimation())
    }

    startAnimation()
  }, [scaleValue])

  return (
    <View className='flex-1 p-5 bg-arawMatic-default'>
      <View className='flex-row space-x-2'>
        <View>
          <Icon name='person-circle' size={75} />
        </View>
        <View className='mt-2'>
          <Text className='text-xl opacity-75'>Hello,</Text>
          <Text className='text-xl font-semibold block opacity-75'>
            Aira Maye!
          </Text>
        </View>
      </View>
      <View className='items-center justify-center mt-10'>
        <Text className='text-xl mt-2 font-semibold opacity-70'>
          Clothes are expected to be dry by
        </Text>
        <Animated.View
          style={{
            transform: [{ scale: scaleValue }],
          }}
          className='w-60 h-60 bg-arawMatic-default rounded-full items-center justify-center shadow-2xl mt-16 shadow-black'
        >
          <View className='w-52 h-52 bg-arawMatic-default rounded-full items-center justify-center shadow-xl shadow-black'>
            <View className='w-44 h-44 bg-button-default rounded-full items-center justify-center shadow-lg shadow-black'>
              <Text className='text-4xl font-bold opacity-75'>3:00 PM</Text>
            </View>
          </View>
        </Animated.View>
        <Text className='text-lg text-center mt-16'>
          Your clothes are 21.43% dry.
        </Text>
      </View>
    </View>
  )
}

export default HomeScreen
