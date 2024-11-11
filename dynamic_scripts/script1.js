
const nameAction1 = 'Akcja #1';
registerAction({
    name: nameAction1,
    fn: () => printMessage(`Wykonano: ${nameAction1}`)
});
