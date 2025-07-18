import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, MapPin, Users, Clock, Share2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TukioDetailPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <section className="bg-[#049132] py-16">
        <div className="container mx-auto px-4">
          <Link href="/kampeni-2025" className="inline-flex items-center text-white mb-6 hover:underline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Rudi Kampeni 2025
          </Link>
          <div className="max-w-4xl mx-auto">
            <Badge className="bg-[#edfa10] text-[#049132] mb-4">Mkutano</Badge>
            <h1 className="text-4xl font-bold text-white mb-4">Mkutano Mkuu - Dodoma</h1>
            <p className="text-xl text-white/90 mb-6">Mkutano mkuu wa uzinduzi wa kampeni za uchaguzi mkuu</p>
            <div className="flex flex-wrap gap-6 text-white">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>15 Januari 2025</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>14:00 - 18:00</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Uwanja wa Jamhuri, Dodoma</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>50,000+ Washiriki</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Mkutano Mkuu"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Kuhusu Tukio</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Mkutano mkuu wa uzinduzi wa kampeni za uchaguzi mkuu utafanyika Dodoma, mji mkuu wa Tanzania. Tukio
                  hili litakuwa ni mwanzo rasmi wa kampeni za uchaguzi wa urais na ubunge wa mwaka 2025.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Katika mkutano huu, Rais atazungumza kuhusu mafanikio ya miaka 4 iliyopita na kutoa ahadi mpya za
                  maendeleo kwa miaka ijayo. Pia kutakuwa na onyesho la miradi mikubwa iliyofanywa na serikali.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4">Ratiba ya Tukio</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="font-bold text-[#049132] min-w-[80px]">14:00</div>
                    <div>
                      <h4 className="font-medium">Ufunguzi wa Tukio</h4>
                      <p className="text-gray-600 text-sm">Karibuni na utangulizi wa tukio</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="font-bold text-[#049132] min-w-[80px]">14:30</div>
                    <div>
                      <h4 className="font-medium">Hotuba ya Rais</h4>
                      <p className="text-gray-600 text-sm">Hotuba kuu ya Rais kuhusu mafanikio na malengo</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="font-bold text-[#049132] min-w-[80px]">16:00</div>
                    <div>
                      <h4 className="font-medium">Onyesho la Miradi</h4>
                      <p className="text-gray-600 text-sm">Onyesho la miradi mikubwa ya maendeleo</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="font-bold text-[#049132] min-w-[80px]">17:30</div>
                    <div>
                      <h4 className="font-medium">Mazungumzo na Wananchi</h4>
                      <p className="text-gray-600 text-sm">Mazungumzo ya moja kwa moja na wananchi</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">Mambo Muhimu</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                  <li>Uzinduzi rasmi wa kampeni za uchaguzi 2025</li>
                  <li>Hotuba ya Rais kuhusu mafanikio ya miaka 4</li>
                  <li>Ahadi mpya za maendeleo kwa miaka ijayo</li>
                  <li>Onyesho la miradi mikubwa ya kitaifa</li>
                  <li>Mazungumzo ya moja kwa moja na wananchi</li>
                </ul>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Maelezo ya Tukio</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="font-medium text-gray-900">Tarehe</div>
                        <div className="text-gray-600">15 Januari 2025</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Muda</div>
                        <div className="text-gray-600">14:00 - 18:00</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Mahali</div>
                        <div className="text-gray-600">Uwanja wa Jamhuri, Dodoma</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Washiriki</div>
                        <div className="text-gray-600">50,000+ watu</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Aina ya Tukio</div>
                        <div className="text-gray-600">Mkutano wa Umma</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Shiriki Tukio</h3>
                    <div className="space-y-3">
                      <Button className="w-full bg-[#049132] hover:bg-[#037a28]">
                        <Share2 className="h-4 w-4 mr-2" />
                        Shiriki Facebook
                      </Button>
                      <Button variant="outline" className="w-full bg-transparent">
                        <Share2 className="h-4 w-4 mr-2" />
                        Shiriki Twitter
                      </Button>
                      <Button variant="outline" className="w-full bg-transparent">
                        <Share2 className="h-4 w-4 mr-2" />
                        Shiriki WhatsApp
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Maelezo ya Ziada</h3>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Tukio ni la bure</li>
                      <li>• Hakuna haja ya kujisajili</li>
                      <li>• Chakula na vinywaji vitapatikana</li>
                      <li>• Usalama wa kutosha umeandaliwa</li>
                      <li>• Usafiri wa bure kutoka vituo mbalimbali</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Events */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Matukio Yanayokuja</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Hotuba ya Kitaifa - Dar es Salaam",
                  date: "20 Januari 2025",
                  location: "Dar es Salaam",
                  type: "Hotuba",
                },
                {
                  title: "Ziara ya Miradi - Mwanza",
                  date: "25 Januari 2025",
                  location: "Mwanza",
                  type: "Ziara",
                },
              ].map((event, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Badge className="bg-[#edfa10] text-[#049132] mb-3">{event.type}</Badge>
                    <h3 className="font-bold text-lg mb-2">{event.title}</h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <Link href={`/kampeni-2025/tukio-${index + 2}`}>
                      <Button variant="outline" className="border-[#049132] text-[#049132] bg-transparent">
                        Soma Zaidi
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
