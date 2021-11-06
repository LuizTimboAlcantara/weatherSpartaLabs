import React from "react";

import CardCreate from "../CardCreate";

import { Wrapper, Container, Input, Icon } from "./styles";

type SearchProps = {
  dados: CardProps;
  code: boolean;
  onChangeText: (value: string) => void;
  handleList: () => void;
};

export default function SearchBar({
  dados,
  code,
  onChangeText,
  handleList,
}: SearchProps) {
  return (
    <Wrapper>
      <Container>
        <Input
          autoFocus
          placeholder="Digite o nome da cidade"
          onChangeText={onChangeText}
        />
        <Icon />
      </Container>

      {code && (
        <CardCreate
          name={dados.name}
          country={dados.country}
          handleList={handleList}
        />
      )}
    </Wrapper>
  );
}
