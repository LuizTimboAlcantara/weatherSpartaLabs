import { format, startOfWeek, parseISO, lastDayOfWeek } from "date-fns";

export function ConvertDate(date: string) {
  const dateFormated = format(parseISO(date), "dd/MM/yyyy");

  return dateFormated;
}

export function FormatDateWeek() {
  const firstDayOfWeek = format(startOfWeek(new Date()), "dd/MM/yyyy");
  const latterDayOfWeek = format(lastDayOfWeek(new Date()), "dd/MM/yyyy");

  return { firstDayOfWeek, latterDayOfWeek };
}
