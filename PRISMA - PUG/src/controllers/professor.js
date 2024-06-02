const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const listar = async (req, res) => {
    const professores = await prisma.professor.findMany({
        select: {
            id: true,
            nome: true,
            especialidade: true,
            turmas: {
                select: {
                    turma: true,
                }
            }
        }
    });
    res.render('professor', { professores: professores });
}

const alterar = async (req, res) => {
    const resultado = await prisma.professor.update({
        data: req.body,
        where: {
            id: Number(req.params.id)
        }
    });
    res.redirect('/professor');
}

module.exports = {
    listar,
    alterar
}