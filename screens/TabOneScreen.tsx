import { StyleSheet, ScrollView , Image} from 'react-native';
import { MonoText } from '../components/StyledText';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View} from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/images/startup_logo.png')} />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <ScrollView>
        <Text style={styles.getStartedText} lightColor="rgba(0,0,0,0.8)" darkColor="rgba(255,255,255,0.8)"> What is the goal of this project ?
        </Text>
          {/* <EditScreenInfo path="For all event  organizers concerned 
          about their community's ecological impact, PLANT A is a 
          sustainable  water provider that produces single use cans that are
          not only biodegradable but also plant a flower every time it is thrown out."/> */}
          <Image style={styles.logo2} source={require('../assets/images/index.png')} />
          {/* <EditScreenInfo path="More than water, Plant-A is your favorite event sponsor
          Acting as distributors, we offer 2 alternatives:
          - providing all the information for recycling the bottles
          - we come pick up the bottles and take them to our trusted partners" /> */}
          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
          <MonoText style={styles.getStartedText}>How it works</MonoText>
          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
          <Image style={styles.logo4} source={require('../assets/images/index5.png')} />
          <MonoText style={styles.title5}>offer a flower to your planet</MonoText>
          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
          <MonoText style={styles.title2}>Which flowers are we selling ?</MonoText>
          <Image style={styles.logo3} source={require('../assets/images/index4.png')} />
          <MonoText style={styles.title2}>Contact us</MonoText>
          <MonoText style={styles.title4}>adeleanneclaudy.zoaeter@alumni.esade.edu</MonoText>
          <MonoText style={styles.title3}>olivia.gaubert@alumni.esade.edu</MonoText>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  getStartedText: {
    color: 'black',
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 50,
  },
  logo: {
    height: 100,
    width: 250,
    alignSelf: 'center',
  },
  logo2: {
    height: '15%',
    width: 230,
    marginTop: 30,
    marginBottom: 20,
    alignSelf: 'center',
  },
  logo3: {
    height: 220,
    width: 250,
    alignSelf: 'center',
    marginTop: 25,
  },
  logo4: {
    height: '15%',
    width: 250,
    alignSelf: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  title2: {
    color: 'black',
    marginTop: 40,
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  title3: {
    color: 'black',
    marginTop: 20,
    marginBottom: 40,
    fontSize: 10,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  title4: {
    color: 'black',
    marginTop: 20,
    fontSize: 10,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  title5: {
    color: 'black',
    marginTop: 40,
    alignSelf: 'center',
    fontSize: 12,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});