import { existsSync, readdirSync, readFileSync } from "node:fs"
import { join } from "node:path"

export type CatalogItem = { label: string; slug: string }

const catalogPath = join(process.cwd(), "data", "catalog")

function readItem(path: string): CatalogItem {
  return JSON.parse(readFileSync(path, "utf8")) as CatalogItem
}

export function getCategories(): CatalogItem[] {
  if (!existsSync(catalogPath)) return []
  return readdirSync(catalogPath)
    .map((directory) => join(catalogPath, directory, "00-category.json"))
    .filter(existsSync)
    .map(readItem)
    .sort((a, b) => a.label.localeCompare(b.label, "pt-BR"))
}

export function getCategory(slug: string) {
  return getCategories().find((category) => category.slug === slug)
}

export function getSubcategories(categorySlug: string): CatalogItem[] {
  const categoryPath = join(catalogPath, categorySlug)
  if (!existsSync(categoryPath)) return []
  return readdirSync(categoryPath)
    .filter((file) => file !== "00-category.json" && file.endsWith(".json"))
    .map((file) => readItem(join(categoryPath, file)))
    .sort((a, b) => a.label.localeCompare(b.label, "pt-BR"))
}

export function getSubcategory(categorySlug: string, slug: string) {
  return getSubcategories(categorySlug).find((subcategory) => subcategory.slug === slug)
}
