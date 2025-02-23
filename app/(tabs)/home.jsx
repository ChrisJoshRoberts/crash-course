import { View, Text, FlatList, Image, RefreshControl} from 'react-native'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '../../constants/images'
import SearchInput from '../../components/SearchInput'
import Trending from '../../components/Trending'
import EmptyState from '../../components/EmptyState'
import VideoCard from '../../components/VideoCard'
import { getAllPosts } from '../../lib/appwrite'
import useAppwrite from '../../lib/useAppwrite'


const Home = () => {

  const { data: posts, refetch } = useAppwrite(getAllPosts);

  const [refreshing, setRefreshing] = useState(false)
  const onRefresh = async() => {
    setRefreshing(true);
    // recall to see if any new videos appeared
    await refetch();
    setRefreshing(false);
  }

  return (
    <SafeAreaView className="bg-primary h-full">
    <FlatList
    data={posts}
    keyExtractor={(item) => item.$id}
    renderItem={({item })=> (
      <VideoCard video={item}/>
    )}
    ListHeaderComponent={() => (
      <View className="my-6 px-4 space-y-6">
        <View className="justify-between items-start flex-row mb-6">
          <View>
            <Text className="font-pmedium text-sm text-gray-100">Welcome Back!</Text>
            <Text className="text-2xl text-white font-psemibold">Chris</Text>
          </View>
          <View className="mt-1.5">
            <Image
            className="w-9 h-10"
            resizeMode='contain'
            source={images.logoSmall}
            />
          </View>
        </View>
        {/* Search bar */}
        <SearchInput />
        <View className="w-full flex-1 pt-5 pb-8">
          <Text className="text-lg text-gray-100 font-pregular mb-3">Latest Videos</Text>
          <Trending
          posts={[{id: 1}, {id: 2}, {id: 3}] ?? []}
          />
        </View>
      </View>
    )}
    ListEmptyComponent={() => (
      <EmptyState
      title='No videos found'
      subtitle='Be the first to add a video'
      />
    )}
    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    />
  </SafeAreaView>
  )
}
export default Home
