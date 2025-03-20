import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Étlap: undefined;
  Home: undefined;
  // További útvonalak...
};

export type OfferingsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;