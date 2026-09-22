import Link from "next/link"
import { notFound } from "next/navigation"

import { getSubtopics, getTopic } from "@/lib/topics"

export default async function TopicPage({ params }: PageProps<"/topics/[topic]">) {
  const { topic: slug } = await params
  const topic = await getTopic(slug)
  if (!topic) notFound()

  const subtopics = await getSubtopics(topic.id)

  return (
    <main className="min-h-svh p-6">
      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-6">
          <Link href="/topics" className="text-sm text-muted-foreground hover:text-foreground">
            ← Tópicos
          </Link>
          <h1 className="mt-2 text-2xl font-semibold">{topic.name}</h1>
