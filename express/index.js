//importamos expreress

const express = require('express')


//creamos el server
const server = express()

server.get('/', (request,response) =>{
    response.send('Hola koders, we are in expess!')
})


//ponemos a escuchar al servidor
server.listen(8000, () =>{
    console.log('Servidor ejecutandose');
})