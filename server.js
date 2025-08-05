import express from 'express'
const app = express()

app.use 

const usuarios =[]

// Rotas
app.get('/cadastro', (req,res)=>{
    res.send('DEU CERTO COM O GET')
})

app.post('/cadastro', (req,res)=>{
    console.log(req.body);
    res.send('DEU CERTO COM O POST')
})


//Porta local servidor
app.listen(3000,()=>{
    console.log('SERVER TA RODANDO!')
})
