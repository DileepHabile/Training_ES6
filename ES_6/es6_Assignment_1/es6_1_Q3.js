function delay(delayTime) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Resolved after ${delayTime} milliseconds`);
        }, delayTime);
    });
}

delay(2000)
.then((message)=>{
    console.log(message)
})
.catch((error)=>{
    console.log(error);
})