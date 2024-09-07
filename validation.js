function multiply (num1,num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'please provide a number'
    }
    const mult = num1 * num2;
    return mult;
}

const result = multiply (5, 'seven');
// console.log(result);

function fullName (first, last){
    if(typeof first !== 'string' ){
        return 'first name shoulb be a string'
    }
    else if(typeof last !== 'string'){
        return 'last name should be a string'
    }
    const full = first + ' ' + last;
    return full;
}

const full = fullName (0, 'sarker')
// console.log(full);

function getPrice(product){
    if(typeof product !== 'object'){
        return 'please provide a object'
    }
    const price = product.price;
    return price;
}

const price  = getPrice({name: 'danda', price: 35, color: 'blue'})
// const price = getPrice(5);
// console.log(price);


function getSecond (numbers){
    if(Array.isArray(numbers) === false){
        return 'pleae provide an array'
    }
    const second = numbers[1];
    return second;
}

const second = getSecond([1,35,37]);
console.log(second);

