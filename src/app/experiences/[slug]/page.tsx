'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, ChevronDown, MapPin, Clock, Users } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { useParams } from 'next/navigation'
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

// Experience Data
const experiencesData: Record<string, any> = {
  'ancient-heritage': {
    title: 'Ancient Heritage',
    subtitle: 'Explore 2,500 Years of History',
    description: 'Discover magnificent temples, ancient kingdoms, and archaeological wonders that span over 25 centuries. From the iconic Sigiriya Rock Fortress to the sacred Temple of the Tooth, these ancient sites reveal the cultural richness and architectural brilliance of Sri Lanka.',
    longDescription: 'Sri Lanka is home to some of Asia\'s most important archaeological sites. The Cultural Triangle encompasses three major ancient kingdoms and their capitals, each contributing uniquely to Sri Lankan history. These sites showcase remarkable architectural achievements, intricate stone carvings, and profound Buddhist heritage that has influenced the island\'s culture for thousands of years.',
    image: 'https://images.unsplash.com/photo-1548013146-72e2a6f6e6d8?w=1200&h=600&fit=crop',
    bgColor: 'bg-primary-50',
    textColor: 'text-primary-900',

    subcategories: [
      {
        name: 'Sigiriya Rock Fortress',
        description: 'Ancient 5th century fortress rising 200m above jungle with frescoes and gardens',
        image: 'https://images.unsplash.com/photo-1548013146-72e2a6f6e6d8?w=500&h=400&fit=crop',
        duration: 'Half day',
        highlight: 'Marvel at the ancient paintings and climb 1,200 steps',
      },
      {
        name: 'Temple of the Tooth',
        description: 'Sacred Buddhist temple in Kandy housing a revered tooth relic of Buddha',
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=400&fit=crop',
        duration: '2-3 hours',
        highlight: 'Attend evening prayer ceremonies and cultural dances',
      },
      {
        name: 'Dambulla Cave Temple',
        description: 'Ancient cave complex with 150+ Buddha statues and Buddhist relics from 1st century BC',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop',
        duration: '2 hours',
        highlight: 'Explore five sacred caves filled with ancient artwork',
      },
      {
        name: 'Polonnaruwa Ancient City',
        description: 'Medieval capital with remarkable archaeological monuments and ancient palaces',
        image: 'https://images.unsplash.com/photo-1469022563149-aa64dbd37dae?w=500&h=400&fit=crop',
        duration: '3-4 hours',
        highlight: 'Witness exquisite stone carvings and temple structures',
      },
    ],

    activities: [
      'Historical guided tours',
      'Photography of ancient monuments',
      'Cultural performances and dance shows',
      'Temple blessing ceremonies',
      'Archaeological site exploration',
      'Local artisan workshops',
    ],

    bestTime: 'December to April - Dry season with pleasant weather perfect for exploring outdoor sites.',

    gallery: [
      'https://images.unsplash.com/photo-1548013146-72e2a6f6e6d8?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1469022563149-aa64dbd37dae?w=500&h=400&fit=crop',
    ],
    video: 'https://www.youtube.com/embed/nKuaazJbSto?si=Ej7TPwpW0VfSHm73',

    funFacts: [
      'Sigiriya was built in the 5th century AD by King Kashyapa and remains one of the most iconic archaeological sites in Asia.',
      'The Temple of the Tooth in Kandy houses what is believed to be a tooth relic of Buddha, making it one of the most sacred Buddhist sites worldwide.',
      'Dambulla Cave Temple contains over 150 Buddha statues and dates back to the 1st century BC.',
      'Polonnaruwa served as the capital of Sri Lanka for over 300 years and showcases remarkable medieval architecture.',
    ],

    faqs: [
      {
        question: 'What is the best time to visit ancient heritage sites?',
        answer: 'December to April is ideal for visiting. The weather is dry and pleasant, perfect for exploring outdoor archaeological sites without disruption.',
      },
      {
        question: 'How long does it take to climb Sigiriya?',
        answer: 'The climb typically takes 45-60 minutes to reach the summit of Sigiriya Rock, involving around 1,200 steps. Start early in the morning for the best experience.',
      },
      {
        question: 'Are there dress codes for temple visits?',
        answer: 'Yes, temples require respectful dress. Cover your shoulders and knees. Remove shoes before entering sacred areas and be respectful of ongoing religious ceremonies.',
      },
      {
        question: 'Can I visit all major heritage sites in one day?',
        answer: 'It\'s possible but rushed. We recommend 3-5 days to properly explore Sigiriya, Polonnaruwa, Dambulla, and Kandy at a comfortable pace.',
      },
      {
        question: 'Are professional guides available?',
        answer: 'Yes, expert guides are highly recommended. They provide fascinating historical context and help you understand the significance of each site.',
      },
    ],
  },

  'pristine-beaches': {
    title: 'Pristine Beaches',
    subtitle: 'Crystal Waters & Golden Sands',
    description: 'Experience some of the world\'s most beautiful beaches with crystal-clear waters and golden sands. From the crescent-shaped Mirissa Beach perfect for whale watching to the secluded coves of the southern coast, Sri Lanka\'s beaches offer both relaxation and adventure.',
    longDescription: 'Sri Lanka\'s coastline stretches over 1,300 kilometers and features diverse beaches suitable for every traveler. Whether you seek thrilling water sports, peaceful relaxation, marine wildlife encounters, or colonial heritage exploration, the island\'s pristine beaches deliver unforgettable experiences.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=600&fit=crop',
    bgColor: 'bg-primary-50',
    textColor: 'text-primary-900',

    subcategories: [
      {
        name: 'Mirissa Beach',
        description: 'Crescent-shaped beach renowned for blue whale watching December-April',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&h=400&fit=crop',
        duration: '2-3 days',
        highlight: 'Best whale watching in the world with friendly locals',
      },
      {
        name: 'Unawatuna Beach',
        description: 'Consistently ranked top 10 beaches in Indian Ocean, perfect for swimming',
        image: 'https://images.unsplash.com/photo-1473496169865-658ba7c44d8a?w=500&h=400&fit=crop',
        duration: '1-2 days',
        highlight: 'Crystal clear waters and vibrant beach culture',
      },
      {
        name: 'Galle Fort Beach',
        description: 'Historic UNESCO site overlooking pristine beaches with colonial charm',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop',
        duration: '1 day',
        highlight: 'Walk 17th century ramparts with ocean views',
      },
      {
        name: 'Secret Beach Coves',
        description: 'Hidden secluded beaches perfect for privacy and natural beauty',
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=400&fit=crop',
        duration: '1-2 days',
        highlight: 'Escape crowds and find untouched paradise',
      },
    ],

    activities: [
      'Whale watching tours',
      'Surfing and bodyboarding',
      'Snorkeling and diving',
      'Beach relaxation',
      'Sunset viewing',
      'Water sports',
      'Seafood dining',
      'Fort exploration',
    ],

    bestTime: 'November to March - Calm seas and ideal weather for all beach activities.',

    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1473496169865-658ba7c44d8a?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=400&fit=crop',
    ],
    video: 'https://www.youtube.com/embed/lrQUIyzUEyc?si=Ej7TPwpW0VfSHm73',

    funFacts: [
      'Mirissa Beach is world-famous for blue whale watching, with peaks from December to April when migrating whales pass through.',
      'Unawatuna Beach is consistently ranked among the top 10 most beautiful beaches in the Indian Ocean.',
      'Galle Fort, overlooking pristine beaches, was built by the Portuguese in 1588 and is a UNESCO World Heritage Site.',
      'The southern coast has some of the least crowded and most pristine beaches, perfect for those seeking solitude and natural beauty.',
    ],

    faqs: [
      {
        question: 'What is the best time for beach holidays?',
        answer: 'November to March offers calm seas and perfect weather for beach activities. December to February is peak season with the warmest water temperatures.',
      },
      {
        question: 'Is whale watching really possible?',
        answer: 'Yes! Mirissa is one of the best whale watching destinations. Blue whales and sperm whales migrate through Sri Lankan waters December to April.',
      },
      {
        question: 'Are beaches safe for swimming?',
        answer: 'Most beaches are safe during the dry season. Always check local conditions and swim in designated areas. Some areas have strong currents - ask locals.',
      },
      {
        question: 'What water sports are available?',
        answer: 'Surfing, snorkeling, scuba diving, and paddleboarding are popular. Many beaches have facilities for water sports and equipment rentals.',
      },
      {
        question: 'Can I visit multiple beaches in one trip?',
        answer: 'Absolutely! The southern coast has many beaches within driving distance. You can explore different beaches over several days easily.',
      },
    ],
  },

  'wildlife-safari': {
    title: 'Wildlife Safari',
    subtitle: 'Encounter Nature\'s Majesty',
    description: 'Immerse yourself in Sri Lanka\'s incredible biodiversity. Home to leopards, elephants, and over 215 bird species, the island\'s national parks offer unparalleled opportunities to witness exotic wildlife in their natural habitats.',
    longDescription: 'Sri Lanka is a wildlife paradise with diverse ecosystems ranging from tropical rainforests to grasslands and wetlands. The island\'s protected areas harbor some of the world\'s rarest species including the Asian elephant, Sri Lankan leopard, and endemic birds found nowhere else on Earth.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&h=600&fit=crop',
    bgColor: 'bg-primary-50',
    textColor: 'text-primary-900',

    subcategories: [
      {
        name: 'Yala National Park',
        description: 'Highest leopard concentration worldwide with diverse wildlife and ecosystems',
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=500&h=400&fit=crop',
        duration: '2-3 days',
        highlight: 'See leopards, elephants, and over 215 bird species',
      },
      {
        name: 'Udawalawe National Park',
        description: 'Large elephant herds and diverse birdlife in pristine wilderness',
        image: 'https://images.unsplash.com/photo-1544550717-e3f7a5d34f0d?w=500&h=400&fit=crop',
        duration: '2 days',
        highlight: 'Guaranteed elephant sightings and safari experience',
      },
      {
        name: 'Sinharaja Rainforest',
        description: 'UNESCO site with 60% endemic species and jungle trekking adventures',
        image: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=500&h=400&fit=crop',
        duration: '1-2 days',
        highlight: 'Explore virgin rainforest and rare endemic species',
      },
      {
        name: 'Bundala National Park',
        description: 'Wetland sanctuary with migratory birds and coastal wildlife',
        image: 'https://images.unsplash.com/photo-1469022563149-aa64dbd37dae?w=500&h=400&fit=crop',
        duration: '1 day',
        highlight: 'Bird watching paradise with 170+ bird species',
      },
    ],

    activities: [
      'Jeep safaris',
      'Wildlife photography',
      'Bird watching tours',
      'Rainforest trekking',
      'Nature walks',
      'Expert naturalist guides',
    ],

    bestTime: 'December to March - Dry season with best wildlife viewing and comfortable weather.',

    gallery: [
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1544550717-e3f7a5d34f0d?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1511497584788-876760111969?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1469022563149-aa64dbd37dae?w=500&h=400&fit=crop',
    ],
    video: 'https://www.youtube.com/embed/UrmG7oZbkYw?si=Ej7TPwpW0VfSHm73',

    funFacts: [
      'Yala National Park has the highest concentration of leopards in the world, with over 50 individuals in the park.',
      'Asian elephants in Sri Lanka can weigh up to 5 tons and stand 3 meters tall, making them gentle giants of the jungle.',
      'Sinharaja Rainforest is a UNESCO World Heritage Site with over 60% endemic species found nowhere else on Earth.',
      'Over 215 bird species have been recorded in Sri Lanka, with many found exclusively in national parks and rainforests.',
    ],

    faqs: [
      {
        question: 'What is the best time for safaris?',
        answer: 'December to March is peak season with dry weather and optimal wildlife viewing. Early morning (6-9 AM) safaris are most productive.',
      },
      {
        question: 'Will we definitely see leopards?',
        answer: 'Leopards are elusive but sightings are possible. Multi-day safaris increase chances. We guarantee elephant and bird sightings.',
      },
      {
        question: 'How long are safari drives?',
        answer: 'Full-day safaris typically run 4-6 hours with multiple vehicles. Morning and evening safaris are available for different wildlife activity.',
      },
      {
        question: 'Is the rainforest trek difficult?',
        answer: 'The trek is moderate with varied terrain. Most fitness levels can manage it with good hiking boots. Professional guides lead all treks.',
      },
      {
        question: 'What should I bring for safaris?',
        answer: 'Wear neutral-colored clothing, bring binoculars, camera with zoom lens, insect repellent, and sunscreen. Comfortable hiking boots essential.',
      },
    ],
  },

  'culinary-journey': {
    title: 'Culinary Journey',
    subtitle: 'Taste Authentic Sri Lankan Flavors',
    description: 'Embark on a gastronomic adventure through Sri Lanka\'s vibrant culinary traditions. Sample authentic curries, fresh seafood, and world-famous Ceylon tea. Discover the rich flavors and spices that define Sri Lankan cuisine.',
    longDescription: 'Sri Lankan cuisine reflects centuries of cultural influences blending local traditions with Arabian, Indian, and colonial heritage. Each region offers unique dishes showcasing fresh ingredients, aromatic spices, and cooking techniques passed down through generations.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
    bgColor: 'bg-primary-50',
    textColor: 'text-primary-900',

    subcategories: [
      {
        name: 'Tea Plantations & Tasting',
        description: 'Visit working tea estates in Ella and enjoy authentic Ceylon tea tastings',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop',
        duration: 'Half day',
        highlight: 'Learn tea production from leaf to cup',
      },
      {
        name: 'Traditional Curry Cooking',
        description: 'Master authentic Sri Lankan curry recipes with professional local chefs',
        image: 'https://images.unsplash.com/photo-1469022563149-aa64dbd37dae?w=500&h=400&fit=crop',
        duration: '3-4 hours',
        highlight: 'Hands-on cooking class with fresh local ingredients',
      },
      {
        name: 'Street Food & Local Dining',
        description: 'Experience vibrant street food culture and local favorites',
        image: 'https://images.unsplash.com/photo-1507831039040-4a8f57021b15?w=500&h=400&fit=crop',
        duration: '2-3 hours',
        highlight: 'Taste authentic kottu roti, hoppers, and deviled dishes',
      },
      {
        name: 'Seafood Dining Experiences',
        description: 'Fresh-caught seafood prepared right on the beach or fine dining',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=400&fit=crop',
        duration: 'Evening',
        highlight: 'Sunset seafood dinners with ocean views',
      },
    ],

    activities: [
      'Tea plantation tours',
      'Cooking classes',
      'Market visits',
      'Spice garden tours',
      'Street food tasting',
      'Fine dining experiences',
      'Brewery visits',
      'Traditional drum roasting',
    ],

    bestTime: 'Year-round, but best during dry season for tea plantation visits.',

    gallery: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1469022563149-aa64dbd37dae?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1507831039040-4a8f57021b15?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=400&fit=crop',
    ],
    video: 'https://www.youtube.com/embed/UrmG7oZbkYw?si=Ej7TPwpW0VfSHm73',

    funFacts: [
      'Ceylon tea is world-renowned and Sri Lanka exports about 340,000 tonnes annually, making it a top global tea producer.',
      'Sri Lankan curry is famous worldwide for its blend of aromatic spices including cinnamon, cloves, cardamom, and fresh coconut.',
      'The traditional hoppers and lamprais dishes showcase centuries of culinary heritage blending local and colonial influences.',
      'Jaffna cuisine in the north and coastal seafood specialties offer regional variations of authentic Sri Lankan flavors.',
    ],

    faqs: [
      {
        question: 'Is Sri Lankan food very spicy?',
        answer: 'Yes, it can be. Most dishes are flavorful with multiple spices. We can arrange for mild versions if you prefer less heat.',
      },
      {
        question: 'Can I visit tea plantations and factories?',
        answer: 'Absolutely! Tea plantation tours and factory visits are included. You\'ll see tea production and enjoy authentic Ceylon tea tastings.',
      },
      {
        question: 'Are there vegetarian options?',
        answer: 'Yes, Sri Lankan cuisine has excellent vegetarian dishes. The coast also offers fresh seafood specialties.',
      },
      {
        question: 'What is the most famous Sri Lankan dish?',
        answer: 'Lamprais and hoppers are signature dishes. Kottu roti (chopped roti with curry) and deviled dishes are also beloved street foods.',
      },
      {
        question: 'Can I take a cooking class?',
        answer: 'Yes, cooking classes are available in most areas. Learn to prepare authentic Sri Lankan dishes from local chefs.',
      },
    ],
  },
}

