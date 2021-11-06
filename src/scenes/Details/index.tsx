import React, { FC, useState, useEffect } from "react";

import { getInfoDetails } from "../../services/weatherApi";
import { CardDetails } from "../../components";

import { FormatDateWeek } from "../../utils/formats/convertDate";
import {
  Wrapper,
  Container,
  Header,
  InfoLocale,
  InfoDate,
  Loading,
  CardDetailsList,
} from "./styles";

type DetailsProps = {
  name: string;
  route: any;
};

export const Details: FC<DetailsProps> = (props) => {
  const { name, country } = props.route.params;

  const [dataList, setDataList] = useState<CardDetailsProps[]>([]);
  const [firstDayOfWeek, setFirstDayOfWeek] = useState("");
  const [latterDayOfWeek, setLatterDayOfWeek] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  async function loadDetails() {
    const data = await getInfoDetails(name);
    const { list } = data;

    let dataNow = list[0].dt_txt;
    let days = [] as CardDetailsProps[];

    list.map((item) => {
      if (item.dt_txt.substr(0, 10) !== dataNow.substr(0, 10)) {
        days.push({
          date: item.dt_txt,
          temp: item.main.temp,
          minTemp: item.main.temp_min,
          maxTemp: item.main.temp_max,
          description: item.weather[0].description,
        });

        dataNow = item.dt_txt;
      }
    });

    setDataList(days);
    setIsLoading(false);
  }

  useEffect(() => {
    loadDetails();

    const date = FormatDateWeek();
    setFirstDayOfWeek(date.firstDayOfWeek);
    setLatterDayOfWeek(date.latterDayOfWeek);
  }, []);

  return (
    <Wrapper>
      {isLoading ? (
        <Loading />
      ) : (
        <Container>
          <Header>
            <InfoLocale>{`Dados dos próximos dias para ${name} - ${country}`}</InfoLocale>
            <InfoDate>
              Semana do dia {firstDayOfWeek} ao dia {latterDayOfWeek}
            </InfoDate>
          </Header>

          <CardDetailsList
            keyExtractor={(item) => String(item.date)}
            data={dataList}
            renderItem={({ item }) => <CardDetails data={item} />}
          />
        </Container>
      )}
    </Wrapper>
  );
};

export default Details;
