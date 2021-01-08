export const sumRoundValueUtil = (number, precision = 0) => {
  const factor = 10 ** precision;
  const product = Math.round(number * factor * 10) / 10;
  return Math.round(product) / factor;
};
