import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export class EstudanteController {
  async store(req: Request, res: Response) {
    const { nome, curso } = req.body;

    if (Array.isArray(nome)) {
      for (const item of nome) {
        await prisma.estudante.create({
          data: {
            nome: item,
            curso,
            images: {
              create: {
                path: ''
              },
            },
          },
          select: {
            nome: true,
            curso: true,
            images: true,
          },
        });
      }

      return res.json({estudates:nome,curso});
    } 
    
    await prisma.estudante.create({
      data: {
        nome: nome,
        curso,
        images: {
          create: {
            path: ''
          },
        },
      },
      select: {
        nome: true,
        curso: true,
        images: true,
      },
    });
    
    return res.json({estudates:nome,curso});
  }
}
