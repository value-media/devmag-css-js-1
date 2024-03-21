const result = void function() {
    console.log('tyłek', new Date());
    return 1;
}();

console.log(result);
console.log(result);

//////////////////////////////////////////////////////////////////////////

const dynamicPropertyName = 'color';
const myObject = {
    [dynamicPropertyName]: 'blue'
};

console.log(myObject);

//////////////////////////////////////////////////////////////////////////

const promises = [
   new Promise((resolve) => resolve(1)), 
   new Promise((resolve) => resolve(2)), 
   new Promise((resolve) => resolve(3))
];
const results = (await Promise.allSettled(promises)).map(p => p.value);
console.log('allSettled', results);

/////////////////////////////////////////////////////////////////////////////

const array = [1, 2, 3, 4, 5];
const lastElement = array.slice(-1).at(0);

console.log({lastElement});

/////////////////////////////////////////////////////////////////////////////

function fadeIn(element, duration) {
    let start = null;
    function animate(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        element.style.opacity = Math.min(progress / duration, 1);
        if (progress < duration) {
            requestAnimationFrame(animate);
        }
    }
    requestAnimationFrame(animate);
}

// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             // Trigger your action
//             entry.target.classList.add('animate');
//         }
//     });
// });

// // Start observing a target element
// observer.observe(targetElement);

