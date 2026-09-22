import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { getCategories, getSubcategories } from "@/lib/catalog"

export default function CategoryPage() {
  const categories = getCategories()
