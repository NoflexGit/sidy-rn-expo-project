import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import { twMerge } from 'tailwind-merge';
import { usePathname, router } from 'expo-router';
import { useState } from 'react';
import { icons } from '../constants';

const SearchField = ({ textClassName, placeholder, label, initialQuery }) => {
  const pathname = usePathname();
  const [query, setQuery] = useState(initialQuery || '');

  const handleQueryChange = (text) => {
    setQuery(text);
  };

  const wrapperClasses = twMerge(['space-y-2', textClassName]);

  return (
    <View className={wrapperClasses}>
      {label && (
        <Text className="text=base font-pmedium text-gray-100">{label}</Text>
      )}
      <View className="px-4 h-16 w-full items-center flex-row bg-black-100 border-2 border-black-200 focus:border-secondary rounded-2xl">
        <TextInput
          className="w-full flex-1 text-base font-pmedium text-gray-100"
          value={query}
          onChangeText={handleQueryChange}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
        />
        <TouchableOpacity
          onPress={() => {
            if (query === '')
              return Alert.alert(
                'Missing Query',
                'Please input something to search results across database',
              );

            if (pathname.startsWith('/search')) router.setParams({ query });
            else router.push(`/search/${query}`);
          }}
        >
          <Image
            source={icons.search}
            className="w-5 h-5"
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchField;
