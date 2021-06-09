import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";
import  {
  AppProvider,
  store
} from "common/src";
import AppCommon from './AppCommon';

export default function App() {
  return (
    <Provider store={store}>
      <AppProvider>
        <AppCommon/>
      </AppProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
