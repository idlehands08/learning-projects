export var var1Boolean: boolean = true;
// TODO: 

// Number
export var var2Decimal: number = 13;
export var var3Hex: number = 0xf00d;
export var var4Binary: number = 0b111111;
export var var5Octal: number = 0o744;

// String
export var var6String: string = "Hello, world!";

// Array
export var var7Array: any[] = [1, 'test', {a: 3}, 4, 5];
export var var8NumericArray: number[] = [1,2,3,4,5];

// Tuple
export var var9Tuple: [string, number] = ['key', 12345];

// Enums 
export enum Color {
  Red = 1,
  Green = 2,
  Blue = 4
}

export var var10Enum: Color = Color.Blue

// Array of Any
export var var11ArrayOfAny: Array<any> = [1, 'test', {a: 3}, 4, 5]

// Void
export var var12VoidFunction(): void {
  return void;
}

// Null and Undefined
export var var13Null: null = null;
export var var14Undefined: undefined = undefined;

export var var15NeverFunction(): never {
 while(true) {}
} 
// Never


