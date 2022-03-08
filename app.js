// Creating my server
const express = require('express');
const PORT = 3000

const {
    request
} = require('https');
let app = express();

app.get('/', (req, res) => {
    res.send("Finally I am ALIVE!!!");
});

app.listen(PORT, () => {
    console.log(`App started on port ${PORT}`);
});

let async = () => {
    setTimeout(() => {
        console.log("Page has been requested");
    }, 9000);
}


// let async = () => {
//     setTimeout(() => {
//         log("I am coming out later although I have been called before the next one ")
//     }, 2000);
// }

// console.log("Hello world");

// let log = ((msg) => {
//     console.log("[Log] :", msg);
// });

// log("Hello I am alive");
// log("I am DIO");

// let adder = ((first, second) => {
//     let sum = first + second;
// });

// log(`The sum is ${adder(7,4)}`);
// async ();
// log("This is going to come out before the previous one");