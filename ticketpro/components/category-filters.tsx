"use client"

import { Button } from "@/components/ui/button"
import { Music, Guitar, Mic, Zap, Heart, Palette } from "lucide-react"

interface CategoryFiltersProps {
  categories: string[]
  selectedCategory: string
  setSelectedCategory: (category: string) => void
}

const categoryIcons: Record<string, any> = {
  Tous: Palette,
  "Coupé-Décalé": Zap,
  Reggae: Guitar,
  Zouglou: Music,
  Afrobeat: Mic,
  Gospel: Heart,
  Traditionnel: Music,
}

export function CategoryFilters({ categories, selectedCategory, setSelectedCategory }: CategoryFiltersProps) {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Explorez par genre musical</h3>
          <p className="text-gray-600">Découvrez la richesse de la musique ivoirienne</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => {
            const Icon = categoryIcons[category] || Music
            const isSelected = selectedCategory === category

            return (
              <Button
                key={category}
                variant={isSelected ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`
                  rounded-full px-6 py-3 font-medium transition-all duration-300 transform hover:scale-105
                  ${
                    isSelected
                      ? "bg-gradient-to-r from-orange-600 to-green-600 text-white shadow-lg"
                      : "border-2 border-gray-200 hover:border-orange-300 hover:bg-orange-50"
                  }
                `}
              >
                <Icon className="h-4 w-4 mr-2" />
                {category}
              </Button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
