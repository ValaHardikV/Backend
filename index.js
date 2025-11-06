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

//send json object in rsponse

const githubdata = {
  "login": "hiteshchoudhary",
  "id": 11613311,
  
  "node_id": "MDQ6VXNlcjExNjEzMzEx",
  "avatar_url": "https://avatars.githubusercontent.com/u/11613311?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/hiteshchoudhary",
  "html_url": "https://github.com/hiteshchoudhary",
  "followers_url": "https://api.github.com/users/hiteshchoudhary/followers",
  "following_url": "https://api.github.com/users/hiteshchoudhary/following{/other_user}",
  "gists_url": "https://api.github.com/users/hiteshchoudhary/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/hiteshchoudhary/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/hiteshchoudhary/subscriptions",
  "organizations_url": "https://api.github.com/users/hiteshchoudhary/orgs",
  "repos_url": "https://api.github.com/users/hiteshchoudhary/repos",
  "events_url": "https://api.github.com/users/hiteshchoudhary/events{/privacy}",
  "received_events_url": "https://api.github.com/users/hiteshchoudhary/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Hitesh Choudhary",
  "company": null,
  "blog": "https://hitesh.ai",
  "location": "India",



  
  "email": null,
  "hireable": null,
  "bio": "I make coding videos on youtube and for courses. My youtube channel explains my work more. Check that out",
  "twitter_username": "hiteshdotcom",
  "public_repos": 114,
  "public_gists": 5,
  "followers": 51166,
  "following": 0,
  "created_at": "2015-03-23T13:03:25Z",
  "updated_at": "2025-10-11T17:17:56Z"
}
app.get('/github',(req , res) => {
    res.json(githubdata)
})




 