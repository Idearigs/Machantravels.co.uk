'use client'

import { motion } from 'framer-motion'
import { Calendar, Users, Star, ArrowLeft, Check, MapPin, Clock, Shield, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// FAQ Item Component
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-white border border-neutral-200 rounded-2xl overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between hover:bg-neutral-50 transition-colors text-left"
      >
        <span className="font-semibold text-neutral-900">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={20} className="text-primary-900" />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.2 }}
        className="overflow-hidden"
      >
        <div className="px-6 py-4 bg-neutral-50 border-t border-neutral-200">
          <p className="text-neutral-700 leading-relaxed font-light">{answer}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

// Mock data - in production this would come from a database
const packagesData: Record<string, any> = {
  'cultural-triangle': {
    name: 'Cultural Triangle Explorer',
    subtitle: 'Journey through Ancient Kingdoms',
    duration: '7 Days / 6 Nights',
    groupSize: '2-8 People',
    rating: 4.9,
    reviews: 124,
    price: '£899',
    overview: 'Embark on a captivating journey through Sri Lanka\'s Cultural Triangle, exploring ancient kingdoms, UNESCO World Heritage Sites, and sacred temples. This carefully curated tour combines history, culture, and natural beauty to create an unforgettable experience.',
    highlights: [
      'Climb the iconic Sigiriya Rock Fortress',
      'Visit the sacred Temple of the Tooth in Kandy',
      'Explore ancient Polonnaruwa ruins',
      'Discover Dambulla Cave Temple\'s Buddha statues',
      'Experience traditional Kandyan cultural dance',
      'Visit a spice garden in Matale',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Negombo',
        description: 'Airport pickup and transfer to Negombo. Relax on the beach and explore the fishing village. Welcome dinner.',
      },
      {
        day: 2,
        title: 'Sigiriya Rock Fortress',
        description: 'Early morning climb to Sigiriya summit. Afternoon visit to Pidurangala Rock for sunset views.',
      },
      {
        day: 3,
        title: 'Polonnaruwa Ancient City',
        description: 'Full day exploring the medieval capital with ancient temples, palaces, and Buddha statues.',
      },
      {
        day: 4,
        title: 'Dambulla & Matale',
        description: 'Morning visit to Dambulla Cave Temple. Afternoon spice garden tour and cooking demonstration.',
      },
      {
        day: 5,
        title: 'Kandy Cultural Experience',
        description: 'Visit Temple of the Tooth, Royal Botanical Gardens, and evening cultural dance performance.',
      },
      {
        day: 6,
        title: 'Tea Plantation Visit',
        description: 'Visit a working tea plantation and factory. Learn about Ceylon tea production and enjoy tastings.',
      },
      {
        day: 7,
        title: 'Departure',
        description: 'Morning at leisure. Transfer to airport for departure flight.',
      },
    ],
    included: [
      '6 nights accommodation (4-star hotels)',
      'Daily breakfast and 3 dinners',
      'Private air-conditioned vehicle',
      'English-speaking guide',
      'All entrance fees',
      'Airport transfers',
      'Cultural dance show tickets',
    ],
    notIncluded: [
      'International flights',
      'Travel insurance',
      'Lunches and drinks',
      'Personal expenses',
      'Tips and gratuities',
    ],
    whatToBring: [
      'Comfortable walking shoes',
      'Sun protection (hat, sunscreen)',
      'Light, modest clothing',
      'Camera',
      'Insect repellent',
      'Personal medications',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1548013146-72e2a6f6e6d8?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=400&fit=crop',
    ],
    video: 'https://www.youtube.com/embed/nKuaazJbSto?si=Ej7TPwpW0VfSHm73',
    funFacts: [
      'Sigiriya Rock Fortress stands 200 meters tall and dates back to the 5th century AD, making it one of the oldest structures in the world.',
      'The Temple of the Tooth in Kandy is said to house a tooth relic of Buddha, making it one of the most sacred Buddhist sites.',
      'Dambulla Cave Temple is the largest cave temple complex in Sri Lanka with over 150 Buddha statues.',
      'The Cultural Triangle region has been home to the Sinhalese civilization for over 2,300 years.',
    ],
    faqs: [
      {
        question: 'What is the best time to visit the Cultural Triangle?',
        answer: 'December to April (dry season) is ideal for visiting. The weather is pleasant with minimal rainfall, perfect for exploring ancient sites and enjoying outdoor activities.',
      },
      {
        question: 'How physically demanding is the Sigiriya climb?',
        answer: 'The climb involves approximately 1,200 steps and takes 45-60 minutes to reach the summit. It\'s moderately challenging but suitable for most fitness levels with regular breaks.',
      },
      {
        question: 'Are there dress code requirements for temples?',
        answer: 'Yes, temples require modest clothing. Cover your shoulders and knees. Remove shoes before entering sacred areas and show respect to Buddhist customs.',
      },
      {
        question: 'Can the tour be customized?',
        answer: 'Absolutely! All our tours can be customized to match your interests, pace, and budget. Contact us to discuss your preferences.',
      },
    ],
  },
  'coastal-adventure': {
    name: 'Coastal Paradise',
    subtitle: 'Southern Coast & Beach Experience',
    duration: '10 Days / 9 Nights',
    groupSize: '2-12 People',
    rating: 5.0,
    reviews: 98,
    price: '£1,199',
    overview: 'Discover the pristine beaches, colonial heritage, and marine wonders of Sri Lanka\'s stunning southern coast. This tour combines relaxation with adventure, featuring whale watching, historic sites, and some of the world\'s most beautiful beaches.',
    highlights: [
      'Whale watching in Mirissa',
      'Explore UNESCO-listed Galle Fort',
      'Relax on pristine Unawatuna Beach',
      'Snorkeling at Hikkaduwa',
      'Visit sea turtle hatchery',
      'Sunset at Coconut Tree Hill',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Colombo',
        description: 'Airport pickup. City tour of Colombo including colonial architecture and local markets.',
      },
      {
        day: 2,
        title: 'Journey to Bentota',
        description: 'Drive to Bentota. Water sports activities and river safari. Relax on golden beach.',
      },
      {
        day: 3,
        title: 'Galle Fort Exploration',
        description: 'Full day exploring historic Galle Fort, museums, and colonial architecture.',
      },
      {
        day: 4,
        title: 'Unawatuna Beach',
        description: 'Beach day at Unawatuna. Optional diving or snorkeling in the coral reefs.',
      },
      {
        day: 5,
        title: 'Mirissa Whale Watching',
        description: 'Early morning whale watching tour. Afternoon beach relaxation and sunset viewing.',
      },
      {
        day: 6,
        title: 'Secret Beach & Coconut Tree Hill',
        description: 'Explore hidden beaches and photograph iconic Coconut Tree Hill at sunset.',
      },
      {
        day: 7,
        title: 'Weligama Surfing',
        description: 'Surfing lessons at Weligama Bay. Visit stilt fishermen and sea turtle hatchery.',
      },
      {
        day: 8,
        title: 'Hikkaduwa Snorkeling',
        description: 'Snorkeling with tropical fish and sea turtles. Beach time and local seafood dinner.',
      },
      {
        day: 9,
        title: 'Return to Colombo',
        description: 'Leisurely drive back to Colombo. Shopping and final evening in the city.',
      },
      {
        day: 10,
        title: 'Departure',
        description: 'Morning at leisure. Airport transfer for departure flight.',
      },
    ],
    included: [
      '9 nights accommodation (beachfront hotels)',
      'Daily breakfast',
      'Whale watching tour',
      'Surfing lesson',
      'Snorkeling equipment',
      'Private vehicle and driver',
      'English-speaking guide',
      'All entrance fees',
    ],
    notIncluded: [
      'International flights',
      'Travel insurance',
      'Lunches and dinners',
      'Water sports activities (except surfing lesson)',
      'Personal expenses',
    ],
    whatToBring: [
      'Swimwear and beach gear',
      'Reef-safe sunscreen',
      'Underwater camera',
      'Light clothing',
      'Sandals and water shoes',
      'Motion sickness tablets (for boat trips)',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1473496169865-658ba7c44d8a?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop',
    ],
    video: 'https://www.youtube.com/embed/lrQUIyzUEyc?si=Ej7TPwpW0VfSHm73',
    funFacts: [
      'Galle Fort is a UNESCO World Heritage Site built by the Portuguese in 1588 and covers 36 acres of historic colonial architecture.',
      'Mirissa is famous for blue whale watching between December and April when whales migrate through Sri Lankan waters.',
      'The southern coast has some of the world\'s most beautiful and least crowded beaches, perfect for relaxation and water sports.',
      'Sea turtle conservation is a major focus, with multiple hatcheries working to protect endangered sea turtle species.',
    ],
    faqs: [
      {
        question: 'What\'s the best time for whale watching?',
        answer: 'December to April is peak whale watching season in Mirissa. You\'ll have the highest chances of spotting blue whales and sperm whales.',
      },
      {
        question: 'Is snorkeling safe for beginners?',
        answer: 'Yes! Our guides provide complete equipment and instruction. Most snorkeling spots are in shallow, calm waters suitable for beginners.',
      },
      {
        question: 'How long does whale watching typically take?',
        answer: 'Most whale watching tours are 4-5 hours, departing early in the morning. Weather conditions may affect trips.',
      },
      {
        question: 'Can children participate in water activities?',
        answer: 'Yes, children can join most activities with proper supervision and safety equipment. We recommend ages 5+ for snorkeling.',
      },
    ],
  },
  'wildlife-safari': {
    name: 'Wildlife & Nature',
    subtitle: 'Safari Adventure & Rainforest Discovery',
    duration: '8 Days / 7 Nights',
    groupSize: '2-6 People',
    rating: 4.8,
    reviews: 156,
    price: '£1,049',
    overview: 'Experience Sri Lanka\'s incredible biodiversity on this wildlife-focused adventure. From spotting leopards in Yala to encountering elephant herds in Udawalawe, this tour offers unparalleled opportunities to see exotic wildlife in their natural habitats.',
    highlights: [
      'Two full-day safaris in Yala National Park',
      'Elephant watching at Udawalawe',
      'Trek through Sinharaja Rainforest',
      'Visit Elephant Transit Home',
      'Bird watching (215+ species)',
      'Overnight at jungle camp',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Transfer',
        description: 'Airport pickup and transfer to Yala. Evening wildlife briefing and dinner.',
      },
      {
        day: 2,
        title: 'Yala Safari - Morning',
        description: 'Early morning safari tracking leopards and elephants. Return for lunch and rest.',
      },
      {
        day: 3,
        title: 'Yala Safari - Full Day',
        description: 'Full-day safari with packed lunch. Best chance to spot leopards, sloth bears, and exotic birds.',
      },
      {
        day: 4,
        title: 'Udawalawe Elephant Safari',
        description: 'Transfer to Udawalawe. Afternoon safari focusing on large elephant herds.',
      },
      {
        day: 5,
        title: 'Elephant Transit Home',
        description: 'Visit elephant orphanage feeding time. Transfer to Sinharaja region.',
      },
      {
        day: 6,
        title: 'Sinharaja Rainforest Trek',
        description: 'Guided trek through UNESCO-listed rainforest. Spot endemic species and tropical birds.',
      },
      {
        day: 7,
        title: 'Rainforest & Waterfalls',
        description: 'Morning rainforest walk. Visit stunning waterfalls. Jungle camp experience.',
      },
      {
        day: 8,
        title: 'Departure',
        description: 'Morning bird watching. Transfer to airport for departure.',
      },
    ],
    included: [
      '7 nights accommodation (safari lodges & eco-camps)',
      'All meals included',
      'Three safari jeep tours',
      'Rainforest guided treks',
      'Expert naturalist guide',
      'Park entrance fees',
      'Private vehicle transfers',
      'Binoculars provided',
    ],
    notIncluded: [
      'International flights',
      'Travel insurance',
      'Drinks and beverages',
      'Optional extra safaris',
      'Personal expenses',
    ],
    whatToBring: [
      'Neutral-colored clothing',
      'Binoculars',
      'Camera with zoom lens',
      'Insect repellent',
      'Hiking boots',
      'Rain jacket',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1544550717-e3f7a5d34f0d?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1511497584788-876760111969?w=500&h=400&fit=crop',
    ],
    video: 'https://www.youtube.com/embed/UrmG7oZbkYw?si=Ej7TPwpW0VfSHm73',
    funFacts: [
      'Sri Lanka\'s Yala National Park has the highest concentration of leopards in the world, with over 50 individuals in the park.',
      'Elephants in Udawalawe can stand up to 3 meters tall and weigh as much as 5 tons, making them gentle giants of the animal kingdom.',
      'Sinharaja Rainforest is a UNESCO World Heritage Site and a biodiversity hotspot with over 60% of endemic species found nowhere else on Earth.',
      'Over 215 bird species have been recorded in Sri Lanka, with many found exclusively in the central highlands and rainforests.',
    ],
    faqs: [
      {
        question: 'What is the best time for safari?',
        answer: 'December to March offers the best wildlife viewing with dry weather. Early mornings (6-9 AM) are most productive for spotting animals.',
      },
      {
        question: 'Will we see leopards?',
        answer: 'Leopards are elusive but sightings are possible, especially on multi-day safaris. We also guarantee elephant and bird sightings.',
      },
      {
        question: 'How long are safari drives?',
        answer: 'Safari drives typically last 4-6 hours. Morning and afternoon safaris are available, each offering different wildlife activity.',
      },
      {
        question: 'Is the rainforest trek difficult?',
        answer: 'The trek is moderate with varied terrain. It\'s suitable for most fitness levels but good hiking boots and prior fitness help.',
      },
    ],
  },
  'tea-country': {
    name: 'Hill Country & Tea Trails',
    subtitle: 'Mountains, Tea & Colonial Charm',
    duration: '6 Days / 5 Nights',
    groupSize: '2-10 People',
    rating: 4.9,
    reviews: 87,
    price: '£799',
    overview: 'Journey through the misty highlands of Sri Lanka\'s Hill Country, where emerald tea plantations blanket rolling hills and cool mountain air provides respite from tropical heat. Experience colonial heritage, scenic train rides, and world-famous Ceylon tea.',
    highlights: [
      'Scenic train journey Kandy to Ella',
      'Visit working tea plantations and factories',
      'Hike to Ella Rock and Little Adam\'s Peak',
      'Photography at Nine Arch Bridge',
      'Stay in colonial-era tea bungalow',
      'Tea tasting sessions',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Kandy',
        description: 'Transfer to Kandy. Visit Temple of the Tooth and evening cultural show.',
      },
      {
        day: 2,
        title: 'Scenic Train to Nuwara Eliya',
        description: 'Board famous train journey through tea country. Afternoon exploring Nuwara Eliya town.',
      },
      {
        day: 3,
        title: 'Tea Plantation Experience',
        description: 'Full day at working tea estate. Factory tour, tea plucking, and multiple tasting sessions.',
      },
      {
        day: 4,
        title: 'Journey to Ella',
        description: 'Drive to Ella through scenic mountain roads. Photograph Nine Arch Bridge.',
      },
      {
        day: 5,
        title: 'Ella Adventures',
        description: 'Morning hike to Little Adam\'s Peak. Afternoon trek to Ella Rock. Visit Ravana Falls.',
      },
      {
        day: 6,
        title: 'Departure via Colombo',
        description: 'Scenic drive to Colombo. Brief city tour before airport transfer.',
      },
    ],
    included: [
      '5 nights accommodation (tea bungalows & boutique hotels)',
      'Daily breakfast and 2 dinners',
      'Scenic train tickets (reserved seats)',
      'Tea plantation tours',
      'Guided hikes',
      'Private vehicle and driver',
      'English-speaking guide',
      'All entrance fees',
    ],
    notIncluded: [
      'International flights',
      'Travel insurance',
      'Lunches and drinks',
      'Personal expenses',
      'Tips',
    ],
    whatToBring: [
      'Warm layers (mornings are cool)',
      'Comfortable hiking shoes',
      'Rain jacket',
      'Camera',
      'Day backpack',
      'Reusable water bottle',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1469022563149-aa64dbd37dae?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop',
    ],
    video: 'https://www.youtube.com/embed/UrmG7oZbkYw?si=Ej7TPwpW0VfSHm73',
    funFacts: [
      'Ceylon tea is world-renowned and produces about 340,000 tonnes per year, making Sri Lanka one of the largest tea exporters globally.',
      'The scenic train ride from Kandy to Ella is considered one of the most beautiful railway journeys in the world.',
      'Ella is the highest populated area in Sri Lanka at 1,041 meters, offering cool climate and breathtaking views.',
      'The Nine Arch Bridge in Ella is a stunning architectural feat built during the colonial period, perfect for photography.',
    ],
    faqs: [
      {
        question: 'Can I visit tea factories and plantations?',
        answer: 'Yes! We include tea factory tours in the package. You\'ll see the entire tea processing from leaf to cup and enjoy tastings.',
      },
      {
        question: 'Is the train journey comfortable?',
        answer: 'Yes, reserved seats ensure comfort. The journey offers spectacular views of mountains, waterfalls, and tea plantations.',
      },
      {
        question: 'What is the altitude like in Ella?',
        answer: 'Ella is at 1,041 meters elevation. It\'s cooler than coastal areas (about 10°C cooler), so bring warm layers.',
      },
      {
        question: 'Are there easy and challenging hike options?',
        answer: 'Yes! We offer both easy walks and challenging hikes. Little Adam\'s Peak is moderate; Ella Rock is more demanding.',
      },
    ],
  },
}

