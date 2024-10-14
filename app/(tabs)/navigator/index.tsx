import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import HomeScreen from './homeScreen'
import ProfileScreen from './profileScreen'
import NotificationScreen from './notificationScreen'
import { StyleSheet } from 'react-native'

const Tab = createBottomTabNavigator()

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    height: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
})

export default function HomeTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name='home' size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name='person' size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Notifications'
        component={NotificationScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name='notifications-sharp' size={28} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
