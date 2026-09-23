import { getTopics } from "@/lib/topics"
import { TopicsList } from "./topics-list"

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
          <TopicsList topics={topics} />
        )}
      </div>
    </main>
  )
}
