export function hello(name: string): string {
  return `Hello, ${name}!`;
}

export const sum = (a: number, b: number): number => a + b;

export const minus = (a: number, b: number): number => a - b;

export const times = (a: number, b: number): number => a * b;

export const divide = (a: number, b: number): number => {
    if (b === 0) throw new Error("Cannot divide by zero");
    return a / b;
};