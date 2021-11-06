import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

import Colors from "../../utils/theme/colors";
import Fonts from "../../utils/theme/fonts";

export const Container = styled.View`
  width: 90%;
  background-color: ${Colors.white};
  border-radius: ${RFValue(5)}px;
  align-self: center;
  margin-top: 5%;
`;

export const Info = styled.Text`
  font-family: ${Fonts.text};
  top: ${RFValue(2)}px;
  margin-bottom: ${RFValue(2)}px;
`;

export const ImageWeather = styled.Image`
  top: 20%;
  position: absolute;
  width: ${RFValue(180)}px;
  height: ${RFValue(80)}px;
  left: 50%;
  border-radius: ${RFValue(30)}px;
`;
