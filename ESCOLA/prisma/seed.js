const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const turmas = require("../testes/turmas.json");
const alunos = require("../testes/alunos.json");
const professores = require("../testes/professores.json");
const leciona = require("../testes/leciona.json");

async function main() {
    for (const d of turmas) {
        const destino = await prisma.turma.create({
            data: d
        });
    }

    for (const d of professores) {
        const destino = await prisma.professor.create({
            data: d
        });
    }

    for (const d of alunos) {
        const destino = await prisma.aluno.create({
            data: d
        });
    }

    for (const d of leciona) {
        const destino = await prisma.leciona.create({
            data: d
        });
    }
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
