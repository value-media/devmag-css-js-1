function chattyCar() {
    let car = {};
    return new Proxy({}, {
      get: (target, prop, receiver) => {
        return (value) => {
          if (String(prop) == 'show') return car;
          console.log(`Ooh, adding ${value} as the ${String(prop)}!`);
          car[prop] = value;
          return receiver;
        };
      }
    });
  }
  
  const resp = chattyCar().Color("red").wheels(4).engine("V8").show();
  console.log(resp);