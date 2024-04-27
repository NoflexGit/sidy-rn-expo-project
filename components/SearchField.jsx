import { View, Text, TextInput } from 'react-native';
import { twMerge } from 'tailwind-merge';

const FormField = ({
  textClassName,
  onChangeText,
  value,
  placeholder,
  label,
}) => {
  const wrapperClasses = twMerge(['space-y-2', textClassName]);

  return (
    <View className={wrapperClasses}>
      {label && (
        <Text className="text=base font-pmedium text-gray-100">{label}</Text>
      )}
      <View className="px-4 h-16 w-full items-center bg-black-100 border-2 border-black-200 focus:border-secondary rounded-2xl">
        <TextInput
          className="w-full flex-1 text-base font-pmedium text-gray-100"
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
        />
      </View>
    </View>
  );
};

export default FormField;
