type Sum = (a: number, b: number) => number;

// As interface definition
// interface Sum {
//     (a: number, b: number) : number
// }

enum OPERATION {
    'SUM' = 'sum',
    'SUBTRACT' = 'sum',
    'MULTIPLY' = 'multiply',
}

export const sum: Sum = (a, b) => a + b;

export const multiply = (a:number, b:number): number => a * b;

export const subtract = (a:number, b:number): number => a - b;

export const failCoverage = (a:number, b:number, operation: string): number => {

  if (operation === OPERATION.SUM) {
    return sum(a,b);
  }
  
  return 0;
};