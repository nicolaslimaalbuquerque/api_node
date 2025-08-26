import express from 'express'
import pkg from '@prisma/client'
    const{ PrismaClient } = pkg 
    const prisma = new PrismaClient()
// objeto da biblioteca
const app = express()
//indica q vai usar o json
app.use(express.json())

// rotas
app.get('/cadastro', async (req, res) => {
    
    const lista_usuarios = await prisma.usuario.findMany()

    res.status(200).json(usuarios)
}) //rota get, coloca 'como pega ela', funcao call back (requisicao, reposta)

app.put('/cadastro/:id', async (req, res) => {

    //console.log(req.params.id)
    await prisma.usuario.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            nome: req.body.nome,
            idade: req.body.idade
        }
    })

    res.status(201).json({ "message": "Cliente Atualizado" })
})

app.delete('/cadastro/:id', async (req, res) => {

    //console.log(req.params.id)
    await prisma.usuario.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({ "message": "Cliente Removido" })
})


app.post('/cadastro',async (req, res) => {

   await prisma.usuario.create({
        data:{
            email: req.body.email ,
            nome: req.body.nome ,
            idade: req.body.idade
        }
    })

    res.status(201).json(req.body)
})

// porta local do servidor
app.listen(3000, () => {
    console.log('servidor rodando')
}) //fica de olho na porta, pode trabalhar com 2 parametros porta, call back
