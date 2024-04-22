import { Text, TouchableOpacity } from 'react-native';
import { twMerge } from 'tailwind-merge';

const GradientButton = ({ text, onPress, textClassName }) => {
  const classNames = twMerge([
    'bg-secondary',
    'rounded-xl',
    'w-full',
    'items-center',
    'justify-center',
    'min-h-[62px]',
    textClassName,
  ]);

  return (
    <TouchableOpacity onPress={onPress} className={classNames}>
      <Text className="text-primary font-psemibold text-lg">{text}</Text>
    </TouchableOpacity>
  );
};

export default GradientButton;
