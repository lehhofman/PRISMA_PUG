const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const listar = async (req, res) => {
    try {
        const turmas = await prisma.turma.findMany({
            select: {
                id: true,
                nome: true,
                abreviacao: true,
                alunos: {
                    select: {
                        ra: true,
                        nome: true,
                        nascimento: true
                    }
                },
                professores: {
                    select: {
                        professor: {
                            select: {
                                nome: true, 
                                especialidade: true 
                            }
                        }
                    }
                },
            }
        });
        console.log(JSON.stringify(turmas, null, 2));
        res.render('index', { turmas });
    } catch (error) {
        console.error("Erro ao listar turmas:", error);
        res.status(500).send("Erro ao listar turmas");
    }
}

const criar = async (req, res) => {
    try {
        const turma = await prisma.turma.create({
            data: req.body
        });
        res.redirect('/');
    } catch (error) {
        console.error("Erro ao criar turma:", error);
        res.status(500).send("Erro ao criar turma");
    }
}

const atualizar = async (req, res) => {
    const { id } = req.params;
    const { nome, abreviacao } = req.body;
    try {
        const turmaAtualizada = await prisma.turma.update({
            where: { id: parseInt(id) },
            data: { nome, abreviacao }
        });
        res.redirect('/');
    } catch (error) {
        console.error("Erro ao atualizar turma:", error);
        res.status(500).send("Erro ao atualizar turma");
    }
}

const excluir = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.turma.delete({
            where: { id: parseInt(id) }
        });
        res.redirect('/');
    } catch (error) {
        console.error("Erro ao excluir turma:", error);
        res.status(500).send("Erro ao excluir turma");
    }
}

module.exports = {
    listar,
    criar,
    atualizar,
    excluir
}
