import Link from "next/link"

export default function CategoryPage() {
  return (
    <main className="flex min-h-svh items-center justify-center p-6">
      <Link
        href="/sub-category"
        className="flex min-h-56 w-full max-w-xl items-center justify-center rounded-3xl border bg-card p-8 text-2xl font-semibold text-card-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        Category
      </Link>
    </main>
  )
}
