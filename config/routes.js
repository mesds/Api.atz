const express = require('express')
const routes = express.Router()

let db = [
    {  '1' : {  Nome : ' KING KONG ' ,  Categoria : ' Circo ' ,  DataHora : ' 26/12 - 16:00 ' ,  Organizador : ' Real Circo ' ,  LotesDeIngresso : ' Lateral, Central, Vip '  }  } ,
    {  '2' : {  Nome : ' HARRY POTTER DE VOLTA A HOGWARTS ' ,  Categoria : ' Cinema ' ,  DataHora : ' 01/01 - 18:00 ' ,  Organizador : ' Cinepólis ' ,  LotesDeIngressos : ' Comum, Meia ' }  } ,
    {  '3' : {  Nome : ' NO FUNDO DO MAR ' ,  Categoria : ' Musical ' ,  DataHora : ' 28/12 - 20:00 ' ,  Organizador : ' Teatro Luiz Mendonça ' ,  LotesDeIngresso : ' Camarote, Central ' }  } ,
    {  '4' : {  Nome : ' SEGREDOS DE DUMBLODORE ' ,  Categoria : ' Cinema ' ,  DataHora : ' 08/02 - 19:40 ' ,  Organizador : ' Cinema kinoplex ' ,  LotesDeIngresso : ' Comum, Meia ' }  }
]

routes.get('/', (req, res) => {
    return res.json(db)
})

routes.post('/add', (req, res) => {
    const body = req.body

    if (!body)
        return res.status(400).end()

    db.push(body)
    return res.json(body)    
})

routes.delete('/:id', (req, res) => {
    const id = req.params.id

    let newDB = db.filter(item => {
        if (!item[id])
            return item
    })

    db = newDB

    return res.send(newDB)
})


module.exports = routes 