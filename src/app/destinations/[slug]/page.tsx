'use client'

import { motion } from 'framer-motion'
import { MapPin, Calendar, Users, Star, ArrowLeft, Check } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Mock data - in production this would come from a database
const destinationsData: Record<string, any> = {
  sigiriya: {
    name: 'Sigiriya',
    location: 'Cultural Triangle, Central Province',
    rating: 4.9,
    reviews: 342,
    description: 'Sigiriya, also known as Lion Rock, is an ancient rock fortress and palace ruins surrounded by the remains of an extensive network of gardens, reservoirs, and other structures. This 5th-century fortress is a UNESCO World Heritage Site and one of Sri Lanka\'s most iconic landmarks.',
    highlights: [
      'Ancient rock fortress rising 200m above the jungle',
      'UNESCO World Heritage Site',
      'Spectacular 5th-century frescoes',
      'Mirror wall with ancient graffiti',
      'Advanced hydraulic systems and gardens',
      'Panoramic views of surrounding landscapes',
    ],
    bestTime: 'December to April (dry season)',
    duration: 'Half day to full day',
    activities: [
      'Rock climbing to the summit',
      'Exploring ancient gardens',
      'Photography',
      'Historical tours',
      'Museum visits',
    ],
    nearbyAttractions: [
      'Dambulla Cave Temple',
      'Pidurangala Rock',
      'Minneriya National Park',
    ],
    travelTips: [
      'Start early morning to avoid heat and crowds',
      'Wear comfortable shoes with good grip',
      'Bring water and sun protection',
      'Expect around 1,200 steps to the summit',
      'Modest clothing recommended',
    ],
  },
  mirissa: {
    name: 'Mirissa',
    location: 'South Coast, Southern Province',
    rating: 5.0,
    reviews: 287,
    description: 'Mirissa is a small town on the south coast of Sri Lanka, renowned for its stunning beaches, laid-back atmosphere, and world-class whale watching opportunities. The crescent-shaped beach and turquoise waters make it a paradise for beach lovers.',
    highlights: [
      'Pristine crescent-shaped beach',
      'World-class whale and dolphin watching',
      'Excellent surfing conditions',
      'Vibrant beach nightlife',
      'Fresh seafood and beachfront dining',
      'Stunning sunsets',
    ],
    bestTime: 'November to April (calm seas)',
    duration: '2-4 days',
    activities: [
      'Whale watching tours',
      'Surfing and bodyboarding',
      'Snorkeling',
      'Beach relaxation',
      'Sunset viewing',
      'Water sports',
    ],
    nearbyAttractions: [
      'Coconut Tree Hill',
      'Secret Beach',
      'Weligama Bay',
      'Galle Fort (40 minutes)',
    ],
    travelTips: [
      'Book whale watching tours in advance',
      'Best whale sightings December to April',
      'Beware of strong currents when swimming',
      'Try local seafood at beach restaurants',
      'Rent a scooter to explore nearby beaches',
    ],
  },
  ella: {
    name: 'Ella',
    location: 'Hill Country, Uva Province',
    rating: 4.9,
    reviews: 456,
    description: 'Ella is a small mountain village nestled in the highlands of Sri Lanka, famous for its breathtaking scenery, lush tea plantations, and cool climate. This charming town offers incredible hiking trails, stunning viewpoints, and a relaxed backpacker vibe.',
    highlights: [
      'Iconic Nine Arch Bridge',
      'Little Adam\'s Peak hike',
      'Ella Rock trek',
      'Emerald tea plantations',
      'Ravana Falls waterfall',
      'Cool mountain climate',
    ],
    bestTime: 'January to March (clearest views)',
    duration: '2-3 days',
    activities: [
      'Hiking and trekking',
      'Train journeys',
      'Tea plantation tours',
      'Waterfall visits',
      'Photography',
      'Zip-lining',
    ],
    nearbyAttractions: [
      'Nine Arch Bridge',
      'Ella Rock',
      'Little Adam\'s Peak',
      'Ravana Falls',
      'Lipton\'s Seat',
    ],
    travelTips: [
      'Take the scenic train from Kandy or Nuwara Eliya',
      'Start hikes early for best views',
      'Bring layers - mornings can be cool',
      'Book accommodation in advance during peak season',
      'Try Ceylon tea at local plantations',
    ],
  },
  yala: {
    name: 'Yala National Park',
    location: 'Southeast, Southern Province',
    rating: 4.8,
    reviews: 523,
    description: 'Yala National Park is Sri Lanka\'s most visited and second-largest national park, famous for having one of the highest leopard densities in the world. The park encompasses diverse ecosystems from dense jungle to open grasslands and coastal lagoons.',
    highlights: [
      'Highest leopard density in the world',
      'Over 215 bird species',
      'Large elephant herds',
      'Sloth bears and crocodiles',
      'Diverse ecosystems',
      'Ancient Buddhist sites',
    ],
    bestTime: 'February to July (best wildlife viewing)',
    duration: 'Full day safari or overnight',
    activities: [
      'Jeep safaris',
      'Wildlife photography',
      'Bird watching',
      'Nature walks (in designated areas)',
    ],
    nearbyAttractions: [
      'Bundala National Park',
      'Kirinda Beach',
      'Sithulpawwa Rock Temple',
      'Kataragama Temple',
    ],
    travelTips: [
      'Book safari with reputable operators',
      'Early morning safaris offer best wildlife sightings',
      'Bring binoculars and camera with zoom lens',
      'Wear neutral colors',
      'Park closes September for maintenance',
    ],
  },
  'galle-fort': {
    name: 'Galle Fort',
    location: 'Galle, Southern Province',
    rating: 4.9,
    reviews: 612,
    description: 'Galle Fort is a historic fortified city built by the Portuguese in 1588 and extensively fortified by the Dutch during the 17th century. This UNESCO World Heritage Site is a remarkable example of European architecture blended with South Asian traditions.',
    highlights: [
      'UNESCO World Heritage Site',
      'Well-preserved Dutch colonial architecture',
      'Historic ramparts and bastions',
      'Charming boutique hotels and cafes',
      'Art galleries and museums',
      'Lighthouse and ocean views',
    ],
    bestTime: 'Year-round (avoid monsoon May-August)',
    duration: 'Half day to full day',
    activities: [
      'Walking the ramparts',
      'Historical tours',
      'Shopping for crafts and antiques',
      'Dining at colonial restaurants',
      'Photography',
      'Museum visits',
    ],
    nearbyAttractions: [
      'Unawatuna Beach',
      'Japanese Peace Pagoda',
      'Jungle Beach',
      'Martin Wickramasinghe Museum',
    ],
    travelTips: [
      'Visit early morning or late afternoon to avoid heat',
      'Wear comfortable walking shoes',
      'Explore the small lanes and hidden courtyards',
      'Try hoppers at a local restaurant',
      'Watch sunset from the lighthouse',
    ],
  },
  kandy: {
    name: 'Kandy',
    location: 'Central Province',
    rating: 4.8,
    reviews: 489,
    description: 'Kandy is the cultural capital of Sri Lanka and a UNESCO World Heritage Site, home to the sacred Temple of the Tooth Relic. Nestled among hills and surrounding a picturesque lake, Kandy was the last capital of the ancient kings of Sri Lanka.',
    highlights: [
      'Temple of the Tooth Relic',
      'UNESCO World Heritage Site',
      'Beautiful Kandy Lake',
      'Royal Botanical Gardens',
      'Traditional Kandyan dance performances',
      'Rich cultural heritage',
    ],
    bestTime: 'December to April (dry season)',
    duration: '1-2 days',
    activities: [
      'Temple visits',
      'Cultural shows',
      'Botanical garden tours',
      'Lake walks',
      'Shopping for crafts',
      'Tea factory visits',
    ],
    nearbyAttractions: [
      'Peradeniya Botanical Gardens',
      'Pinnawala Elephant Orphanage',
      'Ambuluwawa Tower',
      'Hanthana Mountain Range',
    ],
    travelTips: [
      'Dress modestly when visiting temples',
      'Attend the evening puja at Temple of the Tooth',
      'Book cultural dance show tickets in advance',
      'Visit botanical gardens in the morning',
      'Try Kandy\'s famous wood apple juice',
    ],
  },
}

