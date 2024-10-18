const returnBorrowedMoney = new Promise(function (resolve, reject) {

    setTimeout(function() {

        const hasMoneyToReturn = Math.random() < 0.5;

        if(hasMoneyToReturn) {
            resolve('Money Returned! 😃😃')
        } else {
            reject('No Money to Return 😰😰')
        }
    }, 2000)

})

returnBorrowedMoney.then(function(result) {
    console.log(result);
}).catch(function(error) {
    console.log(error);
}).finally(function() {
    console.log("No matter what we will always remain friends! 🤩🤩")
})


console.log("This is my normal life going on!")