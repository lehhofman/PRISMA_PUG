const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const iniciar = async (req, res) => {
    const turmas = await prisma.turma.findMany({});
    res.render('index', { turmas: turmas });
}

module.exports = {
    iniciar
}