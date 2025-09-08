"use server";

import { db } from "@/app/lib/db";
import { users } from "../db/schema";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
const FormSchema = z.object({
  id: z.string(),
  name: z.string(),
  age: z.coerce.number(),
  email: z.string(),
});

const CreateUser = FormSchema.omit({ id: true });

export async function createUser(formData: FormData) {
  const { name, age, email } = CreateUser.parse({
    name: formData.get("name"),
    age: formData.get("age"),
    email: formData.get("email"),
  });

  try {
    await db.insert(users).values({ name, age, email });
  } catch (error) {
    console.error("Failed to insert user into database");
  }
  revalidatePath("/");
  redirect("/");
}

export async function getUsers() {
  return await db.select().from(users);
}
