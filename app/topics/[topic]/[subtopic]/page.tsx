import Link from "next/link"
import { notFound } from "next/navigation"

import { getSubtopic, getTopic } from "@/lib/topics"

export default async function SubtopicPage({
  params,
}: PageProps<"/topics/[topic]/[subtopic]">) {
  const { topic: topicSlug, subtopic: subtopicSlug } = await params
  const topic = await getTopic(topicSlug)
  if (!topic) notFound()

  const subtopic = await getSubtopic(topic.id, subtopicSlug)
  if (!subtopic) notFound()

  return (
    <main className="min-h-svh p-6">
      <div className="mx-auto w-full max-w-5xl">
        <Link
          href={`/topics/${topic.slug}`}
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          ← {topic.name}
        </Link>
        <div className="mt-4 rounded-2xl border bg-card p-8">
          <p className="text-sm font-medium text-muted-foreground">Subtópico</p>
          <h1 className="mt-1 text-2xl font-semibold">{subtopic.name}</h1>
          {subtopic.description ? (
            <p className="mt-3 text-muted-foreground">{subtopic.description}</p>
          ) : null}
        </div>
      </div>
    </main>
  )
}
