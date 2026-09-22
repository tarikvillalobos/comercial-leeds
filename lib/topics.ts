import { createClient } from "@/lib/supabase/server"

export type Topic = {
  id: string
  name: string
  slug: string
  description: string | null
  icon: string | null
}

export type Subtopic = {
  id: string
  topic_id: string
  name: string
  slug: string
  description: string | null
}

export async function getTopics() {
  const supabase = await createClient()
