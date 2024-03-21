self.addEventListener('message', function (event) {
    console.log('message received', new Date(), event);
    const { data } = event;
    if (!data) return;
    self.postMessage({ result: "computedResult" });
    // navigator.serviceWorker.controller.postMessage({'hello':'world'});
});  