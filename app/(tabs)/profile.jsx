import { FlatList, Text, TouchableOpacity, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import useAppwrite from '../../lib/useAppwrite';
import { getVideosByUserId } from '../../lib/appwrite';
import VideoCard from '../../components/VideoCard';
import EmptyState from '../../components/EmptyState';
import { useGlobalContext } from '../../context/GlobalProvider';
import { signOut } from '../../lib/appwrite';

import { icons } from '../../constants';

const Profile = () => {
  const { user, setUser, setIsLoggedIn } = useGlobalContext();
  const { data: videos } = useAppwrite(() => getVideosByUserId(user?.$id));

  const handleLogout = async () => {
    try {
      await signOut();
      setUser(null);
      setIsLoggedIn(false);

      router.replace('/sign-in');
    } catch (error) {
      console.error(error);
    }
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
          <View className="px-4 mb-10">
            <TouchableOpacity
              className="flex w-full items-end mb-4 mt-4"
              onPress={handleLogout}
            >
              <Image
                source={icons.logout}
                resizeMode="contain"
                className="w-6 h-6"
              />
            </TouchableOpacity>
            <View className="items-center">
              <View>
                <Image
                  source={{ uri: user?.avatar }}
                  className="w-14 h-14 border-2 border-secondary rounded-xl mb-2"
                />
              </View>
              <Text className="text-white text-lg font-psemibold mb-4">
                {user?.username}
              </Text>
              <View className="flex-row gap-8">
                <View className="items-center">
                  <Text className="text-white font-psemibold text-xl">
                    {videos?.length}
                  </Text>
                  <Text className="text-gray-100 text-xs font-pregular">
                    Videos
                  </Text>
                </View>
                <View className="items-center">
                  <Text className="text-white font-psemibold text-xl">
                    {videos?.length}
                  </Text>
                  <Text className="text-gray-100 text-xs font-pregular">
                    Views
                  </Text>
                </View>
              </View>
            </View>
          </View>
        }
        ListEmptyComponent={
          <EmptyState
            title="No videos found"
            description="You have not uploaded any videos yet."
          />
        }
      />
    </SafeAreaView>
  );
};

export default Profile;
