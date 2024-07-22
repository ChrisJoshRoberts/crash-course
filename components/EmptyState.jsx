import { View, Text, Image } from 'react-native'
import React from 'react'
import images from '../constants/images'
import CustomButton from './CustomButton';
import { router } from 'expo-router';

const EmptyState = ({title, subtitle}) => {
  return (
    <View className="justify-center items-center px-4">
      <Image
      className="w-52 h-52"
      resizeMode='contain'
      source={images.empty}
      />
      <Text className="text-psemibold text-white text-2xl">{title}</Text>
      <Text className="font-pmedium text-sm text-gray-100">{subtitle}</Text>
      <CustomButton
      title='Create a video'
      handlePress={() => router.push('/create')}
      containerStyles="w-full mt-6"
      />
    </View>
  )
}

export default EmptyState
