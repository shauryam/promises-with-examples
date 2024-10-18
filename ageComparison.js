
const elonAgePromise = axios.get("https://api.agify.io/?name=Elon&country_id=US")
const modiAgePromise = axios.get("https://api.agify.io/?name=Modi&country_id=IN")

Promise.all([elonAgePromise, modiAgePromise]).then(function([elonAgeResponse, modiAgeResponse]) {
    if(elonAgeResponse.data.age < modiAgeResponse.data.age) {
        console.log("Elon is younger")
    } else if(elonAgeResponse.data.age > modiAgeResponse.data.age) {
        console.log("Modi is younger")
    } else {
        console.log("Both are same age! 😃")
    }
}).catch(function(err) {
    console.log(err)
    console.log("Atleast one API failed! Can't say who is younger 😞")
})

