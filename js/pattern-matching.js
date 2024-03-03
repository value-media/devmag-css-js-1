
function getSeason(month) {
    switch(true) {
        case month >= 3 && month <= 5: return 'Spring';
        case month >= 6 && month <= 8: return 'Summer';
        case month >= 9 && month <=11: return 'Autumn';
        default: return 'Winter';
    }
}
console.log(`Season for March is ${getSeason(3)}`);

function checkUser(user) {
    const { name, age, isAdmin } = user;    
    switch(true) {
        case name && age && isAdmin : return { name, age, isAdmin };
        default: return 'incorrect user';
    }
    
}

console.log(checkUser({ name: 'John', age: 30, isAdmin: true }));

