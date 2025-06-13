"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Sparkles, Music, Calendar } from "lucide-react"

interface HeroSectionProps {
  searchTerm: string
  setSearchTerm: (term: string) => void
}

export function HeroSection({ searchTerm, setSearchTerm }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-orange-900 via-red-900 to-green-900 text-white py-24 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-500/20 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden">
        <Music className="absolute top-20 left-20 h-8 w-8 text-white/20 animate-bounce" />
        <Calendar className="absolute top-40 right-32 h-6 w-6 text-white/20 animate-bounce delay-300" />
        <Sparkles className="absolute bottom-32 left-32 h-10 w-10 text-white/20 animate-bounce delay-700" />
        <Music className="absolute bottom-20 right-20 h-7 w-7 text-white/20 animate-bounce delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-orange-200 to-green-200 bg-clip-text text-transparent animate-fade-in">
              Découvrez la musique
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 to-green-400 bg-clip-text text-transparent animate-fade-in delay-200">
              ivoirienne
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-400">
            Coupé-Décalé, Reggae, Zouglou, Afrobeat - Réservez vos places pour les plus grands événements musicaux de
            Côte d'Ivoire
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto animate-fade-in delay-600">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-green-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300" />
              <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-2 border border-white/20">
                <div className="flex flex-col md:flex-row gap-3">
                  <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/70" />
                    <Input
                      placeholder="Rechercher un artiste, événement, lieu..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-12 h-14 bg-white/10 border-white/20 text-white placeholder:text-white/70 text-lg rounded-xl focus:bg-white/20 transition-all duration-300"
                    />
                  </div>
                  <Button
                    size="lg"
                    className="h-14 px-8 bg-gradient-to-r from-orange-600 to-green-600 hover:from-orange-700 hover:to-green-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Search className="h-5 w-5 mr-2" />
                    Rechercher
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in delay-800">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">200+</div>
              <div className="text-orange-200">Événements par an</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">100K+</div>
              <div className="text-orange-200">Fans de musique ivoirienne</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-orange-200">Lieux partenaires</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
