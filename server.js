const express = require('express');
const app = express();

app.use(express.static('public'));

const users = [
    { name: 'Kilani', password: '222222222' },
    { name: 'Yara', password: '333333333' },
    { name: 'Ihab', password: '444444' }
  ]
  
  //routes
  app.get('/get-users', (req, res) => {
  
    res.send(users)
  })

const images = [
    {score:1, src:'https://static.toiimg.com/photo/72975551.cms'}
  ];
  
//   app.post('/addImage', (req, res) => {

//     const { src } = req.body;
//     const index = images.findIndex(image => image.src === src);
//     if (index === -1) {
  
//         images.push({ score:0, src })
//     }
  
//     res.send({ ok: true })
//   })

//   app.get('/get-users', (req, res) => {

//     res.send(images)
//   })

const port = process.env.PORT ||3001
app.listen(port,function(){
    console.log("listen")
})










