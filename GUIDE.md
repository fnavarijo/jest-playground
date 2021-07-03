# Guide

## Install Jest
**npm**
```
npm i -D jest
```
**yarn**
```
yarn add --dev jest
```

## Basic test
Let's create a simple js file that executes a sum `sum.js`. For this example, will be placed on `src` folder.

``` js
function sum(a, b){
  return a+b;
}

module.exports = sum;
```

Now, let's create the test file that will ensure our functonality is the one expected. We will call this `sum.test.js` and will be placed on the `test` folder.

``` js
const sum = require('../src');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1,2)).toBe(3);
});
```

Now, let's run our tests cases. Because jest is not installed globablly, we need to add a `script` in our `package.json` file that will execute jest.
``` json
// package.json
{
  ...
  "scripts": {
    "test": "jest",
  },
  ...
}
```

Now, we can run our tests.

```
npm run test
```

If everything goes well, we will see on our console a message of success. 

🎉 Congratulations! You run your first test with jest, with the minimum configuration.

### Reference
If you want to learn more, please refer to this get started guide:
https://jestjs.io/docs/getting-started