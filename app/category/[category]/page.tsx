import Link from "next/link"
import { notFound } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { getCategory, getSubcategories } from "@/lib/catalog"

export default async function Page({ params }: PageProps<"/category/[category]">) {
  const { category: slug } = await params
  const category = getCategory(slug)
  if (!category) notFound()
