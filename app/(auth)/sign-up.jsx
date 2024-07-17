import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from "../../constants";
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { useState } from 'react';
import { Link } from 'expo-router';
import { createUser } from '../../lib/appwrite';

const signUp = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const [isSumbitting, setisSumbitting] = useState(false)
  const submit = async () => {
    if(!form.username || !form.email || !form.password) {
      Alert.alert('Error', 'Please fill all fields');
    }
    setisSumbitting(true);
    try {
      const result = await createUser(form.email, form.password, form.username);

      // Set it to global state

      router.replace('home');
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setisSumbitting(false);
    }
  }
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[95vh] px-4 my-6">
          <Image
          source={images.logo}
          resizeMode='contain'
          className="w-[115px] h-[35px]"
          />
          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">Sign up to Aora</Text>
          <FormField
          title="Username"
          value={form.username}
          handleChangeText={(e) => setForm({ ...form, username: e })}
          otherStyles='mt-10'
          />
          <FormField
          title="Email"
          value={form.email}
          handleChangeText={(e) => setForm({ ...form, email: e })}
          otherStyles='mt-5'
          keyBoardType='email-address'
          />
          <FormField
          title="Password"
          value={form.password}
          handleChangeText={(e) => setForm({ ...form, password: e })}
          otherStyles='mt-5'
          />
          <CustomButton
          title= "Sign up"
          handlePress={submit}
          containerStyles='mt-7'
          isLoading={isSumbitting}
          />
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-sm text-gray-100">Already have an account?</Text>
            <Link href="sign-in" className="text-sm text-secondary-200">Login</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default signUp
