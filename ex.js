// let inner = document.getElementById("inner")

// inner.innerHTML += "<button onclick='buy()'>Buy!</button>"

// function buy () {
//     let thanks = inner.innerHTML += "<p>Thank you for buying</p>"

//     console.log(thanks);
// }

//Template strings
//shorturl.at/myp57

const recipient = "James"

const sender = "Per"

//Refractor the email string to use template strings
const email = `
Hey
${recipient}!
How is it going? Cheers 
${sender}
`

console.log(email);