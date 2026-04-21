import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { customSession } from "better-auth/plugins";
import { eq } from "drizzle-orm";

import { db } from "@/db";
import * as schema from "@/db/schema";
import { usersTable, usersToClinicsTable } from "@/db/schema";

export const auth = betterAuth({
  // Configura o banco de dados
  database: drizzleAdapter(db, {
    provider: "pg", // or "sqlite" or "mysql"
    usePlural: true,
    schema,
  }),
  // Configura os provedores de autenticação social
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  // Adiciona informações extras ao usuário
  plugins: [
    customSession(async ({ user, session }) => {
      const [userData, clinics] = await Promise.all([
        db.query.usersTable.findFirst({
          where: eq(usersTable.id, user.id),
        }),
        db.query.usersToClinicsTable.findMany({
          where: eq(usersToClinicsTable.userId, user.id),
          with: {
            clinic: true,
            user: true,
          },
        }),
      ]);
      // const user = await db.query.usersTable.findFirst({
      //   where: eq(usersTable.id, user.id),
      // });
      // Consulta para buscar a clínica do usuário
      // const clinics = await db.query.usersToClinicsTable.findMany({
      //   where: eq(usersToClinicsTable.userId, user.id),
      //   with: {
      //     clinic: true, // Inclui os dados da clínica
      //     user: true, // Inclui os dados do usuário
      //   },
      // });

      // TODO: Ao adaptar para o usuário ter múltiplas clínicas, deve-se mudar esse código
      const clinic = clinics?.[0];

      return {
        user: {
          ...user,
          plan: userData?.plan,
          clinic: clinic?.clinicId // Se existir, adiciona a clínica ao usuário
            ? {
                id: clinic?.clinicId,
                name: clinic?.clinic?.name,
              }
            : undefined,
        },
        session,
      };
    }),
  ],
  // Configura o modelo de usuário
  user: {
    modelName: "usersTable",
    additionalFields: {
      stripeCustomerId: {
        type: "string",
        fieldName: "stripeCustomerId",
        required: false,
      },
      stripeSubscriptionId: {
        type: "string",
        fieldName: "stripeSubscriptionId",
        required: false,
      },
      plan: {
        type: "string",
        fieldName: "plan",
        required: false,
      },
    },
  },
  session: {
    modelName: "sessionsTable",
  },
  account: {
    modelName: "accountsTable",
  },
  verification: {
    modelName: "verificationsTable",
  },
  emailAndPassword: {
    enabled: true,
  },
});
