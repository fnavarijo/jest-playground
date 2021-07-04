# Guide
Jest can support Typescript in two ways.
- Via babel.
- Using ts-jest.

One caveat of using jest via babel is its limitations to type-check the tests as they run. 

For this guide we are going to stick to the full TS support. For that, we are going to work with `ts-jest`.

## Prerequisites
Install jest and typescript
```
npm i -D jest typescript	
```

Install `ts-jest` and types.
```
npm i -D ts-jest @types/jest	
```

Initialize `ts-jest` config
```
npx ts-jest config:init
```
This will generate the jest config file integrated with `ts-jest`.

Now we are ready to start coding our application.

## Code
Let's create the application code, located on `src` directory. We are going to start with a simple sum.

``` ts
// sum.ts
export function sum(a: number, b: number): number {
  return a + b;
}
```

Now, let's create the test.

``` ts
import { sum } from '../src';

test('1 + 2 to be equal 3', () => {
  expect(sum(1,2)).toBe(3);
})
```

Some things to note:
- The syntax of the code for the src code and test, is written now in TS.

Using this approach, can help us validating our code functionality and type checking. If we change the test code to the following:
``` ts
import { sum } from '../src';

test('1 + 2 to be equal 3', () => {
  expect(sum(1,'2')).toBe(3); // Argument of type 'string' is not assignable to parameter of type 'number'.
})
```
We will receive a TS error, because the '2' doesn't match with the expected type, that is number.
