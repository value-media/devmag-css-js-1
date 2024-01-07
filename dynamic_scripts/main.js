
window.onload = () => {
    printMessage('Załadowano stronę.');
    
    loadScriptFiles([ 'script1.js', 'script2.js' ]);
}

function loadScriptFiles(files, doneFunction) {
    const head = document.getElementsByTagName('head')[0];

    Promise
        .all(files.map(filePath => new Promise(resolve => {
            const script = document.createElement('script');
            script.type = 'application/javascript';
            script.async = true;
            script.src = filePath;
            script.addEventListener('load', (e) => resolve(e), false);
            head.append(script)
        })))
        .then(() => doneFunction && doneFunction())

}