import styled from "styled-components/native";
import { Platform } from "react-native";

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
`;

export const Container = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.OS === "ios" ? "padding" : "height",
})`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;
