import React, { FC } from "react";

import ButtonAdd from "../ButtonAdd";

import { Container, Info } from "./styles";

type CardCreateProps = {
  name: string;
  country: string;
  handleList: () => void;
};

const CardCreate: FC<CardCreateProps> = ({ name, country, handleList }) => {
  return (
    <Container>
      <Info>Cidade: {name}</Info>
      <Info>País: {country}</Info>

      <ButtonAdd title="Adicionar" onPress={handleList} />
    </Container>
  );
};

export default CardCreate;
