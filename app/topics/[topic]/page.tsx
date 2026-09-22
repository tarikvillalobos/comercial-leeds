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
          {topic.description ? (
            <p className="mt-1 text-sm text-muted-foreground">{topic.description}</p>
          ) : null}
        </div>
        {subtopics.length === 0 ? (
          <div className="rounded-2xl border border-dashed p-8 text-center text-muted-foreground">
            Nenhum subtópico ativo encontrado.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {subtopics.map((subtopic) => (
              <Link
                key={subtopic.id}
                href={`/topics/${topic.slug}/${subtopic.slug}`}
                className="flex min-h-28 flex-col justify-center rounded-2xl border bg-card p-5 shadow-sm transition-colors hover:bg-accent"
              >
                <span className="font-semibold text-card-foreground">{subtopic.name}</span>
                {subtopic.description ? (
                  <span className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                    {subtopic.description}
                  </span>
                ) : null}
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
