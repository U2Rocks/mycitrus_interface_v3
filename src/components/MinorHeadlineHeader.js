import { View, Text, StyleSheet } from 'react-native'

const MinorHeadlineHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Recent Headlines</Text>
    </View>
  )
}

export default MinorHeadlineHeader

const styles = StyleSheet.create({
    container: {
      width: '100%',
      marginVertical: 5,
    },
    text: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    }
  })