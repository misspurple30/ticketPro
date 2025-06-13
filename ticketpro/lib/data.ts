export interface Event {
  id: number
  title: string
  artist: string
  date: string
  time: string
  venue: string
  price: number
  category: string
  image: string
  availableTickets: number
  totalTickets: number
  description: string
  ticketTypes: TicketType[]
  featured?: boolean
  rating?: number
  tags?: string[]
}

export interface TicketType {
  name: string
  price: number
  description: string
  benefits?: string[]
}

export interface Booking {
  id: number
  eventTitle: string
  customerName: string
  email: string
  ticketType: string
  quantity: number
  total: number
  date: string
  status: string
}

export const events: Event[] = [
  {
    id: 1,
    title: "Festival Coupé-Décalé 2024",
    artist: "Serge Beynaud & Invités",
    date: "2024-07-15",
    time: "20:00",
    venue: "Stade Félix Houphouët-Boigny, Abidjan",
    price: 15000,
    category: "Coupé-Décalé",
    image: "/images/coupe-decale-concert.jpg",
    availableTickets: 8000,
    totalTickets: 12000,
    featured: true,
    rating: 4.9,
    tags: ["Coupé-Décalé", "Festival", "Abidjan"],
    description:
      "Le plus grand festival de Coupé-Décalé de l'année avec Serge Beynaud en tête d'affiche, accompagné des plus grandes stars du genre. Une soirée explosive dans l'ambiance ivoirienne authentique.",
    ticketTypes: [
      {
        name: "Populaire",
        price: 15000,
        description: "Accès général",
        benefits: ["Accès à la zone générale", "Parking gratuit"],
      },
      {
        name: "VIP",
        price: 35000,
        description: "Accès VIP + boissons",
        benefits: ["Zone VIP", "Boissons incluses", "Parking VIP", "Toilettes privées"],
      },
      {
        name: "VVIP",
        price: 75000,
        description: "Accès backstage + meet & greet",
        benefits: ["Accès backstage", "Meet & greet avec les artistes", "Repas inclus", "Cadeaux exclusifs"],
      },
    ],
  },
  {
    id: 2,
    title: "Alpha Blondy Live",
    artist: "Alpha Blondy & Solar System",
    date: "2024-06-20",
    time: "19:30",
    venue: "Palais de la Culture, Abidjan",
    price: 20000,
    category: "Reggae",
    image: "/images/reggae-festival.jpg",
    availableTickets: 1200,
    totalTickets: 2000,
    featured: true,
    rating: 4.8,
    tags: ["Reggae", "Légende", "Live"],
    description:
      "Concert exceptionnel d'Alpha Blondy, la légende du reggae africain, accompagné de son groupe Solar System. Une soirée mémorable avec les plus grands hits de l'artiste.",
    ticketTypes: [
      {
        name: "Standard",
        price: 20000,
        description: "Placement libre",
        benefits: ["Accès général", "Programme du concert"],
      },
      {
        name: "Premium",
        price: 40000,
        description: "Places réservées + cocktail",
        benefits: ["Places réservées", "Cocktail d'accueil", "Rencontre possible avec l'artiste"],
      },
    ],
  },
  {
    id: 3,
    title: "Nuit du Zouglou",
    artist: "Magic System & Les Salopards",
    date: "2024-06-25",
    time: "21:00",
    venue: "Parc des Sports de Treichville, Abidjan",
    price: 10000,
    category: "Zouglou",
    image: "/images/zouglou-night.jpg",
    availableTickets: 3000,
    totalTickets: 5000,
    rating: 4.7,
    tags: ["Zouglou", "Magic System", "Nostalgie"],
    description:
      "Retour aux sources avec Magic System et Les Salopards pour une nuit dédiée au Zouglou. Revivez les plus grands tubes qui ont marqué la jeunesse ivoirienne.",
    ticketTypes: [
      {
        name: "Général",
        price: 10000,
        description: "Accès général",
        benefits: ["Accès à toutes les zones", "Ambiance garantie"],
      },
      {
        name: "Carré VIP",
        price: 25000,
        description: "Zone VIP avec sièges",
        benefits: ["Sièges réservés", "Service bar", "Vue privilégiée"],
      },
    ],
  },
  {
    id: 4,
    title: "Afrobeat Festival CI",
    artist: "Burna Boy & Artistes Locaux",
    date: "2024-08-10",
    time: "18:00",
    venue: "Sofitel Hôtel Ivoire, Abidjan",
    price: 50000,
    category: "Afrobeat",
    image: "/images/afrobeat-festival.jpg",
    availableTickets: 2500,
    totalTickets: 3000,
    featured: true,
    rating: 4.9,
    tags: ["Afrobeat", "International", "Festival"],
    description:
      "Festival Afrobeat exceptionnel avec Burna Boy en tête d'affiche, accompagné des meilleurs artistes ivoiriens. Une fusion parfaite entre les sons africains modernes et traditionnels.",
    ticketTypes: [
      {
        name: "Festival Pass",
        price: 50000,
        description: "Accès complet au festival",
        benefits: ["Accès à toutes les scènes", "Food court inclus"],
      },
      {
        name: "VIP Experience",
        price: 100000,
        description: "Expérience VIP complète",
        benefits: ["Zone VIP exclusive", "Meet & greet", "Transport inclus", "Repas gastronomique"],
      },
    ],
  },
  {
    id: 5,
    title: "Concert Gospel",
    artist: "Josey & Invités Gospel",
    date: "2024-07-05",
    time: "16:00",
    venue: "Cathédrale Saint-Paul, Abidjan",
    price: 8000,
    category: "Gospel",
    image: "/images/gospel-concert.jpg",
    availableTickets: 800,
    totalTickets: 1000,
    rating: 4.8,
    tags: ["Gospel", "Spirituel", "Josey"],
    description:
      "Concert gospel exceptionnel avec Josey et les plus grandes voix du gospel ivoirien. Un moment de recueillement et de célébration dans un cadre majestueux.",
    ticketTypes: [
      {
        name: "Libre",
        price: 8000,
        description: "Accès libre",
        benefits: ["Accès général", "Livret de chants"],
      },
      {
        name: "Réservé",
        price: 15000,
        description: "Places réservées",
        benefits: ["Places réservées", "Rencontre avec les artistes", "CD dédicacé"],
      },
    ],
  },
  {
    id: 6,
    title: "Soirée Musique Traditionnelle",
    artist: "Ensemble Koteba & Griots",
    date: "2024-06-30",
    time: "19:00",
    venue: "Centre Culturel Français, Abidjan",
    price: 12000,
    category: "Traditionnel",
    image: "/images/traditional-music.jpg",
    availableTickets: 300,
    totalTickets: 400,
    rating: 4.6,
    tags: ["Traditionnel", "Culture", "Patrimoine"],
    description:
      "Découvrez la richesse de la musique traditionnelle ivoirienne avec l'Ensemble Koteba et les griots. Une soirée culturelle authentique pour préserver notre patrimoine musical.",
    ticketTypes: [
      {
        name: "Standard",
        price: 12000,
        description: "Accès général",
        benefits: ["Accès général", "Programme culturel"],
      },
      {
        name: "Soutien",
        price: 25000,
        description: "Soutien aux artistes",
        benefits: ["Places privilégiées", "Rencontre avec les artistes", "Livre sur la culture ivoirienne"],
      },
    ],
  },
]

export const bookings: Booking[] = [
  {
    id: 1,
    eventTitle: "Festival Coupé-Décalé 2024",
    customerName: "Kouassi Jean-Baptiste",
    email: "kouassi.jb@gmail.com",
    ticketType: "Populaire",
    quantity: 2,
    total: 30000,
    date: "2024-05-20",
    status: "Confirmé",
  },
  {
    id: 2,
    eventTitle: "Alpha Blondy Live",
    customerName: "Adjoua Marie-Claire",
    email: "adjoua.mc@yahoo.fr",
    ticketType: "Premium",
    quantity: 1,
    total: 40000,
    date: "2024-05-19",
    status: "Confirmé",
  },
  {
    id: 3,
    eventTitle: "Afrobeat Festival CI",
    customerName: "Yao Kouadio",
    email: "yao.kouadio@hotmail.com",
    ticketType: "VIP Experience",
    quantity: 2,
    total: 200000,
    date: "2024-05-18",
    status: "Confirmé",
  },
]

export const categories = ["Tous", "Coupé-Décalé", "Reggae", "Zouglou", "Afrobeat", "Gospel", "Traditionnel"]
