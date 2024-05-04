import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, TouchableOpacity, View, Text, Image } from 'react-native';
import PageTitle from '../../components/PageTitle';
import FormField from '../../components/FormField';
import GradientButton from '../../components/GradientButton';
import { icons } from '../../constants';

const Create = () => {
  const [form, setForm] = useState({
    title: '',
    prompt: '',
    thumbnail: null,
    video: null,
  });

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="px-4 pt-6">
          <PageTitle title="Upload Video" />
          <View className="mt-6 space-y-4">
            <FormField label="Title" textClassName="mb-4" />
            <FormField label="AI Prompt" />
            <View className="space-y-2">
              <Text className="text=base font-pmedium text-gray-100">
                Upload a video
              </Text>
              <TouchableOpacity className="h-40 w-full items-center bg-black-100 justify-center border-black-200 focus:border-secondary rounded-2xl">
                <View className="p-4 border-secondary/50 border-dashed border rounded-2xl">
                  <Image
                    source={icons.upload}
                    className="w-6 h-6"
                    resizeMode="contain"
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View className="space-y-2">
              <Text className="text=base font-pmedium text-gray-100">
                Thumbnail Image
              </Text>
              <TouchableOpacity className="h-24 w-full items-center bg-black-100 justify-center border-black-200 focus:border-secondary rounded-2xl">
                <View className="flex-row items-center gap-4">
                  <Image
                    source={icons.upload}
                    className="w-6 h-6"
                    resizeMode="contain"
                  />
                  <Text className="text-base font-pmedium text-gray-100">
                    Choose a file
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <GradientButton textClassName="mt-8" text="Publish" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Create;
