const phones = [
    {name: 'smasung', price: 20000, camera: '12mp', color: 'black'},
    {name: 'xiaomi', price: 18000, camera: '12mp', color: 'black'},
    {name: 'oppo', price: 30000, camera: '12mp', color: 'black'},
    {name: 'vivo', price: 50000, camera: '12mp', color: 'black'},
    {name: 'Iphone', price: 80000, camera: '12mp', color: 'black'},
    {name: 'HTC', price: 27000, camera: '12mp', color: 'black'},
]

function getCheapestPhone(phones){
    let min = phones[0];
    for(const phone of phones){
        if(phone.price < min.price){
            min = phone
        }
    }
    return min;
}

const cheap = getCheapestPhone(phones);
console.log('cheapest phone is:', cheap);