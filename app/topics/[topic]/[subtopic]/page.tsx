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
