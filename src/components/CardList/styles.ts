import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

import { RectButton, Feather } from "../../modules";

import Fonts from "../../utils/theme/fonts";
import Colors from "../../utils/theme/colors";

export const Wrapper = styled.SafeAreaView`
  background-color: ${Colors.shape};
`;

export const ButtonRemove = styled(RectButton)`
  width: ${RFValue(80)}px;
  height: ${RFValue(140)}px;
  background-color: ${Colors.red};
  margin-top: 25%;
  border-radius: ${RFValue(20)}px;
  justify-content: center;
  align-items: center;
  right: ${RFValue(4)}px;
`;

export const Icon = styled(Feather).attrs({
  name: "trash",
  size: 32,
  color: "white",
})``;

export const ButtonDetails = styled(RectButton)`
  width: 100%;
  background-color: ${Colors.white};
  border-radius: ${RFValue(10)}px;
  align-items: center;
  align-self: center;
  margin-top: 5%;
`;

export const ContainerInfo = styled.View`
  margin-right: 50%;
`;

export const Info = styled.Text`
  font-family: ${Fonts.text};
  margin-bottom: ${RFValue(5)}px;
`;

export const InfoCity = styled.Text`
  font-family: ${Fonts.heading};
  font-size: ${RFValue(20)}px;
`;

export const ImageWeather = styled.Image`
  top: 20%;
  position: absolute;
  width: ${RFValue(180)}px;
  height: ${RFValue(80)}px;
  left: 85%;
  border-radius: ${RFValue(30)}px;
`;