export default function ExperienceDetail() {
  const params = useParams()
  const slug = params?.slug as string
  const experience = experiencesData[slug]

  if (!experience) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-semibold text-primary-900 mb-4">Experience Not Found</h1>
          <Link href="/" className="text-primary-800 hover:underline">
            Back to Home
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
        <section className={`relative h-[60vh] ${experience.bgColor} overflow-hidden pt-32`}>
          <div className="absolute inset-0 w-full h-full">
            <img
              src={experience.image}
              alt={experience.title}
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-primary-900 opacity-40" />
          </div>

          <div className="relative z-10 h-full flex items-center pt-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
              <Link href="/#features">
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors"
                >
                  <ArrowLeft size={20} />
                  <span>Back</span>
                </motion.button>
              </Link>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h1 className="text-5xl lg:text-7xl font-semibold text-white mb-4 tracking-tight">
                  {experience.title}
                </h1>
                <p className="text-2xl text-white/90 font-light mb-6">
                  {experience.subtitle}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="space-y-20">
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="max-w-3xl">
                  <p className="text-xl text-neutral-700 leading-relaxed mb-4">
                    {experience.description}
                  </p>
                  <p className="text-lg text-neutral-600 leading-relaxed">
                    {experience.longDescription}
                  </p>
                </div>
              </motion.div>

              {/* Best Time to Visit */}
              {experience.bestTime && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-primary-50 rounded-3xl p-8 lg:p-12 border border-primary-200"
                >
                  <div className="flex items-start gap-4">
                    <Clock size={28} className="text-primary-900 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-semibold text-primary-900 mb-3">Best Time to Visit</h3>
                      <p className="text-neutral-700 leading-relaxed">{experience.bestTime}</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Subcategories/Cards */}
              {experience.subcategories && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-semibold text-primary-900 mb-10 tracking-tight">
                    Explore {experience.title}
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    {experience.subcategories.map((item: any, index: number) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white border-2 border-primary-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer"
                      >
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-semibold text-primary-900 mb-2">{item.name}</h3>
                          <p className="text-neutral-600 mb-4 font-light">{item.description}</p>
                          <div className="flex items-center gap-4 text-sm text-neutral-600 mb-4">
                            <div className="flex items-center gap-1">
                              <Clock size={16} />
                              <span>{item.duration}</span>
                            </div>
                          </div>
                          <p className="text-primary-900 font-medium mb-4">{item.highlight}</p>
                          <button className="w-full px-4 py-2 bg-primary-900 text-white rounded-lg font-medium hover:bg-primary-800 transition-colors">
                            Learn More
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Activities */}
              {experience.activities && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-semibold text-primary-900 mb-8 tracking-tight">
                    Activities & Experiences
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {experience.activities.map((activity: string, index: number) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="bg-primary-50 rounded-xl p-4 border border-primary-200"
                      >
                        <p className="text-primary-900 font-medium">{activity}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Gallery */}
              {experience.gallery && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-semibold text-primary-900 mb-8 tracking-tight">
                    Gallery
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {experience.gallery.map((image: string, index: number) => (
                      <motion.div
                        key={index}
                        className="relative h-64 rounded-2xl overflow-hidden group"
                        whileHover={{ scale: 1.05 }}
                      >
                        <img
                          src={image}
                          alt={`${experience.title} Gallery ${index + 1}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Video */}
              {experience.video && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-semibold text-primary-900 mb-8 tracking-tight">
                    Experience in Action
                  </h2>
                  <div className="relative w-full rounded-3xl overflow-hidden bg-black" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      src={experience.video}
                      title={`${experience.title} Video`}
                      className="absolute top-0 left-0 w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                </motion.div>
              )}

              {/* Fun Facts */}
              {experience.funFacts && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-primary-50 rounded-3xl p-8 lg:p-12 border border-primary-200"
                >
                  <h2 className="text-3xl font-semibold text-primary-900 mb-8 tracking-tight">
                    🌴 Interesting Facts
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {experience.funFacts.map((fact: string, index: number) => (
                      <div key={index} className="bg-white rounded-2xl p-6 border border-primary-100">
                        <div className="flex gap-4">
                          <div className="text-3xl font-bold text-primary-900 min-w-12">
                            {String.fromCharCode(49 + index)}
                          </div>
                          <p className="text-neutral-700 leading-relaxed font-light">{fact}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* FAQ */}
              {experience.faqs && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-semibold text-primary-900 mb-8 tracking-tight">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {experience.faqs.map((faq: { question: string; answer: string }, index: number) => (
                      <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                  </div>
                </motion.div>
              )}

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-primary-900 rounded-3xl p-12 text-center"
              >
                <h2 className="text-3xl font-semibold text-white mb-4">Ready to Experience This?</h2>
                <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                  Contact us to plan your perfect {experience.title.toLowerCase()} adventure.
                </p>
                <Link href="/#contact">
                  <button className="px-8 py-4 bg-white text-primary-900 rounded-full font-medium hover:bg-neutral-100 transition-colors">
                    Get in Touch
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
