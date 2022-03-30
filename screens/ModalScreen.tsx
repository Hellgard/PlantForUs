import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Image, ScrollView } from 'react-native';
import { MonoText } from '../components/StyledText';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function ModalScreen() {
  return (
      <ScrollView>
      <View style={styles.container}>
      <MonoText style={styles.title}>How it works</MonoText>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Image style={styles.logo} source={require('../assets/images/index5.png')} />
      <MonoText style={styles.title5}>offer a flower to your planet</MonoText>
      {/* <EditScreenInfo path="/screens/ModalScreen.tsx" /> */}

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <MonoText style={styles.title2}>Which flowers are we selling ?</MonoText>
      <Image style={styles.logo3} source={require('../assets/images/index4.png')} />
      <MonoText style={styles.title2}>Contact us</MonoText>
      <MonoText style={styles.title4}>adeleanneclaudy.zoaeter@alumni.esade.edu</MonoText>
      <MonoText style={styles.title3}>olivia.gaubert@alumni.esade.edu</MonoText>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 150,
    width: 200,
    marginLeft: 10,
    marginTop: 20,
  },
  logo3: {
    height: 300,
    width: 250,
    marginLeft: "5%",
    marginTop: 15,
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  title2: {
    color: 'black',
    marginTop: 40,
    fontSize: 20,
    fontWeight: 'bold',
  },
  title3: {
    color: 'black',
    marginTop: 20,
    marginBottom: 40,
    fontSize: 10,
    fontWeight: 'bold',
  },
  title4: {
    color: 'black',
    marginTop: 20,
    fontSize: 10,
    fontWeight: 'bold',
  },
  title5: {
    color: 'black',
    marginTop: 40,
    fontSize: 12,
    fontWeight: 'bold',
  },
  separator: {
    color: 'black',
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
