console.log('JSが読み込まれました！');
const sayGoodMorning =()=> {
    console.log('おはようございます！');
    console.log('昨日はよく眠れたか？');
    console.log('今日も頑張りましょう');
}
const sayGoodEvening =()=> {
    console.log('こんばんは');
    console.log('今日も1日お疲れ');
}
sayGoodMorning();
sayGoodEvening();
//11行目と１２行目が効かない理由をあとで調べる



const calculateTotal = (price) => {
    console.log(price + 500 +'円');
}
calculateTotal(1200);

const addTwoArguments = (price,shippingFee) => {
    console.log(price+shippingFee+'円');
}
addTwoArguments(1200,500);
const double = (num) => {
    return num *2;
}
console.log(double(30));

//const userName ='侍太郎';
const useVariable = () => {
    const userName='侍太郎'
    console.log(userName);
}
useVariable();
console.log(userName);