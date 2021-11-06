import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

import Colors from "../../utils/theme/colors";
import Fonts from "../../utils/theme/fonts";

export const Container = styled.View`
  width: 100%;
  background-color: ${Colors.shape};
  margin: ${RFValue(5)}px 0;
  padding: ${RFValue(30)}px ${RFValue(20)}px;
  border-radius: ${RFValue(5)}px;
  box-shadow: 10px 5px 5px black;
`;

export const Info = styled.Text`
  font-family: ${Fonts.text};
  font-size: ${RFValue(15)}px;
  margin-bottom: ${RFValue(5)}px;
`;
