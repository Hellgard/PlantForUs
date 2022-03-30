import { StyleSheet, Image, ScrollView} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { MonoText } from '../components/StyledText';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <MonoText style={styles.title}>Who are we ?</MonoText>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <ScrollView>
      <MonoText style={styles.getStartedText}>
      We are 5 students who got together to start a project to fight for the environment.
      In our team, there are two entrepreneurs who take care of all the finance, sponsor, business model, target audience.
      2 Designers who designed the product in terms of its form its usefulness, and its design.
      1 Programmer who has thought of how to make the product known through technology.
      </MonoText>
    <Image style={styles.logo} source={require('../assets/images/team.jpeg')} />
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#a38b57",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  getStartedText: {
    color: 'white',
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 50,
    marginLeft: 25,
    marginRight: 25,
  },
  logo: {
    height: 200,
    width: 350,
    marginLeft: '3%',
    marginTop: 20,
  },
  logo2: {
    height: 190,
    width: 250,
    marginLeft: "18%",
    marginTop: 15,
  },
  logo3: {
    height: 300,
    width: 250,
    marginLeft: "15%",
    marginTop: 15,
  },
  title: {
    color: 'white',
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  title3: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 25,
  },
  title2: {
    marginTop: 40,
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: '10%',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
