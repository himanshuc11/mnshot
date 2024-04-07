import { z } from "zod";
import prisma from "@/server/api/prisma";
import passwordManager from "@/server/api/hashing";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { TRPCError } from '@trpc/server';
import otpGenerator from "otp-generator"

export const postRouter = createTRPCRouter({

    createUser: publicProcedure
    .input(z.object({
      name: z.string(),
      emailId: z.string(),
      password: z.string()
    }))
    .mutation(async ({ input }) => {

      // Check if emailId Exists, if yes, duplicate user
      const emailId = input.emailId;
      const emailData = await prisma.userEmail.findUnique({
        where: {
         email: emailId
        },
      });

      if(emailData !== null) {
        throw new TRPCError({
          code: "CONFLICT",
          message: 'User already exits',
        });
      }

      // Fresh user insert
      const hashedPassword = passwordManager.hashPassword(input.password);
      const createUserInDB = await prisma.user.create({
        data: {
          name: input.name,
          password: hashedPassword
        }
      });

      const otp = otpGenerator.generate(8, { upperCaseAlphabets: false, specialChars: false });
      await fetch("https://mnshot-git-main-himanshuc11s-projects.vercel.app/api/send", {
        method: "POST",
        body: JSON.stringify({
          emailId,
          otp,
          userName: input.name
        })
      });
      const createEmailId = await prisma.userEmail.create({
        data: {
          email: emailId,
          emailPassword: otp,
          isVerified: false,
          userId: createUserInDB.id
        }
      })

      return { ...createUserInDB, emailId: createEmailId.email };
    }),

});
