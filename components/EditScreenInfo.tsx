import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, TouchableOpacity, Image} from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

export default function EditScreenInfo({ path }: { path: string }) {
  return (
    <View>
      <View style={styles.getStartedContainer}>
        <View
          style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
          darkColor="rgba(255,255,255,0.05)"
          lightColor="rgba(0,0,0,0.05)">
          <MonoText style={styles.getStartedText}>{path}</MonoText>
        </View>

         {/*
        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Change any of the text, save the file, and your app will automatically update.
        </Text>
      </View>

      <View style={styles.helpContainer}>
        <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
            Tap here if your app doesn't automatically update after making changes
          </Text>
        </TouchableOpacity>
        */}
      </View>
    </View>
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    width: '90%',
    backgroundColor: 'white',
    alignItems: 'center',
    marginLeft: '5%',
    // marginHorizontal: 50,
  },
  logo: {
    height: 90,
    width: 250,
    marginLeft: 20,
    marginTop: 20,
  },
  homeScreenFilename: {
    backgroundColor: 'white',
    marginVertical: 7,
  },
  codeHighlightContainer: {
    backgroundColor: 'white',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    color: 'black',
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 50,
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});
