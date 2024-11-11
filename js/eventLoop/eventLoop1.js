const promise = new Promise((resolve, reject) => {
    console.log(1);
    setTimeout(() => {
      console.log("timerStart");
      resolve("result from Timeout (MACROTASK)");
      console.log("timerEnd");
    }, 0);
    // resolve('result from promise (MICROTASK)');
    console.log(2);
  });
  
  promise.then((res) => {
    console.log(res);
  });
  
  console.log(4);
