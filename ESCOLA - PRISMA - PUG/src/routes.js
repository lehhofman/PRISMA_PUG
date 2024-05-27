const express = require('express')
const router = express.Router()

const turma = require('./controllers/turma')
const aluno = require('./controllers/aluno')

router.get('/', turma.iniciar)
router.get('/aluno', aluno.iniciar)

module.exports = router