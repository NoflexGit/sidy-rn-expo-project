import { View, FlatList } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import useAppwrite from '../../lib/useAppwrite';
import { searchVideos } from '../../lib/appwrite';
import VideoCard from '../../components/VideoCard';
import PageTitle from '../../components/PageTitle';
import SearchField from '../../components/SearchField';
import EmptyState from '../../components/EmptyState';
import { useEffect } from 'react';

const Query = () => {
  const { query } = useLocalSearchParams();
  const { data: videos } = useAppwrite(() => searchVideos(query));

  useEffect(() => {
    return () => {};
  }, [query]);

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
            <PageTitle title={query} description="Search results" />
            <SearchField
              placeholder="Search for something"
              initialQuery={query}
            />
          </View>
        }
        ListEmptyComponent={
          <EmptyState
            title="No videos found"
            description={`No videos found for "${query}"`}
          />
        }
      />
    </SafeAreaView>
  );
};

export default Query;
