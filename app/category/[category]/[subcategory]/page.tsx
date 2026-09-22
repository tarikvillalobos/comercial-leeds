import { notFound } from "next/navigation"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { getCategory, getSubcategory } from "@/lib/catalog"
import { createClient } from "@/lib/supabase/server"

export default async function Page({ params }: PageProps<"/category/[category]/[subcategory]">) {
  const { category: categorySlug, subcategory: subcategorySlug } = await params
  const category = getCategory(categorySlug)
  const subcategory = getSubcategory(categorySlug, subcategorySlug)
  if (!category || !subcategory) notFound()
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const email = user?.email ?? "Usuário"
  const name = user?.user_metadata?.name ?? email.split("@")[0]

  return <SidebarProvider><AppSidebar user={{ name, email, avatar: user?.user_metadata?.avatar_url ?? "" }} /><SidebarInset><header className="flex h-16 items-center gap-2 border-b px-4"><SidebarTrigger />{category.label}: {subcategory.label}</header><main className="flex flex-1 p-4"><div className="flex min-h-56 w-full items-center justify-center rounded-3xl border bg-card p-8 text-2xl font-semibold text-card-foreground">{subcategory.label}</div></main></SidebarInset></SidebarProvider>
}
