import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants';

const SearchInput = ({title, value, placeholder, handleChangeText, otherStyles, ...props}) => {
  const [showPassword, setShowPassword] = useState(false)
  return (

      <View className="  border-2 border-black-100 w-full h-16 px-4 my-3 bg-black-100 rounded-2xl items-center focus:border-secondary flex-row space-x-4">
        <TextInput
        className="text-base mt-0.5 text-white font-pregular flex-1"
        value={value}
        placeholder='Search for a video topic'
        placeholderTextColor={'#7b7b8b'}
        onChangeText={handleChangeText}
        secureTextEntry={title === 'Password' && !showPassword}
        />
        <TouchableOpacity>
          <Image source={icons.search} className="w-5 h-5" resizeMode='contain'/>
        </TouchableOpacity>
      </View>
  )
}

export default SearchInput
