import styled from "styled-components/native";
import { ActivityIndicator, FlatList } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import Colors from "../../utils/theme/colors";
import Fonts from "../../utils/theme/fonts";

export const Wrapper = styled.View`
  flex: 1;
`;

export const Container = styled.View``;

export const Header = styled.View`
  top: 10%;
`;

export const InfoLocale = styled.Text`
  text-align: center;
  justify-content: center;
  font-family: ${Fonts.heading};
  font-size: ${RFValue(20)}px;
`;

export const InfoDate = styled.Text`
  text-align: center;
  justify-content: center;
  font-family: ${Fonts.text};
  font-size: ${RFValue(15)}px;
`;

export const Loading = styled(ActivityIndicator).attrs({
  size: 50,
  color: Colors.blue_dark,
})`
  top: 50%;
`;

export const CardDetailsList = styled(
  FlatList as new () => FlatList<CardDetailsProps>
).attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: ${RFValue(100)}px;
  margin-bottom: ${RFValue(110)}px;
`;
