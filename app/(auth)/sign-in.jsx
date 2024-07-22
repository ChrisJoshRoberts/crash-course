import { useState } from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Dimensions, Alert, Image } from "react-native";

import { images } from "../../constants";
import CustomButton from "../../components/CustomButton";
import FormField from "../../components/FormField";
import { getCurrentUser, signIn } from "../../lib/appwrite";
import { useGlobalContext } from "../../context/GlobalProvider";

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    if(!form.email || !form.password) {
      Alert.alert('Error', 'All fields are required');
    }
    setIsSubmitting(true);

    try {
      await signIn(form.email, form.password );
      // Set to global state
      router.replace('/home');
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <SafeAreaView className='bg-primary h-full'>
    <ScrollView>
      <View className='w-full justify-center px-4 my-6'>
        <Image
        resizeMode="contain"
        className="w-24 h-24 mx-auto"
        source={images.logo}/>
        <Text className='text-2xl text-white text-semibold mt-10 font-psemibold'> Login to Aora! </Text>
        <FormField
        title="Email"
        value={form.email}
        handleChangeText={(text) => setForm({...form, email: text})}
        otherStyles='mt-7'
        keboardType='email-address'
        />
        <FormField
        title="Password"
        value={form.password}
        handleChangeText={(text) => setForm({...form, password: text})}
        />
        <CustomButton
        containerStyles='mt-7'
        title="Sign In"
        handlePress={submit}
        isLoading={isSubmitting}
        />
      </View>
      <View className='flex-row pt-3 justify-center gap-2'>
        <Text className='text-l text-gray-100 text-pregular'> Don't have an account? </Text>
        <Link href='/sign-up' className="text-l font-psemibold text-secondary">
          Sign Up
        </Link>
      </View>
    </ScrollView>
  </SafeAreaView>

  );
};

export default SignIn;
