import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomePage from './src/pages/WelcomePage';
import SignUpPage from './src/pages/SignUpPage';
import SignInPage from './src/pages/SignInPage';
import { useRecoilValue } from 'recoil';
import { authState } from './src/atoms';
import Chat from './src/pages/Chat';
import { Suspense, useEffect } from 'react';
import ErrorBoundary from './src/components/common/ErrorBoundary';
import ErrorScreen from './src/components/common/ErrorScreen';
import LoadingScreen from './src/components/common/LoadingScreen';
import Home from './src/pages/Home';

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
  const user = useRecoilValue(authState);
  const isLoggedIn = !!user.email;
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
              <LoggedInStack.Screen name="Chat" component={Chat} />
              <LoggedInStack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
              />
            </LoggedInStack.Navigator>
          )}
        </Suspense>
      </ErrorBoundary>
    </NavigationContainer>
  );
};

export default AppInner;
