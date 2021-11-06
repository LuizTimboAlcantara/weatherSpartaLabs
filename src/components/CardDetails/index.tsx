import React, { FC } from "react";

import { ConvertDate } from "../../utils/formats/convertDate";
import { Imagens } from "../../utils/types/ImagensData";
import { FToC } from "../../utils/formats/convertTemp";

import { Container, Info, ImageWeather } from "./styles";

type Props = {
  data: CardDetailsProps;
};

const CardDetails: FC<Props> = ({ data }) => {
  const { date, maxTemp, minTemp, temp, description } = data;
  return (
    <Container>
      <Info>Data: {ConvertDate(date)}</Info>
      <Info>
        Atual: {temp}°F - {FToC(temp)}°C
      </Info>
      <Info>
        Mínima: {minTemp}°F - {FToC(minTemp)}°C
      </Info>
      <Info>
        Máxima: {maxTemp}°F - {FToC(maxTemp)}°C
      </Info>
      <Info>Tempo: {description}</Info>

      <ImageWeather
        source={Imagens.find((el) => el.text === description)?.image}
        resizeMode="contain"
      />
    </Container>
  );
};

export default CardDetails;
