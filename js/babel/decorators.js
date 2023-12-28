function myParameterDecorator(target,name,descriptor) {
    console.log({
        target, name, descriptor, args, context: this
    });
    return descriptor.value.apply(this, args)
}


class MyClass {
    @myParameterDecorator
    myMethod(name, age) {
      console.log(`Hello, my name is ${name} and I am ${age} years old`);
    }
  }
  const myObject = new MyClass();
  myObject.myMethod("Alice", 30); // print：Hello, my name is Alice and I am 30 years old
  myObject.myMethod("Bob", ["thirty"]);
  