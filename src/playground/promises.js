const promise = new Promise((resolve, reject) => {
    
    setTimeout(() => {
        resolve('This is my resolved data');

        //reject('it was rejecteed');
    }, 2000);
    
});

// We can choose to return nothing. OR
// we can return some value, in our case 'some data', the next then callback will have access to that value.
// Or we can return a promise where the next then callback is that promises success case
promise.then((data) => {
    console.log(data);

    //return 'some data';

    return new Promise((resolve, reject) => {
    
        setTimeout(() => {
            resolve('This is my other promise');
        }, 2000);
    });
}).then((str) => {
    console.log('does this run?', str);
}).catch((error) => {
    console.log('error', error);
});