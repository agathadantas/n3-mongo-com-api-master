const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ContatoSchema = new Schema ({
    _id: {
        type: mongoose.Schema.Types.ObjectId, //tipos de dados
        auto: true, //é auto incrementavel
        required: true //é obrigatório 
    },
    nome: {
        type: String,
        required: true
    },
    celular: {
        type: String,
        required: true
    }
})

const ContatosCollection = mongoose.model('contato', ContatoSchema)

module.exports = ContatosCollection 