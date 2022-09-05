import { View, Text, StyleSheet, ScrollView } from 'react-native'
import design from '../constants/global'
import HeadlineCluster from './HeadlineCluster'

// contains the rest of the content for the big box section

const HeadlineBoxMain = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <HeadlineCluster />
        <HeadlineCluster />
        <HeadlineCluster />
        <HeadlineCluster />
        <HeadlineCluster />
      </ScrollView>
    </View>
  )
}

export default HeadlineBoxMain

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})