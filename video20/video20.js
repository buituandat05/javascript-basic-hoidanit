console.log('Hello world from HTML')
let sum = (a, b, callback) => {
    let sum = a + b;
    //setTimeout(() => {
      //  callback(sum);
    //}, 5000)
    let i = 0;
    let timer = setInterval(() => {
        callback(sum);
        i++;
        if( i === 5){
            clearInterval(timer)
        }
    }, 1000);
    console.log('>>> i: ', i)
   
   
}

let printSum = (message) => {
    console.log('>>> check sum: 6 + 9 = ', message)
}

sum(6, 9, printSum)