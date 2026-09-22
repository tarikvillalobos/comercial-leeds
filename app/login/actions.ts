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

  if (!email.trim() || !password) {
    return { error: "Preencha o e-mail e a senha." }
  }

  if (
    !process.env.NEXT_PUBLIC_SUPABASE_URL ||
    !process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
  ) {
    return {
      error:
        "O Supabase ainda não foi configurado. Adicione as variáveis do .env.example ao .env.local.",
    }
  }

  try {
    const supabase = await createClient()
    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
