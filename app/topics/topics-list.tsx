"use client"

import Link from "next/link"

import type { Topic } from "@/lib/topics"

export function TopicsList({ topics }: { topics: Topic[] }) {
  return (
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
  )
}
