import * as React from 'react';
import { Dimensions, Platform, StatusBar } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { func } from './src/constants';

// root stack navigation
import RootStack from './src/navigation/RootStack';

// app context state
import AppState from './src/context/AppState';

// Web App entry point component
import WebHome from './src/WebView/WebHome';

const { width } = Dimensions.get('window');

const isMobile = width <= 768;
const isWeb = Platform.OS === 'web';

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function prepare() {
      try {
        // keeps the splash screen visible while assets are cached
        await SplashScreen.preventAutoHideAsync();

        // pre-load/cache assets: images, fonts, and videos
        await func.loadAssetsAsync();
      } catch (e) {
        // console.warn(e);
      } finally {
        // loading is complete
        setIsLoading(false);
      }
    }

    prepare();
  }, []);

  React.useEffect(() => {
    // when loading is complete
    if (isLoading === false) {
      // hide splash function
      const hideSplash = async () => SplashScreen.hideAsync();

      // hide splash screen to show app
      hideSplash();
    }
  }, [isLoading]);

  if (isLoading) {
    return null;
  }

  const getAppComponent = () => {
    if (isWeb) {
      return isMobile ? <RootStack /> : <WebHome />;
    }
    return <RootStack />; // Returns the mobile entry component if not viewed on a web OS
  };

  return (
    <AppState>
      <StatusBar barStyle="light-content" />
      {getAppComponent()}
    </AppState>
  );
}

export default App;
