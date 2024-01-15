
let store, list;

async function initItems() {
    store = localforage.createInstance({
        name: 'zakupy',
        storeName: 'lista'
    });

    list = await store.getItem('today');
    if (!list?.length) {
        await store.setItem('today', ['marchewka', 'pietruszka','seler','jabłko']);
    }

    resetPurchaseList();
    registerAddNewPurchaseButton();
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
    list = await store.getItem('today'); 
    const mainElement = document.querySelector('main');
    if (mainElement && !!list) {
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
    if (!store) return;
    list = list ?? []; 
    const i = list.indexOf(purchaseName)
    if (!~i) return;
    list.splice(i, 1);    
    await store.setItem('today', list);    
    resetPurchaseList();
}

async function deleteToday() {
    await store.removeItem('today');
}

async function clearDatabaseZakupy() {
    store.clear();
}

async function saveNewPurchase() {
    const txtInput = document.querySelector('header input');
    const txt = txtInput?.value;
    if (!txt || !store) return;
    list = list ?? []; 
    if (list.includes(txt))  return;
    list.push(txt);
    await store.setItem('today', list);
    resetPurchaseList(); 
    txtInput.value = '';
}




initItems();
