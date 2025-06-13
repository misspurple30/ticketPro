"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Calendar, MapPin, Clock, Users, Ticket, ArrowLeft, CreditCard, Star, Check, Gift } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { events } from "@/lib/data"

export default function EventPage() {
  const params = useParams()
  const eventId = Number.parseInt(params.id as string)
  const event = events.find((e) => e.id === eventId) || events[0]

  const [selectedTicketType, setSelectedTicketType] = useState(event.ticketTypes[0])
  const [quantity, setQuantity] = useState(1)
  const [showBookingForm, setShowBookingForm] = useState(false)
  const [bookingData, setBookingData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  })

  const totalPrice = selectedTicketType.price * quantity
  const soldPercentage = ((event.totalTickets - event.availableTickets) / event.totalTickets) * 100

  const handleBooking = () => {
    setShowBookingForm(true)
  }

  const handleConfirmBooking = () => {
    alert("🎉 Réservation confirmée ! Vous recevrez un email de confirmation dans quelques instants.")
    setShowBookingForm(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-lg shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3 group">
              <ArrowLeft className="h-5 w-5 text-gray-600 group-hover:text-purple-600 transition-colors" />
              <div className="p-2 bg-gradient-to-r from-orange-600 to-green-600 rounded-xl">
                <Ticket className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                TicketPro
              </h1>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Event Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Main Event Card */}
            <Card className="overflow-hidden border-0 shadow-xl">
              <div className="relative">
                <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-80 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Badges */}
                <div className="absolute top-6 left-6 flex gap-3">
                  <Badge className="bg-white/90 text-gray-900 font-semibold px-3 py-1">{event.category}</Badge>
                  {event.featured && (
                    <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold px-3 py-1">
                      ⭐ Featured
                    </Badge>
                  )}
                </div>

                {/* Rating */}
                {event.rating && (
                  <div className="absolute top-6 right-6 flex items-center gap-2 bg-white/90 px-3 py-2 rounded-full">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-gray-900">{event.rating}</span>
                    <span className="text-sm text-gray-600">/5</span>
                  </div>
                )}

                {/* Event Title Overlay */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h1 className="text-4xl md:text-5xl font-bold mb-3">{event.title}</h1>
                  <p className="text-2xl text-purple-200 font-semibold">{event.artist}</p>
                </div>
              </div>

              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-4 bg-orange-50 rounded-xl">
                      <div className="p-2 bg-orange-600 rounded-lg">
                        <Calendar className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Date</p>
                        <p className="text-orange-600 font-medium">
                          {new Date(event.date).toLocaleDateString("fr-FR", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-xl">
                      <div className="p-2 bg-green-600 rounded-lg">
                        <Clock className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Heure</p>
                        <p className="text-green-600 font-medium">{event.time}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-xl">
                      <div className="p-2 bg-blue-600 rounded-lg">
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Lieu</p>
                        <p className="text-blue-600 font-medium">{event.venue}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 p-4 bg-orange-50 rounded-xl">
                      <div className="p-2 bg-orange-600 rounded-lg">
                        <Users className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Disponibilité</p>
                        <p className="text-orange-600 font-medium">{event.availableTickets} places restantes</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Availability Progress */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Popularité de l'événement</span>
                    <span className="text-sm text-gray-500">{Math.round(soldPercentage)}% vendu</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-green-400 to-blue-500 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${soldPercentage}%` }}
                    />
                  </div>
                </div>

                {/* Description */}
                <div className="prose max-w-none">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">À propos de cet événement</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{event.description}</p>
                </div>

                {/* Tags */}
                {event.tags && (
                  <div className="mt-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Tags</h4>
                    <div className="flex flex-wrap gap-2">
                      {event.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="px-3 py-1">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Booking Sidebar */}
          <div className="space-y-6">
            <Card className="sticky top-24 border-0 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-orange-600 to-green-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center space-x-2 text-xl">
                  <Ticket className="h-6 w-6" />
                  <span>Réserver vos places</span>
                </CardTitle>
                <CardDescription className="text-orange-100">
                  Sélectionnez votre type de billet et la quantité
                </CardDescription>
              </CardHeader>

              <CardContent className="p-6 space-y-6">
                {/* Ticket Type Selection */}
                <div>
                  <Label htmlFor="ticket-type" className="text-base font-semibold mb-3 block">
                    Type de billet
                  </Label>
                  <div className="space-y-3">
                    {event.ticketTypes.map((type) => (
                      <div
                        key={type.name}
                        className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                          selectedTicketType.name === type.name
                            ? "border-orange-500 bg-orange-50"
                            : "border-gray-200 hover:border-orange-300"
                        }`}
                        onClick={() => setSelectedTicketType(type)}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-gray-900">{type.name}</h4>
                          <span className="text-xl font-bold text-orange-600">{type.price}€</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{type.description}</p>

                        {type.benefits && (
                          <div className="space-y-1">
                            {type.benefits.map((benefit, index) => (
                              <div key={index} className="flex items-center text-sm text-gray-600">
                                <Check className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                                {benefit}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quantity Selection */}
                <div>
                  <Label htmlFor="quantity" className="text-base font-semibold mb-3 block">
                    Nombre de places
                  </Label>
                  <Select value={quantity.toString()} onValueChange={(value) => setQuantity(Number.parseInt(value))}>
                    <SelectTrigger className="h-12">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} place{num > 1 ? "s" : ""}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Separator />

                {/* Price Summary */}
                <div className="bg-gradient-to-r from-orange-50 to-green-50 p-4 rounded-xl space-y-3">
                  <h4 className="font-semibold text-gray-900">Récapitulatif</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>
                        {selectedTicketType.name} x {quantity}
                      </span>
                      <span>{selectedTicketType.price * quantity}€</span>
                    </div>
                    <div className="flex justify-between text-sm text-green-600">
                      <span>Frais de service</span>
                      <span>Gratuit</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span className="text-orange-600">{totalPrice}€</span>
                    </div>
                  </div>
                </div>

                {/* Booking Button */}
                <Button
                  className="w-full h-14 bg-gradient-to-r from-orange-600 to-green-600 hover:from-orange-700 hover:to-green-700 text-white font-semibold text-lg rounded-xl transition-all duration-300 transform hover:scale-105"
                  onClick={handleBooking}
                >
                  <Gift className="h-5 w-5 mr-2" />
                  Réserver maintenant
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Paiement sécurisé • Annulation gratuite jusqu'à 24h avant l'événement
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Booking Form Modal */}
        {showBookingForm && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <Card className="w-full max-w-lg border-0 shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-orange-600 to-green-600 text-white">
                <CardTitle className="flex items-center space-x-2">
                  <CreditCard className="h-5 w-5" />
                  <span>Finaliser la réservation</span>
                </CardTitle>
                <CardDescription className="text-orange-100">
                  Complétez vos informations pour confirmer votre réservation
                </CardDescription>
              </CardHeader>

              <CardContent className="p-6 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Prénom *</Label>
                    <Input
                      id="firstName"
                      value={bookingData.firstName}
                      onChange={(e) => setBookingData({ ...bookingData, firstName: e.target.value })}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Nom *</Label>
                    <Input
                      id="lastName"
                      value={bookingData.lastName}
                      onChange={(e) => setBookingData({ ...bookingData, lastName: e.target.value })}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={bookingData.email}
                    onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                    className="mt-1"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input
                    id="phone"
                    value={bookingData.phone}
                    onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                    className="mt-1"
                    placeholder="+33 6 12 34 56 78"
                  />
                </div>

                <Separator />

                {/* Order Summary */}
                <div className="bg-gradient-to-r from-orange-50 to-green-50 p-4 rounded-xl">
                  <h3 className="font-semibold mb-3 text-gray-900">Récapitulatif de commande</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="font-medium">{event.title}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>
                        {selectedTicketType.name} x {quantity}
                      </span>
                      <span className="font-semibold">{totalPrice}€</span>
                    </div>
                    <div className="flex justify-between text-xs text-gray-600">
                      <span>
                        {new Date(event.date).toLocaleDateString("fr-FR")} à {event.time}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <Button variant="outline" className="flex-1" onClick={() => setShowBookingForm(false)}>
                    Annuler
                  </Button>
                  <Button
                    className="flex-1 bg-gradient-to-r from-orange-600 to-green-600 hover:from-orange-700 hover:to-green-700"
                    onClick={handleConfirmBooking}
                  >
                    Confirmer ({totalPrice}€)
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
