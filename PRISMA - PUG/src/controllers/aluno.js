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

module.exports = {
    listar,
    excluir
}