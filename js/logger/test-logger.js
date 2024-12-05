function calcMeasure() {
    console.log('Memory usage: ', process.memoryUsage());
    const u1 = { id: 1, name: 'Tom' }, u2 = { id: 2, name: 'Jerry' };
    console.table([u1, u2])

    const m1 = performance.mark('calcStart');
    console.time('calc')
    let x;
    for(let i = 0; i < 20_000_000; i++) {
        x = i+100+(3*100);
    }
    const m2 = performance.mark('calcEnd');
    console.timeEnd('calc');
    const m = performance.measure('statystyki', 'calcStart', 'calcEnd');

    console.group('Grupa wiadomości');
    console.log('measure', m)
    console.log('wiadomość #1', m1);
    console.log('wiadomość #2', m2);
    console.groupEnd();

    console.log('completed');
}

calcMeasure();
