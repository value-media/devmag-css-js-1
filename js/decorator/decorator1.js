require("@babel/core").transformSync("code", {
  plugins: [
    ["@babel/plugin-proposal-decorators", { version: "2023-11" }],
  ]
});

function myParameterDecorator(target, name, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args) {
      args.forEach((arg, index) => {
        const argType = typeof arg;
        if (argType !== 'number' && argType !== 'string') {
          throw new Error(`Argument ${index} is of type ${argType}, but should be a string or a number`);
        }
      });
      return originalMethod.apply(this, args);
    }
    return descriptor;
  }
  
  class MyClass {
    @myParameterDecorator
    myMethod(name, age) {
      console.log(`Hello, my name is ${name} and I am ${age} years old`);
    }
  }
  const myObject = new MyClass();
  myObject.myMethod("Alice", 30); // print：Hello, my name is Alice and I am 30 years old
//   myObject.myMethod("Bob", ["thirty"]); // throw error：Argument 1 is of t