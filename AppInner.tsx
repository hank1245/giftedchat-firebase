import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomePage from './src/pages/WelcomePage';
import SignUpPage from './src/pages/SignUpPage';
import SignInPage from './src/pages/SignInPage';
import Chat from './src/pages/Chat';
import { Suspense, useEffect, useState } from 'react';
import ErrorBoundary from './src/components/common/ErrorBoundary';
import ErrorScreen from './src/components/common/ErrorScreen';
import LoadingScreen from './src/components/common/LoadingScreen';
import Home from './src/pages/Home';
import { onAuthStateChanged } from 'firebase/auth';
import { getAuth } from 'firebase/auth/react-native';
import { useSetRecoilState } from 'recoil';
import { userDataState } from './src/atoms';

export type StackParamList = {
  Welcome: undefined;
  SignUp: undefined;
  SignIn: undefined;
};

export type LoggedInStackParamList = {
  Home: undefined;
  Chat: undefined;
};

const AppInner = () => {
  const Stack = createNativeStackNavigator<StackParamList>();
  const LoggedInStack = createNativeStackNavigator<LoggedInStackParamList>();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const setUserData = useSetRecoilState(userDataState);
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setIsLoggedIn(true);
        setUserData({ email: user!.email });
      } else {
        setIsLoggedIn(false);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <NavigationContainer>
      <ErrorBoundary fallback={<ErrorScreen />}>
        <Suspense fallback={<LoadingScreen />}>
          {!isLoggedIn ? (
            <Stack.Navigator>
              <Stack.Screen
                name="Welcome"
                component={WelcomePage}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SignUp"
                component={SignUpPage}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SignIn"
                component={SignInPage}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          ) : (
            <LoggedInStack.Navigator>
              <LoggedInStack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
              />
              <LoggedInStack.Screen name="Chat" component={Chat} />
            </LoggedInStack.Navigator>
          )}
        </Suspense>
      </ErrorBoundary>
    </NavigationContainer>
  );
};

export default AppInner;
