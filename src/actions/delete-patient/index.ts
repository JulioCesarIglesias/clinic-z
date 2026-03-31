"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

import { db } from "@/db";
import { patientsTable } from "@/db/schema";
import { actionClient } from "@/lib/next-safe-action";

import { deletePatientSchema } from "./schema";

export const deletePatient = actionClient
  .schema(deletePatientSchema)
  .action(async ({ parsedInput }) => {
    await db
      .delete(patientsTable)
      .where(eq(patientsTable.id, parsedInput.id));
    revalidatePath("/patients");
  });
