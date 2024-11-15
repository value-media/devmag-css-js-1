let kidsBedtime = new Proxy({ time: 9 }, {
    set: (rules, prop, value) => {
      if (prop === 'time' && (value < 7 || value > 10)) {
        console.log("Bedtime must be between 7 PM and 10 PM!");
        return false;
      }
      rules[prop] = value;
      return true;
    }
  });
  
  kidsBedtime.time = 8; // Works fine
  kidsBedtime.time = 11; // Console: Bedtime must be between 7 PM and 10 PM!