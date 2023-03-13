const express = require ('express')
const morgan = require ('morgan')

const app =express()

const products = []

app.use(morgan('dev'))

app.get ('/products', (req, res) =>{
    res.json( products)
})

app.post ('/products', (req, res) =>{
    res.send('creando products')
})

app.put ('/products', (req, res) =>{
    res.send('actualizando products')
})

app.delete ('/products', (req, res) =>{
    res.send('eliminando products')
})

app.get ('/products/:id', (req, res) =>{
    res.send('obteniendo un producto')
})

app.listen(3000)
console.log('server on port ${3000}')

