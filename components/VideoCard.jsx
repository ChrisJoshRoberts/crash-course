import { View, Text } from 'react-native'
import React from 'react'

const VideoCard = ({video: {title, thumbnail, video, creator: {username, avatar}}}) => {
  return (
    <View>
      <Text>VideoCard</Text>
    </View>
  )
}

export default VideoCard
