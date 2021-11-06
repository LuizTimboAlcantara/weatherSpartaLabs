import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface WeatherContextProps {
  getCitys: () => Promise<CardProps[]>;
  saveCitys: (newCity: CardProps[]) => Promise<void>;
}

const weatherContext = React.createContext<WeatherContextProps>(
  {} as WeatherContextProps
);

export const WeatherProvider: React.FC = ({ children }) => {
  const dataKey = "@weatherApp:mycitys";

  async function getCitys() {
    const data = await AsyncStorage.getItem(dataKey);
    const currentData = data ? JSON.parse(data) : [];

    return currentData;
  }

  async function saveCitys(newCity: CardProps[]) {
    await AsyncStorage.setItem(dataKey, JSON.stringify(newCity));
  }

  return (
    <weatherContext.Provider value={{ getCitys, saveCitys }}>
      {children}
    </weatherContext.Provider>
  );
};

export default weatherContext;
