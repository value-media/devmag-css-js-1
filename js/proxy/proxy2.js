let neighbor = new Proxy({ visits: {} }, {
    get: (target, prop) => {
      target.visits[prop] ??= 0;
      target.visits[prop]++;
      console.log(`You've asked about ${String(prop)} ${target.visits[prop]} times!`);
      return target[prop];
    }
  });
  
  neighbor.cat;
  neighbor.dog;
  neighbor.cat;