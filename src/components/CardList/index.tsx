import React, { FC } from "react";
import { Animated } from "react-native";

import { Swipeable } from "../../modules";

import { Imagens } from "../../utils/types/ImagensData";
import { FToC } from "../../utils/formats/convertTemp";

import {
  Wrapper,
  ButtonRemove,
  ButtonDetails,
  Icon,
  ContainerInfo,
  Info,
  InfoCity,
  ImageWeather,
} from "./styles";

interface Props {
  data: CardProps;
  handleRemove?: () => void;
  handleDetails?: () => void;
}

const CardList: FC<Props> = ({ data, handleRemove, handleDetails }) => {
  const { name, country, maxTemp, minTemp, temp, description } = data;

  return (
    <Wrapper>
      <Swipeable
        overshootRight={false}
        renderRightActions={() => (
          <Animated.View>
            <ButtonRemove onPress={handleRemove}>
              <Icon />
            </ButtonRemove>
          </Animated.View>
        )}
      >
        <ButtonDetails onPress={handleDetails}>
          <ContainerInfo>
            <InfoCity>{name}</InfoCity>
            <Info>País: {country}</Info>
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
          </ContainerInfo>
        </ButtonDetails>
      </Swipeable>
    </Wrapper>
  );
};

export default CardList;
