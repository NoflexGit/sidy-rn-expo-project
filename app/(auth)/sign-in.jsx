import { useState } from 'react';
import { Link, router } from 'expo-router';
import { Alert, Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from '../../constants';
import FormField from '../../components/FormField';
import GradientButton from '../../components/GradientButton';
import { getCurrentUser, signIn } from '../../lib/appwrite';
import { useGlobalContext } from '../../context/GlobalProvider';

const SignIn = () => {
  const { setUser, setIsLoggedIn } = useGlobalContext();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!form.email || !form.password) {
      Alert.alert('Error', 'Please fill all fields');
    }

    setIsLoading(true);

    try {
      await signIn(form.email, form.password);

      const user = await getCurrentUser();

      setUser(user);
      setIsLoggedIn(true);

      router.replace('/home');
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center h-[85vh] px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />
          <Text className="text-2xl text-white font-psemibold my-8">
            Login to your account
          </Text>
          <FormField
            type="email"
            label="Email"
            textClassName="mb-6"
            value={form.email}
            placeholder="Enter your email"
            onChangeText={(value) => setForm({ ...form, email: value })}
          />
          <FormField
            label="Password"
            type="password"
            textClassName="mb-6"
            placeholder="Enter your password"
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />
          <GradientButton text="Sign In" onPress={handleSubmit} />
          <View className="justify-center pt-5 gap-2 flex-row">
            <Text className="text-lg text-gray-100">
              Don't have an account?
            </Text>
            <Link
              className="text-lg font-psemibold text-secondary"
              href="/sign-up"
            >
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
