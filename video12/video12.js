console.log('Hello world from HTml')
let arrTop4 = ['Mancity', 'Liverpool', 'MU', 'Chelsea'];
for(let i = 0; i < arrTop4.length; i++){
console.log('Top: ', i + 1, arrTop4[i])
}

let i = 0

let flag = false;
 
while(!flag)
{
    console.log('check value i:', i)
    i++;
    if(i === 10) flag = true;
}