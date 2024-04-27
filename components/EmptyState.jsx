import { Text, View, Image } from 'react-native';

import { images } from '../constants';

const EmptyState = ({ title, description }) => {
  return (
    <View className="flex-col items-center justify-center p-4">
      <Image source={images.empty} className="w-[250px] h-[200px]" />
      <Text className="text-xl text-center font-psemibold text-white mt-4">
        {title}
      </Text>
      <Text className="font-pmedium text-gray-100 text-sm">{description}</Text>
    </View>
  );
};

export default EmptyState;
