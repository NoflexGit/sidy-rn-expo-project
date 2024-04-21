import { useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from '../../constants';
import FormField from '../../components/FormField';

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center h-full px-4 my-6 ">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />
          <Text className="text-2xl text-white font-psemibold mt-8">
            Login to your account
          </Text>
          <FormField
            type="email"
            label="Email"
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />
          <FormField
            label="Password"
            type="password"
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
