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
