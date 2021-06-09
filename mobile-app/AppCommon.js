import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  {
  AppContext,
  store
} from "common/src";

import { useDispatch, useSelector } from 'react-redux';

export default function AppCommon({ children }) {
  const dispatch = useDispatch()
  const { app } = useContext(AppContext)
  console.log(store.getState())
  dispatch(app.addTodoAction('PAS MOI'))
  return (
        <View style={styles.container}>
          <Text>{store.getState().todos[0].title}</Text>
          <StatusBar style="auto" />
        </View>
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
