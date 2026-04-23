import { NavigatorScreenParams } from '@react-navigation/native';

export type RootTabParamList = {
  Home: undefined;
  More: NavigatorScreenParams<MoreStackParamList>;
};

export type MoreStackParamList = {
  Settings: { userId: string };
  Profile: undefined;
};