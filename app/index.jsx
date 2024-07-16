import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Image } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{height: '100%'}}>
        <View className="w-full h-full items-center justify-center px-4">
          <Image
          source={images.logo}
          className="w-28 h-28"
          resizeMode='contain'
          />
          <Image
          source={images.cards}
          className="max-w-[380px] w-full h-[250px]"
          resizeMode='contain'
          />
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">Discover endless possibilities with{' '}
            <Text className="text-secondary-200">Aura</Text>
            </Text>
            <Image
            source={images.path}
            className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
            resizeMode='contain'
            />
          </View>
            <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">Where creativity meets innovation:
              Embark on a journey of endless possibilities with Aura.
            </Text>

            <CustomButton
            title="Continue with Email"
            handlePress={() => { console.log('Email') }}
            containerStyles="w-full mt-7"
            />
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#161622' style='light' />
    </SafeAreaView>
  );
}
