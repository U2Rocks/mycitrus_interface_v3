import { View, Text, StyleSheet, ScrollView } from 'react-native'
import MinorHeadline from './MinorHeadline'
import MinorHeadlineHeader from './MinorHeadlineHeader'
import design from '../constants/global'

// vertical scrolling box that contains all minor headlines...

const MinorHeadlinesBox = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <MinorHeadlineHeader />
        <MinorHeadline />
        <MinorHeadline />
        <MinorHeadline />
        <MinorHeadline />
        <MinorHeadline />
        <MinorHeadline />
        <MinorHeadline />
        <MinorHeadline />
      </ScrollView>
    </View>
  )
}

export default MinorHeadlinesBox

const styles = StyleSheet.create({
  container: {
    flex: 7,
    backgroundColor: design.COLOR_DARK_ORANGE
  }
})