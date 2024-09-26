function makeStubborn(obj) {
    return new Proxy(obj, {
      set: () => {
        console.log("Nice try, but I'm not changing!");
        return true;
      }
    });
  }
  
  let boulder = makeStubborn({ weight: "very heavy" });
  boulder.weight = "light as a feather"; // Console: Nice try, but I'm not changing!
  console.log(boulder.weight); // Output: very heavy