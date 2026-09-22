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
  const { data, error } = await supabase
    .from("topics")
    .select("id, name, slug, description, icon")
    .eq("active", true)
    .order("sort_order")
    .order("name")

  if (error) throw new Error(`Erro ao carregar tópicos: ${error.message}`)
  return data as Topic[]
}

export async function getTopic(slug: string) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from("topics")
    .select("id, name, slug, description, icon")
    .eq("slug", slug)
    .eq("active", true)
    .maybeSingle()

  if (error) throw new Error(`Erro ao carregar tópico: ${error.message}`)
  return data as Topic | null
}

export async function getSubtopics(topicId: string) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from("subtopics")
    .select("id, topic_id, name, slug, description")
    .eq("topic_id", topicId)
    .eq("active", true)
    .order("sort_order")
    .order("name")

  if (error) throw new Error(`Erro ao carregar subtópicos: ${error.message}`)
  return data as Subtopic[]
}

export async function getSubtopic(topicId: string, slug: string) {
  const supabase = await createClient()
