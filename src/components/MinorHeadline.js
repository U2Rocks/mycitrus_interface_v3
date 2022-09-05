import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import design from '../constants/global'
import { smallColor } from '../images/imageExport'


// interactible box that leads to full page of audio or news article...

const MinorHeadline = () => {

  const headlinePress = () => console.log("minor headline pressed")

  return (
    <Pressable onPress={headlinePress}>
      <View style={styles.container}>
        <View style={styles.textSide}>
          <Text style={styles.headlineText}>Sample Title that is unnecessarily long and might break styling</Text>
          <Text style={styles.italiText}>Published: 8/11/22</Text>
        </View>
        <View style={styles.imageBox}>
            <Image source={smallColor} style={styles.imageStyle}/>
        </View>
      </View>
    </Pressable>
  )
}

export default MinorHeadline

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    padding: 10,
    backgroundColor: design.COLOR_WHITE,
    height: 120,
    borderBottomColor: design.COLOR_BLACK,
    borderBottomWidth: .75
  },
  text: {
    fontsize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textSide: {
    flex: 2,
    justifyContent: 'space-between',
    padding: 5,
  },
  imageBox: {
    height: 100,
    width: 100,
    backgroundColor: design.COLOR_WHITE,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 5,
  },
  imageStyle: {
    flex: 1,
    height: 90,
    width: 90,
  },
  italiText: {
    fontSize: 15,
    fontStyle: 'italic',
  },
  headlineText: {
    fontSize: 18,
  }
})