export default function DestinationDetail() {
  const params = useParams()
  const slug = params?.slug as string
  const destination = destinationsData[slug]

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-semibold text-primary-900 mb-4">Destination Not Found</h1>
          <Link href="/" className="text-primary-800 hover:underline">
            Return Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] bg-gradient-to-br from-primary-900 to-primary-600 overflow-hidden">
          {/* Video Background for Sigiriya */}
          {slug === 'sigiriya' && (
            <div className="absolute inset-0 w-full h-full">
              <iframe
                src="https://www.youtube.com/embed/MW3sC2D2SWo?autoplay=1&mute=1&loop=1&playlist=MW3sC2D2SWo&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
                className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2"
                style={{
                  width: '100vw',
                  height: '56.25vw', // 16:9 aspect ratio
                  minHeight: '100vh',
                  minWidth: '177.77vh', // 16:9 aspect ratio
                  pointerEvents: 'none'
                }}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                title="Sigiriya Background Video"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          )}

          {/* Video Background for Yala */}
          {slug === 'yala' && (
            <div className="absolute inset-0 w-full h-full">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
                style={{
                  minWidth: '100%',
                  minHeight: '100%',
                }}
              >
                <source src="/videos/yala.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-black/40" />
            </div>
          )}

          {/* Video Background for Ella */}
          {slug === 'ella' && (
            <div className="absolute inset-0 w-full h-full">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
                style={{
                  minWidth: '100%',
                  minHeight: '100%',
                }}
              >
                <source src="/videos/Ella.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-black/40" />
            </div>
          )}

          {/* Gradient overlay for non-video backgrounds */}
          {slug !== 'sigiriya' && slug !== 'yala' && slug !== 'ella' && <div className="absolute inset-0 bg-black/20" />}

          <div className="relative z-10 h-full flex items-center pt-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
              <Link href="/#destinations">
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors"
                >
                  <ArrowLeft size={20} />
                  <span>Back to Destinations</span>
                </motion.button>
              </Link>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center gap-2 text-white/90 mb-4">
                  <MapPin size={20} />
                  <span className="text-lg">{destination.location}</span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-semibold text-white mb-6 tracking-tight">
                  {destination.name}
                </h1>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Star size={20} className="text-amber-400 fill-amber-400" />
                    <span className="text-lg font-medium text-white">{destination.rating}</span>
                    <span className="text-white/80">({destination.reviews} reviews)</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-semibold text-primary-900 mb-6 tracking-tight">
                About {destination.name}
              </h2>
              <p className="text-xl text-neutral-600 leading-relaxed font-light">
                {destination.description}
              </p>
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 bg-neutral-50 rounded-3xl p-8 lg:p-12"
            >
              <h3 className="text-2xl font-semibold text-primary-900 mb-6 tracking-tight">
                Highlights
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {destination.highlights.map((highlight: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check size={20} className="text-primary-900 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700 font-light">{highlight}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Info Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white border border-neutral-200 rounded-2xl p-6"
              >
                <Calendar size={24} className="text-neutral-400 mb-3" />
                <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-2">
                  Best Time to Visit
                </h4>
                <p className="text-neutral-900 font-light">{destination.bestTime}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white border border-neutral-200 rounded-2xl p-6"
              >
                <Users size={24} className="text-neutral-400 mb-3" />
                <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-2">
                  Recommended Duration
                </h4>
                <p className="text-neutral-900 font-light">{destination.duration}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white border border-neutral-200 rounded-2xl p-6"
              >
                <MapPin size={24} className="text-neutral-400 mb-3" />
                <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-2">
                  Location
                </h4>
                <p className="text-neutral-900 font-light">{destination.location}</p>
              </motion.div>
            </div>

            {/* Activities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h3 className="text-2xl font-semibold text-primary-900 mb-6 tracking-tight">
                Things to Do
              </h3>
              <div className="flex flex-wrap gap-3">
                {destination.activities.map((activity: string, index: number) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-neutral-100 text-neutral-700 rounded-full text-sm font-light"
                  >
                    {activity}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Nearby Attractions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h3 className="text-2xl font-semibold text-primary-900 mb-6 tracking-tight">
                Nearby Attractions
              </h3>
              <ul className="space-y-3">
                {destination.nearbyAttractions.map((attraction: string, index: number) => (
                  <li key={index} className="flex items-center gap-3 text-neutral-700">
                    <span className="w-2 h-2 rounded-full bg-primary-900" />
                    <span className="font-light">{attraction}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Travel Tips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary-900 text-white rounded-3xl p-8 lg:p-12"
            >
              <h3 className="text-2xl font-semibold mb-6 tracking-tight">
                Travel Tips
              </h3>
              <ul className="space-y-4">
                {destination.travelTips.map((tip: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check size={20} className="mt-0.5 flex-shrink-0 opacity-80" />
                    <span className="font-light opacity-90">{tip}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-semibold text-primary-900 mb-4 tracking-tight">
              Ready to explore {destination.name}?
            </h2>
            <p className="text-lg text-neutral-600 mb-8 font-light">
              Let us craft a perfect itinerary for your Sri Lankan adventure.
            </p>
            <Link href="/#packages">
              <button className="px-8 py-4 bg-primary-900 text-white rounded-full font-medium hover:bg-primary-800 transition-colors">
                View Tour Packages
              </button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
