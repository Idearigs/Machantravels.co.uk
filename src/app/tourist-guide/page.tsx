'use client'

import { motion } from 'framer-motion'
import { AlertCircle, MapPin, Utensils, DollarSign, Smartphone, Heart, Compass, Camera, Zap, Users } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const guideCategories = [
  {
    icon: MapPin,
    title: 'Getting Around',
    tips: [
      'Taxis are widely available in cities. Always agree on prices before boarding or use Uber/PickMe apps',
      'Tuk-tuks are the local transport - colorful three-wheelers perfect for short distances in cities',
      'Buses are economical and frequent, but can be crowded. Express buses offer more comfort',
      'Train journeys are scenic and cultural experiences, especially the Kandy-Nuwara Eliya route',
      'Rent a driver for day trips or hire a car with driver for safety and comfort',
      'Avoid driving at night if unfamiliar with roads. Local drivers know the terrain better'
    ]
  },
  {
    icon: Utensils,
    title: 'Food & Dining',
    tips: [
      'Try authentic Sri Lankan curry - spicy but delicious with coconut and local spices',
      'Popular dishes: Kottu Roti, Hoppers, Lamprais, Deviled dishes, and String Hoppers',
      'Ceylon tea is world-famous - enjoy traditional tea at plantations or local shops',
      'Seafood is fresh on the coast - try fish curry and prawns at beachside restaurants',
      'Always check food hygiene - eat at popular local restaurants with good reviews',
      'Vegetarian options are abundant - rice and curry, dhal, vegetable curries are excellent',
      'Tap water is generally safe but use bottled water to be cautious'
    ]
  },
  {
    icon: DollarSign,
    title: 'Money & Costs',
    tips: [
      'Currency is Sri Lankan Rupee (LKR). 1 USD ≈ 330-350 LKR (rates vary)',
      'ATMs are widely available in cities. Withdraw cash for rural areas',
      'Credit cards accepted in hotels and restaurants, but carry cash for local shops',
      'Haggling is expected in markets and for auto-rickshaw rides',
      'Budget meals cost 200-500 LKR. Mid-range restaurants 1,500-3,000 LKR',
      'Hotel prices vary: budget 1,500-4,000 LKR, mid-range 5,000-15,000 LKR per night',
      'Always ask prices before services (tuk-tuk rides, market purchases)'
    ]
  },
  {
    icon: Smartphone,
    title: 'Communication',
    tips: [
      'SIM cards readily available at airports and shops - Dialog, Airtel, Hutch are main providers',
      'Mobile data packages are cheap - 5GB for around 500 LKR',
      'Free WiFi available in most hotels, restaurants, and tourist areas',
      'International roaming can be expensive - local SIM is recommended',
      'Country code: +94. Drop leading 0 when calling from abroad',
      'Important numbers: Police 119, Ambulance 110, Tourist Police 1342',
      'Keep contacts of your hotel and embassy saved'
    ]
  },
  {
    icon: Heart,
    title: 'Health & Safety',
    tips: [
      'Bring sunscreen - UV rays are strong. Apply SPF 50+ frequently',
      'Drink plenty of water to stay hydrated in the tropical climate',
      'Mosquito repellent is essential, especially during evening hours',
      'Get travel insurance that covers medical emergencies and evacuation',
      'Hospitals and pharmacies available in cities. Medicine costs reasonable',
      'Avoid street food if you have sensitive stomach - stick to established restaurants',
      'Take precautions against heat exhaustion - rest in shade during midday',
      'Dengue and malaria exist - use mosquito nets and repellent'
    ]
  },
  {
    icon: Compass,
    title: 'Cultural Etiquette',
    tips: [
      'Buddhism is practiced by 70% - show respect to temples and monks',
      'Remove shoes before entering temples and homes',
      'Don\'t touch people\'s heads - considered disrespectful',
      'Point with open hand, not fingers - more polite',
      'Use right hand for eating and greetings when possible',
      'Dress modestly in temples - cover shoulders and knees',
      'Photography prohibited in sacred areas - always ask permission',
      'Greeting "Ayubowan" is appreciated by locals'
    ]
  },
  {
    icon: Camera,
    title: 'Photography Tips',
    tips: [
      'Always ask permission before photographing people or monks',
      'Photography restricted in temples, sacred sites, and military areas',
      'Best times for photography: early morning (6-8am) and late afternoon (4-6pm)',
      'Protect camera from humid climate and salt water - bring waterproof bag',
      'Hire local guides who know best photo locations',
      'Wildlife photography: early morning safaris give best opportunities',
      'Respect privacy - avoid photographing intimate moments',
      'Backup photos regularly to cloud or external drive'
    ]
  },
  {
    icon: Zap,
    title: 'Practical Information',
    tips: [
      'Voltage: 230V, 50Hz. Bring universal adapter for UK/US plugs',
      'Climate: Tropical. Dry season varies by region (SW coast: Dec-Mar, NE coast: May-Sep)',
      'Best months to visit: December-March for most regions',
      'Rainy season can cause landslides - avoid hiking in heavy rainfall',
      'Time zone: UTC+5:30. Sri Lanka doesn\'t observe daylight saving',
      'Tipping not mandatory but appreciated - 10% in restaurants is good',
      'Public holidays: Pongal (Jan), Independence Day (Feb), Good Friday varies'
    ]
  },
  {
    icon: Users,
    title: 'Meeting Locals',
    tips: [
      'Sri Lankans are warm and welcoming - smiles and "Ayubowan" open many doors',
      'Learning basic Sinhala phrases appreciated - "Thank you" (Bohoma Istuti), "How are you?" (Kohomada?)',
      'Tea culture strong - accepting tea is a good sign of hospitality',
      'Family-oriented culture - asking about families shows respect',
      'Avoid controversial topics - politics, religion conflicts best avoided',
      'Participate in local festivals if timing allows - rich cultural experiences',
      'Support local businesses - small shops, homestays, local guides benefit greatly'
    ]
  }
]

