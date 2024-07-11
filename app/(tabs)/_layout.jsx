import { View, Text, Image } from 'react-native'
import { Tabs, Redirect } from 'expo-router'

const TabIcon = ({icon, color, name, focused}) => {
  return (
    <View>
      <Image
        source={icon}
      />
    </View>
  )

}


const Layout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: (color, focuses) => (
            <TabIcon
              icon= {}
            />
          )
        }}
        />
      </Tabs>
    </>
  )
}

export default Layout
