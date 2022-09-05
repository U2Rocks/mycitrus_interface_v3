import { View, Text, StyleSheet } from 'react-native'
import design from '../constants/global'


// contains the heading for the big box section

const HeadlineBoxHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Top Stories</Text>
    </View>
  )
}

export default HeadlineBoxHeader

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  headline: {
    fontSize: 20,
    textAlign: 'center'
  }
})