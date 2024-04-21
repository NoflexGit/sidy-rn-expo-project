import { View, Text, TextInput } from 'react-native';
import { twMerge } from 'tailwind-merge';

const FormField = ({
  className,
  onChangeText,
  title,
  value,
  placeholder,
  label,
}) => {
  const wrapperClasses = twMerge(['space-y-2', className]);

  return (
    <View className={wrapperClasses}>
      <Text className="text=base font-pmedium text-gray-100">{label}</Text>
      <View className="px-4 h-16 w-full bg-black-100 border-2 border-black-200 focus:border-secondary rounded-2xl">
        <TextInput
          className="w-full h-16 text-base font-pmedium text-gray-100"
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
        />
      </View>
    </View>
  );
};

export default FormField;
