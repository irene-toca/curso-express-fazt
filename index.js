const express = require("express");

const app = express();

app.all('/info',(req,res)=>{
  res.send('server info')
})

app.get('/search', (req,res )=> {
  console.log(req.query)
  if(req.query.q ==='javascript books') {
    res.send('lista de libros de javascript')
  } else{
    res.send('pagina normal')
  }

})

app.get('/hello/:username', (req, res)=>{
  res.send(`Hello ${req.params.username.toUpperCase()}`)
})
app.get('/add/:x/:y',(req,res)=> {
  
  const {x,y}= req.params
  
  res.send(`Result: ${parseInt(x) + parseInt(y)}`)
})

app.get('/user/:username/photo',(req,res)=>{
  if (req.params.username === "fazt"){
    return res.sendFile('imagen.jpg',{
      root: __dirname
    })
      
  }
  res.send('el usuario no tiene acceso')

})
app.get('/name/:nombre/age/:age',(req,res)=>{
  console.log(req.params)
  res.send(`El usuario ${req.params.nombre} tiene ${req.params.age} años`)
})

app.listen(3000);
console.log(`Server on port ${3000}`);
