const express = require('express')
const router = express.Router()

const turma = require('./controllers/turma')
const aluno = require('./controllers/aluno')
const professor = require('./controllers/professor')

router.get('/', turma.listar)
router.post('/turma', turma.criar)
router.put('/turma/:id', turma.atualizar)
router.delete('/turma/:id', turma.excluir)

router.get('/aluno', aluno.listar)
router.post('/aluno', aluno.criar)
router.delete('/aluno', aluno.excluir)
router.put('/aluno/:ra', aluno.alterar)

router.get('/professor', professor.listar)
router.post('/professor', professor.criar)
router.delete('/professor/:id', professor.excluir)
router.put('/professor/:id', professor.alterar)

module.exports = router