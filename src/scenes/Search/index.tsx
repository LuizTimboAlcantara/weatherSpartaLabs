import React, { FC, useState, useContext } from "react";
import { Alert } from "react-native";
import { searchCity } from "../../services/weatherApi";
import WeatherContext from "../../context/weather";

import { CommonActions, useNavigation } from "../../modules";
import { SearchBar } from "../../components";

import { Wrapper, Container } from "./styles";

export const Search: FC = () => {
  const { getCitys, saveCitys } = useContext(WeatherContext);
  const navigation = useNavigation();

  const [interval, setInterval] = useState<NodeJS.Timeout>();
  const [dados, setDados] = useState<CardProps>({} as CardProps);
  const [code, setCode] = useState(false);

  const findCity = async (value: string) => {
    try {
      const data = await searchCity(value);

      setDados({ name: data.name, country: data.sys.country });

      if (data) setCode(true);
    } catch {
      if (value && dados) Alert.alert(`Cidade ${value} não encontrada`);
    }
  };

  const onChangeText = (value: string) => {
    if (interval) {
      clearTimeout(interval);
    }

    if (value === "") {
      setCode(false);
    }

    const timeOut = setTimeout(async () => {
      findCity(value);
    }, 2000);

    setInterval(timeOut);
  };

  async function handleList() {
    if (dados && dados.name !== "") {
      const currentData = await getCitys();

      const validate = currentData.find(
        (item: CardProps) => item.name == dados.name
      );

      if (!validate) {
        const newData = [...currentData!, dados];

        await saveCitys(newData);

        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [{ name: "Home" }],
          })
        );
      } else {
        Alert.alert(`Você já adicionou ${dados.name} aos seus favoritos`);
      }
    }
  }

  return (
    <Wrapper>
      <Container>
        <SearchBar
          dados={dados}
          code={code}
          onChangeText={onChangeText}
          handleList={handleList}
        />
      </Container>
    </Wrapper>
  );
};

export default Search;
