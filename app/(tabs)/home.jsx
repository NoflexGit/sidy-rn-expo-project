import { useState, useEffect } from 'react';
import { FlatList, Text, View, Image, RefreshControl } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import PageTitle from '../../components/PageTitle';
import { useGlobalContext } from '../../context/GlobalProvider';
import { images } from '../../constants';
import SearchField from '../../components/SearchField';
import VideoCard from '../../components/VideoCard';
import EmptyState from '../../components/EmptyState';
import Trending from '../../components/Trending';
import { getAllVideos } from '../../lib/appwrite';
import useAppwrite from '../../lib/useAppwrite';

const Home = () => {
  const { data: videos, refetch } = useAppwrite(getAllVideos);
  const { user } = useGlobalContext();
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await refetch();
    setIsRefreshing(false);
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={videos}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <VideoCard
            title={item.title}
            creator={item.creator?.username}
            avatar={item.creator?.avatar}
            thumbnail={item.thumbnail}
            video={item.video}
          />
        )}
        ListHeaderComponent={
          <View className="flex my-6 px-4 space-y-6">
            <PageTitle
              title={user?.username}
              description="Welcome Back"
              rightSlot={
                <Image
                  className="w-9 h-10"
                  source={images.logoSmall}
                  resizeMode="contain"
                />
              }
            />
            <SearchField placeholder="Search for something" />
            <View>
              <Text className="text-gray-100 text-lg font-pregular mb-4">
                Trending Videos
              </Text>
              <Trending
                posts={[
                  {
                    $id: '1',
                    title: 'Post 1',
                  },
                  {
                    $id: '2',
                    title: 'Post 2',
                  },
                  {
                    $id: '3',
                    title: 'Post 3',
                  },
                ]}
              />
            </View>
          </View>
        }
        ListEmptyComponent={
          <EmptyState
            title="No videos found"
            description="Try searching for something else"
          />
        }
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default Home;
