import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { createId } from "@paralleldrive/cuid2";

const UserValidator = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(8),
});

export const usersRouter = createTRPCRouter({
  create: protectedProcedure
    .input(UserValidator)
    .mutation(async ({ ctx, input }) => {
      const { name, email, password } = input;

      const user = await ctx.prisma.user.create({
        data: {
          id: createId(),
          name,
          email,
          password,
        },
      });

      return user;
    }),

  getById: protectedProcedure
    .input(z.object({ id: z.string().cuid2() }))
    .mutation(async ({ ctx, input: { id } }) => {
      const user = await ctx.prisma.user.findUnique({
        where: {
          id,
        },
      });

      return user;
    }),

  update: protectedProcedure
    .input(
      z
        .object({
          id: z.string().cuid2(),
        })
        .merge(UserValidator.partial()),
    )
    .mutation(async ({ ctx, input: { id, ...data } }) => {
      const user = await ctx.prisma.user.update({
        where: {
          id,
        },
        data,
      });

      return user;
    }),

  delete: protectedProcedure
    .input(
      z.object({
        id: z.string().cuid2(),
      }),
    )
    .mutation(async ({ ctx, input: { id } }) => {
      await ctx.prisma.user.delete({
        where: {
          id,
        },
      });
    }),
});
