declare type ResponseWeather = {
  name: string;
  sys: { country: string };
  weather: [{ description: string }];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
};
