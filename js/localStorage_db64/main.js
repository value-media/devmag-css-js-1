// https://levelup.gitconnected.com/css-at-rules-that-every-web-developer-should-know-c63d59209a59

import db64 from './node_modules/db64/db64.js';
let purchase, list;

async function initItems() {
    await db64.create('purchase', ['list'])
    purchase = db64.use('purchase', 'list')    
    list = await purchase.get('today');
    if (!list?.length) {
        await purchase.set('today', ['marchewka', 'pietruszka','seler','jabłko']);
    }

    resetPurchaseList();
    registerAddNewPurchaseButton();
}

async function deleteDatabase() {
  await db64.delete('purchase');
}

function registerAddNewPurchaseButton() {
    const btn = document.querySelector('header button');
    if (!btn) return;
    btn.addEventListener('click', () => saveNewPurchase());
    const inputName = document.querySelector('header input')
    inputName.addEventListener('keypress', function(event) { 
        if (event.key == 'Enter') {
            event.preventDefault();
            btn.click();
        }
    })
}

async function resetPurchaseList() {
    const items = await purchase.getEntries(['today']); 
    const { today } = items;
    list = today;
    const mainElement = document.querySelector('main');
    if (mainElement && items) {
        mainElement.innerHTML = '';
        const ul = document.createElement('ul');
        for(const p of list) {
            const el = document.createElement('li');
            el.classList.add('purchase');
            const txt = document.createTextNode(p);
            el.append(txt);
            const btn = document.createElement('button');
            btn.textContent = 'usuń';
            btn.classList.add('delete-btn');
            btn.addEventListener('click', () => deletePurchase(p));
            el.append(btn);

            ul.append(el);
        }
        mainElement.append(ul);
    }
}

async function deletePurchase(purchaseName) {
    if (!purchase) return;
    list = list ?? []; 
    const i = list.indexOf(purchaseName)
    if (!~i) return;
    list.splice(i, 1);    
    await purchase.setEntries({ today: list });    
    resetPurchaseList();
}

async function saveNewPurchase() {
    const txtInput = document.querySelector('header input');
    const txt = txtInput?.value;
    if (!txt || !purchase) return;
    list = list ?? []; 
    if (list.includes(txt))  return;
    list.push(txt);
    await purchase.setEntries({ today: list });
    resetPurchaseList();
    txtInput.value = '';
}

initItems();

