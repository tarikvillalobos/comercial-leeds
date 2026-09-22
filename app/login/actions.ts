"use server"

import { redirect } from "next/navigation"

import { createClient } from "@/lib/supabase/server"

export type LoginState = {
  error: string | null
}

export async function login(
  _previousState: LoginState,
  formData: FormData
): Promise<LoginState> {
  const email = formData.get("email")
  const password = formData.get("password")

  if (typeof email !== "string" || typeof password !== "string") {
    return { error: "Preencha o e-mail e a senha." }
  }
