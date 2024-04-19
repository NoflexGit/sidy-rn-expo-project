import { View, Text } from 'react-native';

const Query = ({ query }) => {
  return (
    <View>
      <Text>Search results for "{query}"</Text>
    </View>
  );
};

export default Query;
