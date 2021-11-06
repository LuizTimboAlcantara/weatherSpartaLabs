import styled from "styled-components/native";

import { MaterialIcons } from "../../modules";

import Colors from "../../utils/theme/colors";

export const Wrapper = styled.View`
  flex: 1;
  width: 70%;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.View`
  bottom: -6%;
`;

export const Input = styled.TextInput`
  width: 250px;
  height: 40px;
  margin: 12px;
  border-bottom-width: 1px;
  padding: 10px;
  color: ${Colors.black};
`;

export const Icon = styled(MaterialIcons).attrs({
  name: "search",
  size: 40,
  color: "gray",
})`
  align-items: flex-end;
  justify-content: flex-end;
  right: -90%;
  bottom: 50%;
`;
