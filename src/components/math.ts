export const sum = (...numbers: number[]): number => {
  console.log(`sum: ${JSON.stringify(numbers)}`);
  return numbers.reduce((item, acc) => acc + item, 0);
};

export const multiply = (...numbers: number[]): number => {
  console.log(`multiply: ${JSON.stringify(numbers)}`);
  return numbers.reduce((item, acc) => acc * item, 1);
};

export const square = (number: number): number => {
  console.log(`square: ${number}`);
  return number * number;
};
