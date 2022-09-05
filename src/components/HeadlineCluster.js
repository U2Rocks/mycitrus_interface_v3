import { View, Text, StyleSheet, Image } from 'react-native'
import design from '../constants/global'
import { headlineImg } from '../images/imageExport'

const HeadlineCluster = () => {
  return (
    <View style={styles.container}>
        <View style={styles.bigPicture}>
            <Image source={headlineImg} style={styles.imageStyle}/>
        </View>
        <Text style={[styles.textVisibility]}>Default Title</Text>
        <Text style={[styles.textVisibility, styles.textItalics]}>Published: 08/11/22</Text>
    </View>
  )
}

export default HeadlineCluster

const styles = StyleSheet.create({
    container: {
        backgroundColor: design.COLOR_DARK_BLUE,
        padding: 10,
        marginRight: 10,
    },
    bigPicture: {
        backgroundColor: design.COLOR_DARK_ORANGE,
        width: 400,
        height: 200,
        marginBottom: 10,
    },
    imageStyle: {
        transform: [{scale: 1}],
        resizeMode: 'cover'
    },
    textVisibility: {
        color: design.COLOR_WHITE,
    },
    textItalics: {
        fontStyle: 'italic',
    },
})