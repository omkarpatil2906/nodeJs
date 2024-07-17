
// const http = require('http')
// const data = require('./data')

// http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'application\json' })
//     res.write(JSON.stringify(data))
//     res.end()
// }).listen(4500)

// const fs = require('fs');
// const input = process.argv;
// if (input[2] == 'add') {
//     fs.writeFileSync(input[3], input[4])
// } else if(input[2] == 'remove') {
//     fs.unlinkSync(input[3])
// }else{
//     console.log("invalid input");
// }

// const fs = require('fs');

// const path = require('path');

// const dirPath = path.join(__dirname, 'files')
// const filePath = `${dirPath}/apple.txt`


// for(i=0 ; i< 5 ; i++)
// {
//     fs.writeFileSync(dirPath +"/hello.txt"+i+".txt", "a simple txt file")
// }

// fs.readdir(dirPath, ((arr, files) => {
//     files.forEach((item) => {
//         console.log(item);
//     })
// }))

// fs.writeFileSync(filePath, "this is apple")

// fs.readFile(filePath, 'utf-8', (err, item)=>{
//     console.log(item);
// })

// fs.appendFile(filePath,'and file name is apple.txt', (err)=>{
//     if(!err){
//         console.log("File is update");
//     }
// })

// let a = 20
// let b = 0

// // setTimeout(() => {
// //     b = 30
// // }, 2000)

// const waitingData = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(30)
//     }, 2000)
// })

// waitingData.then((data) => {
//     b = data;
//     console.log(a + b);
// })


const express = require('express');
const app = express();

app.get('', (req, res)=>{
    res.send("This is Home Page")
})

app.get('/about', (req, res)=>{
    res.send("This is About Page")
})

app.get('/contact',(req, res)=>{
    res.send("This is Contact Page")
})

app.listen(4200)

