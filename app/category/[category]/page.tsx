import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { getCategory, getSubcategories } from "@/lib/catalog"

export default async function Page({ params }: PageProps<"/category/[category]">) {
  const { category: slug } = await params
  const category = getCategory(slug)
  if (!category) notFound()
  return <main className="min-h-svh p-6"><div className="mx-auto w-full max-w-5xl"><form className="mb-6 flex gap-2"><Input type="search" placeholder="Search sub-categories" aria-label="Search sub-categories" /><Button type="submit">Search</Button></form><div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">{getSubcategories(slug).map((item) => <Link key={item.slug} href={`/category/${slug}/${item.slug}`} className="flex h-28 items-center justify-center rounded-2xl border bg-card p-4 text-center text-base font-semibold text-card-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">{item.label}</Link>)}</div></div></main>
}
