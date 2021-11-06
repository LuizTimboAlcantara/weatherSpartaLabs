import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, Title } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export default function ButtonAdd({ title, ...rest }: ButtonProps) {
  return (
    <Container activeOpacity={0.7} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
