export function FToC(Fahrenheit: number | undefined) {
  if (!Fahrenheit) return 0;

  const res = ((Fahrenheit - 32) * 5) / 9;
  return res.toFixed(0);
}
