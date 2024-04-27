import { View, Text, FlatList } from 'react-native';

const Trending = ({ posts }) => {
  return (
    <FlatList
      horizontal
      data={posts}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => (
        <View>
          <Text className="text-white">{item.title}</Text>
        </View>
      )}
    />
  );
};

export default Trending;
