// const p = (ms) => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log('sec')
//             resolve(100)
//         }, ms)

//     })

// }
// const asF = async () => {


//     const a = await p(4000)
//     return a
// }


// console.log(1)
// asF().then(console.log)
// console.log(2)




const delayAndGetRandom = (ms) => {
    return new Promise(resolve => setTimeout(
        () => {
            const val = Math.trunc(Math.random() * 100);
            console.log(ms)
            resolve(val);
        }, ms
    ));
};

async function fn() {
    const a = await 9;
    console.log(1)
    const b = await delayAndGetRandom(1000);
    console.log(2)
    const c = await 5;
    await delayAndGetRandom(1000);

    return a + b * c;
}

// Execute fn
console.log(1111)
fn().then(console.log);
console.log(2222)