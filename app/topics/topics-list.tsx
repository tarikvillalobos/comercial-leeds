"use client"

import Link from "next/link"

import type { Topic } from "@/lib/topics"

export function TopicsList({ topics }: { topics: Topic[] }) {
  return (
    <div>
      {topics.map((topic) => (
        <Link key={topic.id} href={`/topics/${topic.slug}`}>
          {topic.name}
        </Link>
      ))}
    </div>
  )
}
