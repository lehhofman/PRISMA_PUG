const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const listar = async (req, res) => {
    const alunos = await prisma.aluno.findMany({});
    res.render('aluno', { alunos: alunos });
}

const excluir = async (req, res) => {
    const resultado = await prisma.aluno.delete({
        where: {
            ra: req.body.ra
        }
    });
    res.redirect('/aluno');
}

const criar = async (req, res) => {
    const novoAluno = await prisma.aluno.create({
        data: {
            nome: req.body.nome,
            ra: req.body.ra,
            nascimento: new Date(req.body.nascimento),
            idTurma: parseInt(req.body.idTurma)
        }
    });
    res.redirect('/aluno');
}

const alterar = async (req, res) => {
    const alunoAlterado = await prisma.aluno.update({
        where: {
            ra: req.params.ra
        },
        data: {
            nome: req.body.nome,
            nascimento: new Date(req.body.nascimento),
            idTurma: parseInt(req.body.idTurma)
        }
    });
    res.redirect('/aluno');
}

module.exports = {
    listar,
    excluir,
    criar,
    alterar
}