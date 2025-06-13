"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Star, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Event } from "@/lib/data"

interface FeaturedEventsProps {
  events: Event[]
}

export function FeaturedEvents({ events }: FeaturedEventsProps) {
  const featuredEvents = events.filter((event) => event.featured).slice(0, 3)

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Événements à la une</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez notre sélection d'événements exceptionnels de la scène musicale ivoirienne
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredEvents.map((event, index) => (
            <Card
              key={event.id}
              className={`group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 ${
                index === 1 ? "lg:scale-105" : ""
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Featured Badge */}
                <Badge className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-green-500 text-white font-semibold">
                  ⭐ À la une
                </Badge>

                {/* Rating */}
                {event.rating && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 px-3 py-1 rounded-full">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold text-gray-900">{event.rating}</span>
                  </div>
                )}

                {/* Event Info Overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold mb-2 line-clamp-1">{event.title}</h3>
                  <p className="text-orange-200 font-medium mb-3">{event.artist}</p>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center text-sm">
                        <Calendar className="h-4 w-4 mr-2" />
                        {new Date(event.date).toLocaleDateString("fr-FR", {
                          day: "numeric",
                          month: "short",
                        })}
                      </div>
                      <div className="flex items-center text-sm">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span className="line-clamp-1">{event.venue.split(",")[0]}</span>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-2xl font-bold">{event.price.toLocaleString()} F</div>
                      <div className="text-xs opacity-80">à partir de</div>
                    </div>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>

                <Link href={`/event/${event.id}`}>
                  <Button className="w-full bg-gradient-to-r from-orange-600 to-green-600 hover:from-orange-700 hover:to-green-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 group">
                    Découvrir l'événement
                    <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
