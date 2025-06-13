"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Star, Clock } from "lucide-react"
import Link from "next/link"
import type { Event } from "@/lib/data"

interface EventCardProps {
  event: Event
}

export function EventCard({ event }: EventCardProps) {
  const soldPercentage = ((event.totalTickets - event.availableTickets) / event.totalTickets) * 100

  return (
    <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg">
      <div className="relative overflow-hidden">
        <img
          src={event.image || "/placeholder.svg"}
          alt={event.title}
          className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge className="bg-white/90 text-gray-900 hover:bg-white">{event.category}</Badge>
          {event.featured && (
            <Badge className="bg-gradient-to-r from-orange-600 to-green-600 text-white">⭐ À la une</Badge>
          )}
        </div>

        {/* Rating */}
        {event.rating && (
          <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 px-2 py-1 rounded-full">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            <span className="text-xs font-medium text-gray-900">{event.rating}</span>
          </div>
        )}

        {/* Price */}
        <div className="absolute bottom-3 right-3">
          <div className="bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full">
            <span className="text-lg font-bold text-orange-600">À partir de {event.price.toLocaleString()} FCFA</span>
          </div>
        </div>
      </div>

      <CardHeader className="pb-2">
        <CardTitle className="text-lg line-clamp-1 group-hover:text-orange-600 transition-colors">
          {event.title}
        </CardTitle>
        <CardDescription className="text-orange-600 font-medium text-base">{event.artist}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-3">
        {/* Event Details */}
        <div className="space-y-2">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="h-4 w-4 mr-2 text-orange-500" />
            <span className="font-medium">
              {new Date(event.date).toLocaleDateString("fr-FR", {
                weekday: "short",
                day: "numeric",
                month: "short",
              })}
            </span>
            <Clock className="h-4 w-4 ml-4 mr-2 text-orange-500" />
            <span>{event.time}</span>
          </div>

          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="h-4 w-4 mr-2 text-orange-500" />
            <span className="line-clamp-1">{event.venue}</span>
          </div>

          <div className="flex items-center text-sm text-gray-600">
            <Users className="h-4 w-4 mr-2 text-orange-500" />
            <span>{event.availableTickets.toLocaleString()} places disponibles</span>
          </div>
        </div>

        {/* Availability Bar */}
        <div className="space-y-1">
          <div className="flex justify-between text-xs text-gray-500">
            <span>Disponibilité</span>
            <span>{Math.round(100 - soldPercentage)}% restant</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-green-400 to-orange-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${100 - soldPercentage}%` }}
            />
          </div>
        </div>

        {/* Tags */}
        {event.tags && (
          <div className="flex flex-wrap gap-1">
            {event.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {/* Action Button */}
        <Link href={`/event/${event.id}`} className="block">
          <Button className="w-full bg-gradient-to-r from-orange-600 to-green-600 hover:from-orange-700 hover:to-green-700 text-white font-semibold py-2 rounded-lg transition-all duration-300 transform hover:scale-105">
            Réserver maintenant
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
