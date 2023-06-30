import React from 'react';
import { View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import AdminPage from '../components/AddItem';
import CustomerPage from '../components/Header';

const Container = () => {
  const { name } = useRoute();

  return (
    <View>
      {name === 'admin' && <AdminPage />}
      {name === 'customer' && <CustomerPage />}
    </View>
  );
};

export default Container;