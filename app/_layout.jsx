import React from 'react';
import { Text, View } from 'react-native';
import { Slot } from 'expo-router';

const RootLayout = () => {
  return (
    <>
      <Text>Header</Text>
      <Slot />
      <Text className="text-2xl">123Footer</Text>
    </>
  );
};

export default RootLayout;
