import Link from "next/link"

export default function CategoryPage() {
  return (
    <main className="min-h-svh p-6">
      <div className="mx-auto grid w-full max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        <Link
          href="/sub-category"
          className="flex aspect-square items-center justify-center rounded-2xl border bg-card p-4 text-center text-base font-semibold text-card-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:text-lg"
        >
          Category
        </Link>
      </div>
    </main>
  )
}
