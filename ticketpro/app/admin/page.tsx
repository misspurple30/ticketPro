&&&"use client"

import { DialogTrigger } from "@/components/ui/dialog"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Calendar, Plus, Edit, Trash2, Ticket, ArrowLeft, BarChart3, DollarSign } from "lucide-react"
import Link from "next/link"
import { events as initialEvents, bookings, categories } from "@/lib/data"

export default function AdminPage() {
  const [events, setEvents] = useState(initialEvents)
  const [isAddEventOpen, setIsAddEventOpen] = useState(false)
  const [newEvent, setNewEvent] = useState({
    title: "",
    artist: "",
    date: "",
    time: "",
    venue: "",
    price: "",
    category: "",
    totalTickets: "",
    description: "",
  })

  const handleAddEvent = () => {
    const event = {
      id: events.length + 1,
      ...newEvent,
      price: Number.parseInt(newEvent.price),
      totalTickets: Number.parseInt(newEvent.totalTickets),
      availableTickets: Number.parseInt(newEvent.totalTickets),
      image: "/placeholder.svg?height=400&width=600",
      ticketTypes: [
        { name: "Standard", price: Number.parseInt(newEvent.price), description: "Accès général" },
        { name: "VIP", price: Math.round(Number.parseInt(newEvent.price) * 1.5), description: "Accès VIP" },
      ],
    }
    setEvents([...events, event])
    setNewEvent({
      title: "",
      artist: "",
      date: "",
      time: "",
      venue: "",
      price: "",
      category: "",
      totalTickets: "",
      description: "",
    })
    setIsAddEventOpen(false)
  }

  const totalRevenue = bookings.reduce((sum, booking) => sum + booking.total, 0)
  const totalTicketsSold = bookings.reduce((sum, booking) => sum + booking.quantity, 0)
  const averageTicketPrice = totalRevenue / totalTicketsSold || 0

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
                TicketPro Admin
              </h1>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Événements actifs</CardTitle>
              <div className="p-2 bg-orange-100 rounded-lg">
                <Calendar className="h-5 w-5 text-orange-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900">{events.length}</div>
              <p className="text-xs text-green-600 mt-1">+2 ce mois</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Tickets vendus</CardTitle>
              <div className="p-2 bg-green-100 rounded-lg">
                <Ticket className="h-5 w-5 text-green-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900">{totalTicketsSold}</div>
              <p className="text-xs text-green-600 mt-1">+15% vs mois dernier</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Revenus totaux</CardTitle>
              <div className="p-2 bg-blue-100 rounded-lg">
                <DollarSign className="h-5 w-5 text-blue-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900">{totalRevenue.toLocaleString()}€</div>
              <p className="text-xs text-green-600 mt-1">+22% vs mois dernier</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Prix moyen</CardTitle>
              <div className="p-2 bg-yellow-100 rounded-lg">
                <BarChart3 className="h-5 w-5 text-yellow-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900">{Math.round(averageTicketPrice)}€</div>
              <p className="text-xs text-blue-600 mt-1">Par ticket</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="events" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 bg-white border border-gray-200 rounded-xl p-1">
            <TabsTrigger
              value="events"
              className="rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-600 data-[state=active]:to-green-600 data-[state=active]:text-white"
            >
              Événements
            </TabsTrigger>
            <TabsTrigger
              value="bookings"
              className="rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-600 data-[state=active]:to-green-600 data-[state=active]:text-white"
            >
              Réservations
            </TabsTrigger>
          </TabsList>

          <TabsContent value="events" className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Gestion des événements</h2>
                <p className="text-gray-600 mt-1">Créez et gérez vos événements</p>
              </div>
              <Dialog open={isAddEventOpen} onOpenChange={setIsAddEventOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-gradient-to-r from-orange-600 to-green-600 hover:from-orange-700 hover:to-green-700 shadow-lg">
                    <Plus className="h-4 w-4 mr-2" />
                    Ajouter un événement
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">Créer un nouvel événement</DialogTitle>
                    <DialogDescription>Remplissez les informations pour créer un nouvel événement</DialogDescription>
                  </DialogHeader>
                  <div className="grid grid-cols-2 gap-4 py-4">
                    <div>
                      <Label htmlFor="title">Titre de l'événement *</Label>
                      <Input
                        id="title"
                        value={newEvent.title}
                        onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="artist">Artiste/Organisateur *</Label>
                      <Input
                        id="artist"
                        value={newEvent.artist}
                        onChange={(e) => setNewEvent({ ...newEvent, artist: e.target.value })}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="date">Date *</Label>
                      <Input
                        id="date"
                        type="date"
                        value={newEvent.date}
                        onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="time">Heure *</Label>
                      <Input
                        id="time"
                        type="time"
                        value={newEvent.time}
                        onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
                        className="mt-1"
                      />
                    </div>
                    <div className="col-span-2">
                      <Label htmlFor="venue">Lieu *</Label>
                      <Input
                        id="venue"
                        value={newEvent.venue}
                        onChange={(e) => setNewEvent({ ...newEvent, venue: e.target.value })}
                        className="mt-1"
                        placeholder="Nom du lieu, Ville"
                      />
                    </div>
                    <div>
                      <Label htmlFor="category">Catégorie *</Label>
                      <Select
                        value={newEvent.category}
                        onValueChange={(value) => setNewEvent({ ...newEvent, category: value })}
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Sélectionner une catégorie" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories
                            .filter((cat) => cat !== "Tous")
                            .map((category) => (
                              <SelectItem key={category} value={category}>
                                {category}
                              </SelectItem>
                            ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="price">Prix de base (€) *</Label>
                      <Input
                        id="price"
                        type="number"
                        value={newEvent.price}
                        onChange={(e) => setNewEvent({ ...newEvent, price: e.target.value })}
                        className="mt-1"
                        placeholder="50"
                      />
                    </div>
                    <div className="col-span-2">
                      <Label htmlFor="totalTickets">Nombre total de places *</Label>
                      <Input
                        id="totalTickets"
                        type="number"
                        value={newEvent.totalTickets}
                        onChange={(e) => setNewEvent({ ...newEvent, totalTickets: e.target.value })}
                        className="mt-1"
                        placeholder="500"
                      />
                    </div>
                    <div className="col-span-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        value={newEvent.description}
                        onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                        className="mt-1"
                        placeholder="Décrivez votre événement..."
                        rows={3}
                      />
                    </div>
                  </div>
                  <div className="flex justify-end space-x-2">
                    <Button variant="outline" onClick={() => setIsAddEventOpen(false)}>
                      Annuler
                    </Button>
                    <Button
                      onClick={handleAddEvent}
                      className="bg-gradient-to-r from-orange-600 to-green-600 hover:from-orange-700 hover:to-green-700"
                    >
                      Créer l'événement
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead className="font-semibold">Événement</TableHead>
                      <TableHead className="font-semibold">Date</TableHead>
                      <TableHead className="font-semibold">Lieu</TableHead>
                      <TableHead className="font-semibold">Prix</TableHead>
                      <TableHead className="font-semibold">Places</TableHead>
                      <TableHead className="font-semibold">Statut</TableHead>
                      <TableHead className="font-semibold">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {events.map((event) => (
                      <TableRow key={event.id} className="hover:bg-gray-50 transition-colors">
                        <TableCell>
                          <div className="flex items-center space-x-3">
                            <img
                              src={event.image || "/placeholder.svg"}
                              alt={event.title}
                              className="w-12 h-12 rounded-lg object-cover"
                            />
                            <div>
                              <p className="font-medium text-gray-900">{event.title}</p>
                              <p className="text-sm text-gray-500">{event.artist}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium">{new Date(event.date).toLocaleDateString("fr-FR")}</p>
                            <p className="text-sm text-gray-500">{event.time}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <p className="text-sm">{event.venue}</p>
                        </TableCell>
                        <TableCell>
                          <span className="font-semibold text-orange-600">{event.price}€</span>
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium">
                              {event.availableTickets} / {event.totalTickets}
                            </p>
                            <div className="w-20 bg-gray-200 rounded-full h-1.5 mt-1">
                              <div
                                className="bg-gradient-to-r from-green-400 to-orange-500 h-1.5 rounded-full"
                                style={{
                                  width: `${((event.totalTickets - event.availableTickets) / event.totalTickets) * 100}%`,
                                }}
                              />
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Actif</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline" className="hover:bg-blue-50 hover:border-orange-300">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline" className="hover:bg-red-50 hover:border-red-300">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bookings" className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Gestion des réservations</h2>
              <p className="text-gray-600 mt-1">Suivez toutes les réservations de vos événements</p>
            </div>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead className="font-semibold">Client</TableHead>
                      <TableHead className="font-semibold">Événement</TableHead>
                      <TableHead className="font-semibold">Type de billet</TableHead>
                      <TableHead className="font-semibold">Quantité</TableHead>
                      <TableHead className="font-semibold">Total</TableHead>
                      <TableHead className="font-semibold">Date de réservation</TableHead>
                      <TableHead className="font-semibold">Statut</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {bookings.map((booking) => (
                      <TableRow key={booking.id} className="hover:bg-gray-50 transition-colors">
                        <TableCell>
                          <div>
                            <p className="font-medium text-gray-900">{booking.customerName}</p>
                            <p className="text-sm text-gray-500">{booking.email}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <p className="font-medium">{booking.eventTitle}</p>
                        </TableCell>
                        <TableCell>
                          <Badge variant="secondary">{booking.ticketType}</Badge>
                        </TableCell>
                        <TableCell>
                          <span className="font-medium">{booking.quantity}</span>
                        </TableCell>
                        <TableCell>
                          <span className="font-semibold text-orange-600">{booking.total}€</span>
                        </TableCell>
                        <TableCell>{new Date(booking.date).toLocaleDateString("fr-FR")}</TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">{booking.status}</Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
