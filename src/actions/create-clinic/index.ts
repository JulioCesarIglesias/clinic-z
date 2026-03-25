"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { db } from "@/db";
import { clinicsTable, usersToClinicsTable } from "@/db/schema";
import { auth } from "@/lib/auth";

export const createClinic = async (name: string) => {
  // Verifica se o usuario esta autenticado
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // Caso não, lança o erro
  if (!session?.user) {
    throw new Error("Unauthorized");
  }

  // Cria a clínica
  const [clinic] = await db.insert(clinicsTable).values({ name }).returning(); // Retorna a clínica criada

  // Cria o relacionamento entre o usuário e a clínica
  await db.insert(usersToClinicsTable).values({
    userId: session.user.id,
    clinicId: clinic.id,
  });

  // Redireciona para o dashboard
  redirect("/dashboard");
};
