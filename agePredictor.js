const url = "https://api.agify.io/?name=Elon&country_id=US"

axios.get(url).then(function(response) {
    console.log(response.data.age)
}).catch(function(err) {
    console.log("Unable to get your age", err)
}).finally(function() {
    console.log("Looks like you don't age! 😃")
})



