declare type CardProps = {
  name: string;
  country: string;
  temp?: number;
  minTemp?: number;
  maxTemp?: number;
  description?: string;
};

declare type CardDetailsProps = {
  date: string;
  temp: number;
  minTemp: number;
  maxTemp: number;
  description: string;
};
