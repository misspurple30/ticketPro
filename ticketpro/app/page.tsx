"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Ticket, Users, TrendingUp, Calendar } from "lucide-react"
import Link from "next/link"
import { events, categories } from "@/lib/data"
import { EventCard } from "@/components/event-card"
import { HeroSection } from "@/components/hero-section"
import { FeaturedEvents } from "@/components/featured-events"
import { CategoryFilters } from "@/components/category-filters"

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Tous")

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.venue.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "Tous" || event.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-lg shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-orange-600 to-green-600 rounded-xl">
                <Ticket className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
                TicketPro CI
              </h1>
            </div>
            <nav className="flex items-center space-x-4">
              <Link href="/admin">
                <Button variant="outline" className="border-orange-200 text-orange-600 hover:bg-orange-50">
                  Administration
                </Button>
              </Link>
              <Link href="/login">
                <Button className="bg-gradient-to-r from-orange-600 to-green-600 hover:from-orange-700 hover:to-green-700">
                  Se connecter
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <HeroSection searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* Featured Events */}
      <FeaturedEvents events={events} />

      {/* Category Filters */}
      <CategoryFilters
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Events Grid */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {selectedCategory === "Tous" ? "Tous les événements" : `Événements ${selectedCategory}`}
            </h2>
            <p className="text-lg text-gray-600">
              {filteredEvents.length} événement{filteredEvents.length > 1 ? "s" : ""} trouvé
              {filteredEvents.length > 1 ? "s" : ""}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🎵</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Aucun événement trouvé</h3>
              <p className="text-gray-600 mb-6">Essayez de modifier vos critères de recherche</p>
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("Tous")
                }}
                className="bg-gradient-to-r from-orange-600 to-green-600 hover:from-orange-700 hover:to-green-700"
              >
                Voir tous les événements
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-orange-900 to-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">TicketPro CI en chiffres</h2>
            <p className="text-xl text-orange-200">La plateforme #1 pour la musique ivoirienne</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 transition-all duration-300 group-hover:bg-white/20 group-hover:scale-105">
                <Calendar className="h-12 w-12 mx-auto mb-4 text-orange-300" />
                <div className="text-4xl font-bold mb-2">200+</div>
                <div className="text-orange-200">Événements par an</div>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 transition-all duration-300 group-hover:bg-white/20 group-hover:scale-105">
                <Users className="h-12 w-12 mx-auto mb-4 text-green-300" />
                <div className="text-4xl font-bold mb-2">100K+</div>
                <div className="text-orange-200">Fans connectés</div>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 transition-all duration-300 group-hover:bg-white/20 group-hover:scale-105">
                <Ticket className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
                <div className="text-4xl font-bold mb-2">500K+</div>
                <div className="text-orange-200">Tickets vendus</div>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 transition-all duration-300 group-hover:bg-white/20 group-hover:scale-105">
                <TrendingUp className="h-12 w-12 mx-auto mb-4 text-red-300" />
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-orange-200">Satisfaction client</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-orange-600 to-green-600 rounded-xl">
                  <Ticket className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold">TicketPro CI</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                La plateforme de référence pour découvrir et réserver vos événements musicaux préférés en Côte d'Ivoire.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-lg">Genres Musicaux</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">Coupé-Décalé</li>
                <li className="hover:text-white transition-colors cursor-pointer">Reggae</li>
                <li className="hover:text-white transition-colors cursor-pointer">Zouglou</li>
                <li className="hover:text-white transition-colors cursor-pointer">Afrobeat</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-lg">Support</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">Centre d'aide</li>
                <li className="hover:text-white transition-colors cursor-pointer">Contact</li>
                <li className="hover:text-white transition-colors cursor-pointer">Remboursements</li>
                <li className="hover:text-white transition-colors cursor-pointer">FAQ</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-lg">Légal</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">Conditions d'utilisation</li>
                <li className="hover:text-white transition-colors cursor-pointer">Politique de confidentialité</li>
                <li className="hover:text-white transition-colors cursor-pointer">Mentions légales</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TicketPro CI. Tous droits réservés. Fait avec ❤️ pour la culture ivoirienne.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
