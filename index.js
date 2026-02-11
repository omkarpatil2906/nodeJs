
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


// const express = require('express');
// const app = express();

// app.get('', (req, res)=>{
//     console.log("data send by browser", req.query.name);
//     // res.send("This is Home Page")
//     res.send("Welcome"+ req.query.name)
// })

// app.get('/about', (req, res)=>{
//     res.send("This is About Page")
// })

// app.get('/contact',(req, res)=>{
//     res.send("This is Contact Page")
// })

// app.listen(4200)







// RENDER HTML and JSON


// const express = require('express');
// const app = express();

// app.get('', (req, res) => {
//     res.send(`
//         <h1>This is Home Page</h1>
//         <a href="/about">About page</a> `)
// })

// app.get('/about', (req, res) => {
//     res.send(` <input type="text" placeholder="User Name" value= ${req.query.name}/>
//         <input type="text" placeholder="User Email"/>
//         <input type="text" placeholder="User Password"/>
//         <button>Click Me</button>
//          <a href="/">Home page</a>
//          <a href="/contact">Contact page</a>

//         `)
// })

// app.get('/contact', (req, res) => {
//     res.send([
//         {
//             name: "Rahul",
//             email: "rahul@gmail.com",
//         },
//         {
//             name: "Vishal",
//             email: "vishal@gmail.com",
//         },
//     ])
// })











//Make HTML PAGES


// const express = require('express');
// const path = require('path');

// const app = express();
// const publicPath = path.join(__dirname, 'public')

// app.use(express.static(publicPath))













//Remove URL Extension

// const express = require('express');
// const path = require('path');

// const app = express();
// const publicPath = path.join(__dirname, 'public')


// app.get("", (req, res)=>{
//     res.sendFile(`${publicPath}/index.html`)
// })

// app.get("/about", (req, res)=>{
//     res.sendFile(`${publicPath}/about.html`)
// })

// app.get("/help", (req, res)=>{
//     res.sendFile(`${publicPath}/help.html`)
// })

// app.get("*", (req, res)=>{
//     res.sendFile(`${publicPath}/pageNotFound.html`)
// })






// template Engine

// install ejs npm

// const express = require('express');
// const path = require('path');

// const app = express();
// const publicPath = path.join(__dirname, 'public');

// app.set('view engine', 'ejs');

// app.get("", (req, res)=>{
//     const user ={
//         name: 'John Doe',
//         age: 30
//     }
//     res.render("profile", {user})
// })












//Dynamic Pages


// const express = require('express');
// const path = require('path');

// const app = express();
// const publicPath = path.join(__dirname, 'public');

// app.set('view engine', 'ejs');

// app.get("", (req, res)=>{
//     const user ={
//         name: 'John Doe',
//         age: 30,
//         email:'john@getMaxListeners.com',
//         skills:['php', 'Java']

//     }
//     res.render("profile", {user})
// })

// app.get('/login', (_, res)=>{
//     res.render('login')
// })









//Middleware

// const express = require('express')
// const app = express();

// const reqFilter = (req, res, next) => {

//     if (!req.query.age) {
//         res.send("Please provide age")
//     } else  if (req.query.age < 18) {
//         res.send("You can not access the page")
//     }
//     else {
//         next()
//     }
// }

// app.use(reqFilter)

// app.get('', (req, res) => {
//     res.send('Welcome to home page')
// })

// app.get('/user', (req, res) => {
//     res.send('Welcome to User page')
// })











// Route Level Middleware

// const express = require('express')
// const app = express();
// const reqFilter = require('./middleware')
// const reqFilter = (req, res, next) => {

//     if (!req.query.age) {
//         res.send("Please provide age")
//     } else  if (req.query.age < 18) {
//         res.send("You can not access the page")
//     }
//     else {
//         next()
//     }
// }

// const route = express.Router();


// route.use(reqFilter)

// app.get('', (req, res) => {
//     res.send('Welcome to home page')
// })

// app.get('/user', reqFilter, (req, res) => {
//     res.send('Welcome to User page')
// })

// route.get('/about', (req, res) => {
//     res.send('Welcome to About page')
// })
// app.use('/', route)






// connect mogodb with node js

// const {MongoClient}= require('mongodb');
// const url ='mongodb://127.0.0.1:27017'
// const database = 'e-comm'
// const clinet = new MongoClient(url)


// async function getData()
// {
//     let result = await clinet.connect();
//     let db = result.db(database)
//     let collection = db.collection('products')
//     let response = await collection.find({}).toArray()
//     console.log(response);
// }

// getData()




// Read data from mongodb 

const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017'
const database = 'e-comm'
const clinet = new MongoClient(url)


async function dbconnect() {
    let result = await clinet.connect();
    let db = result.db(database)
    return db.collection('products')
    // let response = await collection.find({}).toArray()
    // console.log(response);
}

// dbconnect().then((res) => {
//     res.find({}).toArray().then((data) => {
//         console.log(data);
//     })
// })

const main = async () => {
   let data = await dbconnect

}

