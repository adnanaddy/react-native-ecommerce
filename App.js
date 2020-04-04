import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView,  RefreshControl } from 'react-native';
import Header from './components/Header'
import HeroImage from './components/HeroImage'
import Body from './components/Body'

function wait(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}


export default function App() {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, [refreshing]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          } showsVerticalScrollIndicator={false} style={styles.container}>
        <Header />
        <HeroImage />
        <Body />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
