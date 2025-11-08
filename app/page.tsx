"use client"

import { useState } from "react"
import Header from "@/components/header"
import OffersCarousel from "@/components/offers-carousel"
import CategoriesSection from "@/components/categories-section"
import MenuSection from "@/components/menu-section"
import RecommendedSection from "@/components/recommended-section"

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <OffersCarousel />
        <CategoriesSection onSelectCategory={setSelectedCategory} />

        {selectedCategory ? (
          <MenuSection category={selectedCategory} onBack={() => setSelectedCategory(null)} />
        ) : (
          <RecommendedSection />
        )}
      </div>
    </main>
  )
}
