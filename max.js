const purna = 56;
const shoyon = 95;

if(purna > shoyon){
    console.log('purna will get the strawberry')
}
else{
    console.log('shoyon will eat the strawberry')
}

// inside the function

function getMax(num1, num2){
    if(num1 > num2){
        return num1;
    }
    else{
        return num2;
    }
}

const max1 = getMax(96, 86);
const max2 = getMax(56, 76);
const ultimateMax = getMax(max1, max2);
console.log('max of two is:', ultimateMax);

