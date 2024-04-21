import { Text, TouchableOpacity } from 'react-native';

const GradientButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-secondary rounded-xl w-full items-center justify-center min-h-[62px]"
    >
      <Text className="text-primary font-psemibold text-lg">{text}</Text>
    </TouchableOpacity>
  );
};

export default GradientButton;
