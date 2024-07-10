import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';


export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl">Aura</Text>
      <StatusBar style="auto" />
      <Link href="/profile" style={{
        color: 'white',
        marginTop: 20,
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 50,
        textDecoration: 'none',
      }}>Go to Profile</Link>
    </View>
  );
}
