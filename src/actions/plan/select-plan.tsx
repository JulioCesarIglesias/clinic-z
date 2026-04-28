"use server";

import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { db } from "@/db";
import { usersTable } from "@/db/schema";
import { auth } from "@/lib/auth";

export async function selectFreePlan() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user?.id) {
    throw new Error("Usuário não autenticado");
  }

  await db
    .update(usersTable)
    .set({
      plan: "free",
    })
    .where(eq(usersTable.id, session.user.id));

  redirect("/dashboard");
}
