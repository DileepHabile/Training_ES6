
function doAsyncOperation(callback) {
    setTimeout(function() {
        callback();
    }, 2000); 
}

function callback(){
    console.log(`The function performed successfully `)
}
doAsyncOperation(callback);