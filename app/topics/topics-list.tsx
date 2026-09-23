"use client"

import { useState } from "react"
import Link from "next/link"

import { Input } from "@/components/ui/input"
import type { Topic } from "@/lib/topics"

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("pt-BR")
}

export function TopicsList({ topics }: { topics: Topic[] }) {
  const [search, setSearch] = useState("")
  const term = normalize(search.trim())
  const filteredTopics = term
    ? topics.filter((topic) =>
        normalize(`${topic.name} ${topic.description ?? ""}`).includes(term)
      )
    : topics

  return (
    <>
      <div className="mb-6 max-w-md">
        <Input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Buscar tópicos..."
          aria-label="Buscar tópicos"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredTopics.map((topic) => (
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
    </>
  )
}
