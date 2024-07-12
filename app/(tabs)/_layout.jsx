import { View, Text, Image } from 'react-native'
import { Tabs, Redirect } from 'expo-router'

import { icons } from '../../constants'

const TabIcon = ({icon, color, name, focused}) => {
  return (
    <View>
      <Image
        source={icon}
        resizeMode="contain"
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
              icon= {icons.home}
              color={color}
              name="Home"
              focused={focused}
            />
          )
        }}
        />
      </Tabs>
    </>
  )
}

export default Layout
