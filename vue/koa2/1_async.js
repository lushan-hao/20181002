// async function timeout(){
//     return '1'
// }
// timeout();
// console.log(timeout()); async返回的是Promise对象  
// timeout().then(result =>{
//     console.log(result);
// })
// console.log('2');


function timeout(){
    return new Promise(resolve =>{
        setTimeout(() => {
            console.log('1');
            resolve();
        }, 2000);
    })
}
async function fn() {
    await timeout();
    console.log('2');
}
fn();

