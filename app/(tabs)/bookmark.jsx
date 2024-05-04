import { Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Bookmark = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView className="px-4">
        <Text>Profile</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Bookmark;
