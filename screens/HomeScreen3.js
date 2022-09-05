import { SafeAreaView, StyleSheet } from 'react-native'
import BigHeadlineBox from '../src/components/BigHeadlineBox'
import MinorHeadlinesBox from '../src/components/MinorHeadlinesBox'
import Header from '../src/components/Header3'
import design from '../src/constants/global'

// main screen that holds landing page for new users...

const HomeScreen3 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <BigHeadlineBox />
      <MinorHeadlinesBox />
    </SafeAreaView>
  )
}

export default HomeScreen3

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: design.COLOR_LIGHT_ORANGE,
    }
})