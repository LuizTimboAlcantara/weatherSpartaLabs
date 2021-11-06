import React, { FC, useState, useContext, useCallback } from "react";
import { Alert } from "react-native";

import { CommonActions, useNavigation, useFocusEffect } from "../../modules";
import WeatherContext from "../../context/weather";

import { CardList } from "../../components";
import { searchCity } from "../../services/weatherApi";

import {
  Wrapper,
  Loading,
  CardFavoriteList,
  ContainerInfo,
  TitleInfo,
  SubInfo,
} from "./styles";

export const Home: FC = () => {
  const navigation = useNavigation();
  const { getCitys, saveCitys } = useContext(WeatherContext);

  const [citys, setCitys] = useState<CardProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  function handleRemove(city: CardProps) {
    Alert.alert("Remover", `Deseja remover ${city.name} dos favoritos?`, [
      {
        text: "Não",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: async () => {
          try {
            const currentData = await getCitys();
            const newlist = currentData.filter(
              (item: CardProps) => item.name !== city.name
            );

            await saveCitys(newlist);

            setCitys(newlist);
            await loadListCards();
          } catch (error) {
            Alert.alert("Não foi possível remover!");
          }
        },
      },
    ]);
  }

  function handleDatails(city: CardProps) {
    navigation.dispatch(
      CommonActions.navigate({
        name: "Details",
        params: {
          name: city.name,
          country: city.country,
        },
      })
    );
  }

  async function loadListCards() {
    const currentData = await getCitys();
    let currentDataTemp = currentData;

    for (let i = 0; i < currentData.length; i++) {
      const { main, weather } = await searchCity(currentData[i].name);

      currentDataTemp[i] = {
        ...currentDataTemp[i],
        maxTemp: main.temp_max,
        minTemp: main.temp_min,
        temp: main.temp,
        description: weather[0].description,
      };
    }

    setCitys(currentDataTemp);
    setIsLoading(false);
  }

  useFocusEffect(
    useCallback(() => {
      loadListCards();
    }, [])
  );

  return (
    <Wrapper>
      {isLoading && <Loading />}

      {!isLoading && citys.length === 0 && (
        <ContainerInfo>
          <TitleInfo>{`Parece que você ainda não ${"\n"} adicionou uma cidade`}</TitleInfo>
          <SubInfo>{`Tente adicionar uma cidade na tela de pesquisa`}</SubInfo>
        </ContainerInfo>
      )}

      {!isLoading && citys.length !== 0 && (
        <CardFavoriteList
          keyExtractor={(item) => String(item.name)}
          data={citys}
          renderItem={({ item }) => (
            <CardList
              data={item}
              handleRemove={() => {
                handleRemove(item);
              }}
              handleDetails={() => handleDatails(item)}
            />
          )}
        />
      )}
    </Wrapper>
  );
};

export default Home;
