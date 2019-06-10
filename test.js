let person1 = {
    name: 'anna',
    surname: 'kowalska',
};

let person2 = {
    name: 'b',
    surname: 'bowalska',
};

let person3 = {
    name: 'cnna',
    surname: 'cowalska',
};

let person4 = {
    name: 'dnna',
    surname: 'dowalska',
};

let person5 = {
    name: 'anna',
    surname: 'kowalska',
};

let arr = [person1, person2, person3, person4, person5];
let idx = arr.findIndex( a => a === person3);
console.log(arr.splice(idx, 1));
setTimeout(()=> console.log('\n\n', arr), 1000);
