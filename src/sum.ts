type Sum = (a: number, b: number) => number;

// As interface definition
// interface Sum {
//     (a: number, b: number) : number
// }

export const sum: Sum = (a, b) => a + b;