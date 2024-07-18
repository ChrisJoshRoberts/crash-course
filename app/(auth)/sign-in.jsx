import { View, Text, ScrollView, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from "../../constants";
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link, router } from 'expo-router';
import { signIn as signInUser } from '../../lib/appwrite';

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    if (!form.email || !form.password) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }
    setIsSubmitting(true);
    try {
      await signInUser(form.email, form.password);
      // Set it to global state
      router.replace('/home');
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[95vh] px-4 my-6">
          <Image
            source={images.logo}
            resizeMode='contain'
            className="w-[115px] h-[35px]"
          />
          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">Login to Aora</Text>
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
            title="Login"
            handlePress={submit}
            containerStyles='mt-7'
            isLoading={isSubmitting}
          />
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-sm text-gray-100">Don't have an account?</Text>
            <Link href="sign-up" className="text-sm text-secondary-200">Sign up</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
