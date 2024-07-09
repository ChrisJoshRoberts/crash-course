import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const profile = () => {
  return (
    <View>
      <Image source={{
        uri: "https://images.unsplash.com/photo-1718931216622-c25c7ae7526f?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}}
        style={{
          width: 100,
          height: 100,
          borderRadius: 100,
          margin: 20,
        }}/>
    </View>
  )
}

export default profile

const styles = StyleSheet.create({})
