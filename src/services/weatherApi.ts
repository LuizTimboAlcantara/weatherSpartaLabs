import axios from "axios";

const { URL_WEATHERMAP } = process.env;
const { OPENWEATHER_KEY } = process.env;

const weatherApi = axios.create({
  baseURL: URL_WEATHERMAP,
  timeout: 5000,
});

export const searchCity = async (city: string): Promise<ResponseWeather> => {
  const { data } = await weatherApi.get<ResponseWeather>(
    `/weather?q=${city}&lang=pt_br&appid=${OPENWEATHER_KEY}&units=imperial`
  );
  return data;
};

export const getInfoDetails = async (
  city: string
): Promise<namespace.RootObject> => {
  const { data } = await weatherApi.get(
    `/forecast?q=${city}&lang=pt_br&appid=${OPENWEATHER_KEY}&units=imperial`
  );

  return data;
};
