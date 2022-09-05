import { View, Text, StyleSheet } from 'react-native'
import HeadlineBoxHeader from './HeadlineBoxHeader'
import HeadlineBoxMain from './HeadlineBoxMain'

// this is the component that holds smaller components
// for the big box headline / has horizontal scrolling?

const BigHeadlineBox = () => {
  return (
    <View style={styles.container}>
      <HeadlineBoxHeader />
      <HeadlineBoxMain />
    </View>
  )
}

export default BigHeadlineBox

const styles = StyleSheet.create({
  container: {
    flex: 5,
  },
  titleHeader: {
    textAlign: 'center',
    fontSize: 25,
  }
})