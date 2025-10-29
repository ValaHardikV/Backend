//now to deploy this program we need to create set .env file that contain all our variable and other things

require('dotenv').config(); //to setup env file

const express = require('express')
const app = express() // using express library store all value into app variable

const port = 3000 // this is port number where server is listen

//this is nothing but create server that running on port number

//app.listen(port, () => { //now if we create .env file then we need to use varible that, so use varble of .env file
                                                            //process.env.variableName
app.listen(process.env.PORT, () => { 
    console.log(`Example app listening on port ${port}`)
})  

app.get('/', (req, res) => { // now we send request using get function to the server whci is running in http://localhost:3000/
    //first argument server ip address
    // second we create arrow function that take two argument first request that we send and second response that server send to client
    res.send('Hello World!')
    //using send of response command we send response of the server
})

app.get('/youtube', (req, res) => { // now we send request using get function to the server whci is running in http://localhost:3000/youtube/
    res.send('Hello Hardik? How are You ?')
})

app.get('/Whatsapp/chats' , (req, res) => {
    res.send('<h1>Hii Good Moring</h1>')
})




 