const express = require('express');
const app = express();

app.use(express.static('public'));

const users = [
    {name:'Alaa', id:'https://www.linkedin.com/in/alaasaabni/'},
    {name:'Ibraheem', profile:'https://github.com/ibib12/getProfiles'}
  ]
  
  //route
//   app.get('/get-users',(req, res)=>{
//       users.find(name=>name=={name}? {name}:-1)
//     res.send(users)
//   })



//   app.get('/get-password', (req, res) => {
//     const { name } = req.query;
  
//     console.log(req.query);
  
//     let usr = users.find(user => user.name === name);
//     console.log(usr)
//     res.send({ password: usr.password })
//   })
  
  app.post('/get-profile', (req, res) => {
  
    const { name } = req.body;
    const index = users.findIndex(user => user.name === name);
    if (index > -1) {
        console.log(users[index].profile);
        res.send(users[index].profile);
    }
  
  })


const port = process.env.PORT ||3001
app.listen(port,function(){
    console.log("listen")
})