export default function TouristGuide() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative h-[50vh] bg-gradient-to-br from-primary-900 to-primary-800 overflow-hidden pt-24">
          <div className="absolute inset-0 w-full h-full">
            <div className="absolute inset-0 bg-black/30" />
          </div>

          <div className="relative z-10 h-full flex items-center pt-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl"
              >
                <h1 className="text-5xl lg:text-6xl font-semibold text-white mb-4 tracking-tight">
                  Sri Lanka Tourist Guide
                </h1>
                <p className="text-xl text-white/90 font-light">
                  Essential tips and guidelines for your wonderful journey through the Pearl of the Indian Ocean
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-8 bg-primary-50 border-b border-primary-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center gap-3 text-primary-900">
              <AlertCircle size={20} className="flex-shrink-0" />
              <p className="text-sm font-medium">
                This guide provides essential information for visitors. Always check current travel advisories and local conditions before visiting.
              </p>
            </div>
          </div>
        </section>

        {/* Guide Categories */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-semibold text-primary-900 mb-4 tracking-tight">
                Essential Guidelines
              </h2>
              <p className="text-xl text-neutral-600 font-light max-w-2xl mx-auto">
                Everything you need to know to make your Sri Lankan journey safe, comfortable, and unforgettable
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {guideCategories.map((category, index) => {
                const Icon = category.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white border border-neutral-200 rounded-3xl overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    {/* Header */}
                    <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-8 border-b border-primary-200">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-primary-900 flex items-center justify-center flex-shrink-0">
                          <Icon size={24} className="text-white" />
                        </div>
                        <h3 className="text-2xl font-semibold text-primary-900 tracking-tight">
                          {category.title}
                        </h3>
                      </div>
                    </div>

                    {/* Tips List */}
                    <div className="p-8">
                      <ul className="space-y-4">
                        {category.tips.map((tip, tipIndex) => (
                          <motion.li
                            key={tipIndex}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (index * 0.1) + (tipIndex * 0.05) }}
                            className="flex gap-3 items-start"
                          >
                            <span className="w-2 h-2 rounded-full bg-primary-900 mt-2 flex-shrink-0" />
                            <span className="text-neutral-700 leading-relaxed text-sm">
                              {tip}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="py-16 lg:py-24 bg-primary-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-semibold text-primary-900 mb-4 tracking-tight">
                Quick Facts About Sri Lanka
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: 'Official Name', value: 'Democratic Socialist Republic of Sri Lanka' },
                { label: 'Capital', value: 'Colombo (commercial), Sri Jayawardenepura Kotte (administrative)' },
                { label: 'Population', value: 'Approximately 22 million people' },
                { label: 'Language', value: 'Sinhala, Tamil, English widely spoken' },
                { label: 'Currency', value: 'Sri Lankan Rupee (LKR)' },
                { label: 'Time Zone', value: 'UTC+5:30 (No daylight saving)' },
                { label: 'Best Time to Visit', value: 'December to March' },
                { label: 'Area', value: '65,610 km² (Pearl of the Indian Ocean)' },
              ].map((fact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-2xl p-6 border border-primary-200"
                >
                  <p className="text-sm font-semibold text-primary-900 uppercase tracking-wide mb-2">
                    {fact.label}
                  </p>
                  <p className="text-neutral-700 font-light">
                    {fact.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Important Contacts */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-semibold text-primary-900 mb-4 tracking-tight">
                Important Emergency Contacts
              </h2>
              <p className="text-lg text-neutral-600 font-light">
                Keep these numbers handy during your stay
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Police', number: '119' },
                { title: 'Ambulance', number: '110' },
                { title: 'Fire', number: '110' },
                { title: 'Tourist Police', number: '1342' },
                { title: 'Tourist Information', number: '+94 11 2 437 059' },
                { title: 'Directory Assistance', number: '133' },
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-6 border border-primary-200"
                >
                  <p className="text-sm font-semibold text-primary-900 uppercase tracking-wide mb-3">
                    {contact.title}
                  </p>
                  <p className="text-3xl font-semibold text-primary-900">
                    {contact.number}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-primary-900">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-5xl font-semibold text-white mb-6 tracking-tight">
                Ready for Your Sri Lankan Adventure?
              </h2>
              <p className="text-xl text-white/90 font-light mb-8">
                Book a tour with Machan Travels and let our experienced guides take care of everything
              </p>
              <motion.a
                href="#packages"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-4 bg-white text-primary-900 font-semibold rounded-full hover:bg-white/90 transition-colors"
              >
                Explore Our Packages
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
