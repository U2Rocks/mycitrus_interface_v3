import { View, Text, StyleSheet, Pressable } from 'react-native'
import design from '../constants/global'


// not complete will be edited with search bar toggle***
// decorative header that becomes search bar when magnifying glass clicked

const Header = () => {

    // function that triggers when magnifying glass is pressed
    const searchPress = () => console.log("Search Bar Toggled")

  return (
    <View style={styles.container}>
      <View style={[styles.center]}>
        <View style={[styles.centerView]}>
            <Pressable onPress={searchPress} style={[styles.buttonContainer]}>
                <Text style={styles.buttonSearch}>🔍</Text>
            </Pressable>
        </View>
        <Text style={[styles.text]}>MYCITRUS</Text>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: design.COLOR_ORANGE,
        flex: 1,
    },
    text: {
        fontSize: 30,
        textAlign: 'center',
        letterSpacing: 3,
        fontWeight: 'bold',
        color: design.COLOR_WHITE,
        marginRight: 45,
    },
    buttonSearch: {
        fontSize: 30,
    },
    center: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 30,
        backgroundColor: design.COLOR_SEAWEED,
        borderRadius: 30,
        padding: 10,
    },
    border: {
        borderColor: design.COLOR_BLACK,
        borderWidth: 2,
    },
    centerView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
})