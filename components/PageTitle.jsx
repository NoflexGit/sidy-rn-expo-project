import { View, Text } from 'react-native';

const PageTitle = ({ title, description, rightSlot }) => {
  return (
    <View className="flex justify-between flex-row items-center">
      <View>
        {description && <Text className="text-gray-100">{description}</Text>}
        {title && (
          <Text className="text-2xl text-white font-psemibold">{title}</Text>
        )}
      </View>
      {rightSlot && <View>{rightSlot}</View>}
    </View>
  );
};

export default PageTitle;
