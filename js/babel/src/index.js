// node .\node_modules\@babel\cli\bin\babel.js .\src\index.js --out-file index.dist.js

function logging(target, descriptor, name) {
    console.log('logging', {target, name, descriptor});

    const originalFn = target.descriptor.value;
  
    if (typeof originalFn === "function") {
      target.descriptor.value = function (...args) {
        console.log("[INFO] start calculating...");
  
        const result = originalFn.apply(null, args);
  
        console.log(`[INFO] result is ${result}`);
        console.log("[INFO] finish calculating");
  
        return result;
      };
    }
  }
  
  class MathOperations {
    @logging
    sum(a, b) {
      return a + b;
    }
  }
  
  const mathOperations = new MathOperations();
  mathOperations.sum(3, 4);