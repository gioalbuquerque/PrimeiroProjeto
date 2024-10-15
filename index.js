// console.log("Hello, Node !")
const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())

let filmes = [
    {
        titulo:"Divertidamente",
        sinopse: "Com a mudança para uma nova cidade, as emoções de Riley, que tem apenas 11 anos de idade, ficam extremamente agitadas. Uma confusão na sala de controle do seu cérebro deixa a Alegria e a Tristeza de fora, afetando a vida de Riley radicalmente."
    },
    {
        titulo1:"Free-Guy",
        sinopse: "Um caixa de banco preso a uma entediante rotina tem sua vida virada de cabeça para baixo quando descobre que é um personagem em um jogo interativo. Agora ele precisa aceitar sua realidade e lidar com o fato de que é o único que pode salvar o mundo."
    },
    {
        titulo: "O lar das crianças peculiares",
        sinopse:"Seguindo uma pista deixada por seu avô, um jovem de 16 anos descobre uma ilha misteriosa onde vivem crianças com poderes especiais, mas também inimigos ocultos perigosos."
    }
]

//get: (url, ponto de acesso) assim => (http://localhost:3000/oi) 
app.get('/oi', (req, res) => {
    res.send('oi')
})

//get: (url, ponto de acesso) assim => (http://localhost:3000/filmes) 
app.get('/filmes', (req, res) => {
    res.json (filmes)
})

app.post('/filmes', (req, res) => {
    //pegar dados enviados na requisição (requisição.vou no corpo.pego o titulo ou sinopse)
    const titulo = req.body.titulo
    const sinopse = req.body.sinopse
    //montar o json do novo filme
    const novo_filme = {titulo: titulo, sinopse: sinopse}
    filmes.push(novo_filme)
    res.json(filmes)
})


app.listen (3000, () => console.log ("server up and running"))
