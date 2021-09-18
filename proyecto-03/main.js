const urlPlaceholder = "https://jsonplaceholder.typicode.com";
const postUrl = (params) => fetch(`${urlPlaceholder}${params}`);

postUrl('/posts')
.then((res) => res.json())
.then((data) => {
    return console.log(data)
})
.catch((error) => {
    console.error("Ha Ocurrido Un Error")
})


const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(true) {
            resolve("Promesa Resuelta")
        } else {
            reject("Error En La Promesa")
        }
    }, 3000)
})

promise
.then((res) => {
    console.log(res)
})
.catch((err) => {
    console.error(err)
})
