import styled from "styled-components/native";
import { ActivityIndicator, FlatList } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import Colors from "../../utils/theme/colors";
import Fonts from "../../utils/theme/fonts";

export const Wrapper = styled.View`
  flex: 1;
  padding: ${RFValue(5)}px;
`;

export const ContainerInfo = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  bottom: 20%;
`;

export const TitleInfo = styled.Text`
  font-family: ${Fonts.heading};
  font-size: ${RFValue(20)}px; ;
`;

export const SubInfo = styled.Text`
  font-family: ${Fonts.text};
  font-size: ${RFValue(15)}px;
`;

export const Loading = styled(ActivityIndicator).attrs({
  size: 50,
  color: Colors.blue_dark,
})`
  top: 50%;
`;

export const CardFavoriteList = styled(
  FlatList as new () => FlatList<CardProps>
).attrs({
  showsVerticalScrollIndicator: false,
})``;
