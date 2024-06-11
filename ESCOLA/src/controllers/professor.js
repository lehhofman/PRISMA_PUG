const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const listar = async (req, res) => {
    const professores = await prisma.professor.findMany({
        include: {
            turmas: {
                include: {
                    turma: true,
                }
            }
        }
    });
    const todasAsTurmas = await prisma.turma.findMany();
    res.render('professor', { professores, todasAsTurmas });
};

const criar = async (req, res) => {
    const { nome, especialidade, turmas } = req.body;
    const turmasArray = Array.isArray(turmas) ? turmas.map(id => ({ idTurma: parseInt(id) })) : [{ idTurma: parseInt(turmas) }];

    const novoProfessor = await prisma.professor.create({
        data: {
            nome,
            especialidade,
            turmas: {
                create: turmasArray
            }
        }
    });
    res.redirect('/professor');
};

const alterar = async (req, res) => {
    const { nome, especialidade, turmas } = req.body;
    const turmasArray = Array.isArray(turmas) ? turmas.map(id => ({ idTurma: parseInt(id) })) : [{ idTurma: parseInt(turmas) }];

    const resultado = await prisma.professor.update({
        where: { id: Number(req.params.id) },
        data: {
            nome,
            especialidade,
            turmas: {
                deleteMany: {},
                create: turmasArray
            }
        }
    });
    res.redirect('/professor');
};

// const excluir = async (req, res) => {
//     try {
//         await prisma.professor.update({
//             where: { id: Number(req.body.id) },
//             data: {
//                 turmas: {
//                     deleteMany: {}
//                 }
//             }
//         });

//         await prisma.professor.delete({
//             where: { id: Number(req.body.id) }
//         });

//         res.redirect('/professor');
//     } catch (error) {
//         console.error(error);
//         res.status(500).send("Erro ao excluir professor");
//     }
// };

const excluir = async (req, res) => {
    try {
        const { id } = req.params;

        await prisma.professor.update({
            where: { id: Number(id) },
            data: {
                turmas: {
                    deleteMany: {}
                }
            }
        });

        await prisma.professor.delete({
            where: { id: Number(id) }
        });

        res.redirect('/professor');
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao excluir professor");
    }
};

module.exports = {
    listar,
    criar,
    alterar,
    excluir
};
