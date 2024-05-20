const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
  const data = req.body;
  console.log(data);
  data.valor = parseFloat(data.valor);
  // Convertendo o telefone para uma string
  data.telefone = data.telefone.toString();

  try {
      const pontoTuristico = await prisma.pontosTuristico.create({
          data
      });
      res.status(201).json(pontoTuristico).end();
  } catch (error) {
      console.error("Erro ao criar ponto turístico:", error);
      res.status(500).send("Erro ao criar ponto turístico").end();
  }
}

const read = async (req, res) => {
    try {
        const pontosTuristicos = await prisma.pontosTuristico.findMany();
        res.status(200).json(pontosTuristicos).end();
    } catch (error) {
        console.error("Erro ao ler pontos turísticos:", error);
        res.status(500).send("Erro ao ler pontos turísticos").end();
    }
}


const del = async (req, res) => {
    const id = Number(req.params.id);
    try {
        await prisma.pontosTuristico.delete({
            where: {
                id: id 
            }
        });
        res.status(200).json({ message: 'Ponto turístico deletado com sucesso.' }).end();
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar ponto turístico.' }).end();
    }
}

const update = async (req, res) => {
    const id = Number(req.params.id);
    const data = req.body;

    try {
        const pontoTuristico = await prisma.pontosTuristico.update({
            where: { id },
            data,
        });
        res.status(200).json(pontoTuristico).end();
    } catch (error) {
        console.error('Erro ao atualizar ponto turístico:', error);
        res.status(500).json({ error: 'Erro ao atualizar ponto turístico.' }).end();
    }
};

module.exports = {
    create,
    read,
    del,
    update,
};
