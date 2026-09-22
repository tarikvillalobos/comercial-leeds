import Link from "next/link"

import { getTopics } from "@/lib/topics"

export default async function TopicsPage() {
  const topics = await getTopics()

  return (
    <main className="min-h-svh p-6">
      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold">Tópicos</h1>
          <p className="text-sm text-muted-foreground">
            Selecione um tópico para visualizar seus subtópicos.
          </p>
        </div>
        {topics.length === 0 ? (
          <div className="rounded-2xl border border-dashed p-8 text-center text-muted-foreground">
            Nenhum tópico ativo encontrado.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic) => (
              <Link
                key={topic.id}
                href={`/topics/${topic.slug}`}
                className="flex min-h-32 flex-col justify-center rounded-2xl border bg-card p-5 shadow-sm transition-colors hover:bg-accent"
              >
                <span className="font-semibold text-card-foreground">{topic.name}</span>
                {topic.description ? (
                  <span className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                    {topic.description}
                  </span>
                ) : null}
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
