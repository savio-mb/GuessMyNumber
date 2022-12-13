import { Dimensions, StyleSheet, View } from 'react-native'
import Colors from '../../constants/colors'

const Card = ({ children }) => {
  return <View style={styles.inputContainer}>{children}</View>
}

const deviceWidht = Dimensions.get('window').width

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: deviceWidht >= 600 ? 6 : 36,
    marginHorizontal: 24,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    alignItems: 'center'
  }
})
export default Card
