import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

import Colors from "../../utils/theme/colors";
import Fonts from "../../utils/theme/fonts";

export const Container = styled.TouchableOpacity`
  align-items: flex-end;
`;

export const Title = styled.Text`
  font-family: ${Fonts.heading};
  color: ${Colors.blue};
  font-size: ${RFValue(17)}px;
`;
