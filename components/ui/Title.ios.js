import { Dimensions, Platform, StyleSheet, Text } from 'react-native'

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>
}

const deviceWidht = Dimensions.get('screen').width

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: deviceWidht >= 600 ? 32 : 24,
    color: 'white',
    textAlign: 'center',
    padding: 12,
    maxWidth: '80%',
    width: deviceWidht >= 600 ? 450 : 300,
    justifyContent: 'center',
    alignContent: 'center'
  }
})

export default Title