export default function PackageDetail() {
  const params = useParams()
  const slug = params?.slug as string
  const pkg = packagesData[slug]

  if (!pkg) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-semibold text-primary-900 mb-4">Package Not Found</h1>
          <Link href="/#packages" className="text-primary-800 hover:underline">
            View All Packages
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
        <section className="relative bg-gradient-to-br from-primary-900 to-primary-600 py-12 lg:py-20 pt-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Link href="/#packages">
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 text-white/90 hover:text-white mb-4 lg:mb-6 transition-colors"
              >
                <ArrowLeft size={20} />
                <span className="text-sm lg:text-base">Back to Packages</span>
              </motion.button>
            </Link>

            <div className="grid lg:grid-cols-3 gap-6 lg:gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="lg:col-span-2"
              >
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold text-white mb-3 lg:mb-4 tracking-tight">
                  {pkg.name}
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-light mb-4 lg:mb-6">
                  {pkg.subtitle}
                </p>
                <div className="flex flex-wrap items-center gap-3 lg:gap-6 text-sm lg:text-base">
                  <div className="flex items-center gap-1">
                    <Star size={16} className="text-amber-400 fill-amber-400 lg:w-5 lg:h-5" />
                    <span className="font-medium text-white">{pkg.rating}</span>
                    <span className="text-white/80 text-xs lg:text-base">({pkg.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/90">
                    <Calendar size={16} className="lg:w-5 lg:h-5" />
                    <span className="text-xs lg:text-base">{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/90">
                    <Users size={16} className="lg:w-5 lg:h-5" />
                    <span className="text-xs lg:text-base">{pkg.groupSize}</span>
                  </div>
                </div>
              </motion.div>

              {/* Booking Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-2xl lg:rounded-3xl p-5 lg:p-8"
              >
                <div className="text-center mb-4 lg:mb-6">
                  <h3 className="text-lg lg:text-2xl font-semibold text-primary-900 mb-2 lg:mb-3">
                    Interested in this tour?
                  </h3>
                  <p className="text-neutral-600 font-light text-xs lg:text-sm">
                    Contact us for pricing and availability
                  </p>
                </div>
                <button className="w-full px-5 lg:px-6 py-3 lg:py-4 bg-primary-900 text-white rounded-full text-sm lg:text-base font-medium hover:bg-primary-800 transition-colors mb-3 lg:mb-4">
                  Get a Quote
                </button>
                <div className="flex items-center justify-center gap-2 text-xs lg:text-sm text-neutral-600">
                  <Shield size={14} className="lg:w-4 lg:h-4" />
                  <span>Free cancellation up to 7 days</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-semibold text-primary-900 mb-6 tracking-tight">
                Overview
              </h2>
              <p className="text-xl text-neutral-600 leading-relaxed font-light mb-12">
                {pkg.overview}
              </p>
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-neutral-50 rounded-3xl p-8 lg:p-12 mb-16"
            >
              <h3 className="text-2xl font-semibold text-primary-900 mb-6 tracking-tight">
                Tour Highlights
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {pkg.highlights.map((highlight: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check size={20} className="text-primary-900 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700 font-light">{highlight}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Itinerary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h3 className="text-2xl font-semibold text-primary-900 mb-8 tracking-tight">
                Detailed Itinerary
              </h3>
              <div className="space-y-6">
                {pkg.itinerary.map((day: any, index: number) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-primary-900 text-white flex items-center justify-center font-semibold">
                      Day {day.day}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-primary-900 mb-2">
                        {day.title}
                      </h4>
                      <p className="text-neutral-600 font-light leading-relaxed">
                        {day.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* What's Included / Not Included */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-green-50 rounded-2xl p-8"
              >
                <h3 className="text-xl font-semibold text-primary-900 mb-6 tracking-tight">
                  What's Included
                </h3>
                <ul className="space-y-3">
                  {pkg.included.map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-3 text-neutral-700">
                      <Check size={18} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-red-50 rounded-2xl p-8"
              >
                <h3 className="text-xl font-semibold text-primary-900 mb-6 tracking-tight">
                  Not Included
                </h3>
                <ul className="space-y-3">
                  {pkg.notIncluded.map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-3 text-neutral-700">
                      <span className="w-4 h-4 border-2 border-red-400 rounded-full mt-1 flex-shrink-0" />
                      <span className="font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* What to Bring */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary-900 text-white rounded-3xl p-8 lg:p-12"
            >
              <h3 className="text-2xl font-semibold mb-6 tracking-tight">
                What to Bring
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {pkg.whatToBring.map((item: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-white/80 mt-2 flex-shrink-0" />
                    <span className="font-light opacity-90">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Gallery Section */}
            {pkg.gallery && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold text-primary-900 mb-8 tracking-tight">
                  Gallery
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {pkg.gallery.map((image: string, index: number) => (
                    <motion.div
                      key={index}
                      className="relative h-64 rounded-2xl overflow-hidden group"
                      whileHover={{ scale: 1.05 }}
                    >
                      <img
                        src={image}
                        alt={`${pkg.name} Gallery ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Video Section */}
            {pkg.video && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold text-primary-900 mb-8 tracking-tight">
                  Experience the Journey
                </h3>
                <div className="relative w-full rounded-3xl overflow-hidden bg-black" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src={pkg.video}
                    title={`${pkg.name} Video`}
                    className="absolute top-0 left-0 w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </motion.div>
            )}

            {/* Fun Facts Section */}
            {pkg.funFacts && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl p-8 lg:p-12"
              >
                <h3 className="text-2xl font-semibold text-primary-900 mb-8 tracking-tight">
                  🌴 Fun Facts About This Destination
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {pkg.funFacts.map((fact: string, index: number) => (
                    <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-primary-100">
                      <div className="flex gap-4">
                        <div className="text-3xl font-bold text-primary-900 min-w-12">
                          {String.fromCharCode(97 + index)}
                        </div>
                        <p className="text-neutral-700 leading-relaxed font-light">{fact}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* FAQ Section */}
            {pkg.faqs && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold text-primary-900 mb-8 tracking-tight">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  {pkg.faqs.map((faq: { question: string; answer: string }, index: number) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} />
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-semibold text-primary-900 mb-4 tracking-tight">
              Ready to start your adventure?
            </h2>
            <p className="text-lg text-neutral-600 mb-8 font-light">
              Contact us for current pricing and to customize this tour to your preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
                <button className="px-8 py-4 bg-primary-900 text-white rounded-full font-medium hover:bg-primary-800 transition-colors">
                  Get a Quote
                </button>
              </Link>
              <Link href="/#contact">
                <button className="px-8 py-4 bg-white text-primary-900 border-2 border-primary-900 rounded-full font-medium hover:bg-neutral-50 transition-colors">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
