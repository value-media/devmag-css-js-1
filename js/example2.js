let Thing;

{
  let counter = 0;
  const privateScope = new WeakMap();
  const mySymbol = Symbol('secret');

  Thing = function () {
    this.someProperty = "foo";

    privateScope.set(this, {
      hidden: ++counter,
    });

    privateScope.set(mySymbol, ['secret','value'])
  };

  Thing.prototype.showPublic = function () {
    return this.someProperty;
  };

  Thing.prototype.incrementCounter = function () {
    privateScope.get(this).hidden++;
  };

  Thing.prototype.showPrivate = function () {
    return privateScope.get(this).hidden;
  };

  Thing.prototype.showSecret = function () {
    return privateScope.get(mySymbol).with(0, 'my');
  };
}


const thing = new Thing();

console.log(thing);

console.log('someProperty: ', thing.showPublic());

thing.incrementCounter();
thing.incrementCounter();
console.log('private counter:', thing.showPrivate());
console.log('secret:', thing.showSecret());

