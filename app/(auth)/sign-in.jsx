import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from "../../constants";
import FormField from '../../components/FormField';
import { useState } from 'react';

const signIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center h-full px-4 my-6">
          <Image
          source={images.logo}
          resizeMode='contain'
          className="w-[115px] h-[35px]"
          />
          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">Login to Aora</Text>
          <FormField
          title="Email"
          value={form.email}
          handleChange= {(value) => setForm({...form, email: value})}
          otherStyles='mt-5'
          keyBoardType='email-address'
          />
          <FormField
          title="Password"
          value={form.password}
          handleChange= {(value) => setForm({...form, password: value})}
          otherStyles='mt-5'
          
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default signIn
