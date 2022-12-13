import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import Colors from '../../constants/colors'

const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  )
}

const deviceWidht = Dimensions.get('screen').width

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
    width: '100%'
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2
  },
  buttonText: {
    fontSize: deviceWidht >= 600 ? 30 : 18,
    color: 'white',
    textAlign: 'center'
  },
  pressed: {
    opacity: 0.75
  }
})

export default PrimaryButton
