import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const Profile = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <Text className='text-white'>Profile Page</Text>
    </SafeAreaView>
  )
}

export default Profile;