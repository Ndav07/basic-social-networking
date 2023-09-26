import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req, res) => {
  if (req.method === 'GET') {
    // Endpoint para obter todos os posts
    const posts = await prisma.post.findMany();
    res.json(posts);
  } else if (req.method === 'POST') {
    // Endpoint para criar um novo post
    const { text, userId } = req.body;
    const post = await prisma.post.create({
      data: {
        text,
        userId,
      },
    });
    res.json(post);
  } else if (req.method === 'PUT') {
    // Endpoint para atualizar um post existente
    const { id, text } = req.body;
    const updatedPost = await prisma.post.update({
      where: { id },
      data: { text },
    });
    res.json(updatedPost);
  } else if (req.method === 'DELETE') {
    // Endpoint para excluir um post
    const { id } = req.body;
    await prisma.post.delete({
      where: { id },
    });
    res.json({ message: 'Post deleted' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};
