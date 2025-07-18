import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, MapPin, Users, Clock, Share2, Mic } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TukioDetailPage2() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-r from-[#049132] to-blue-600 py-16">
        <div className="container mx-auto px-4">
          <Link href="/kampeni-2025" className="inline-flex items-center text-white mb-6 hover:underline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Rudi Kampeni 2025
          </Link>
          <div className="max-w-4xl mx-auto">
            <Badge className="bg-[#edfa10] text-[#049132] mb-4">Hotuba</Badge>
            <h1 className="text-4xl font-bold text-white mb-4">Hotuba ya Kitaifa - Dar es Salaam</h1>
            <p className="text-xl text-white/90 mb-6">Hotuba ya kitaifa kuhusu mafanikio na malengo ya baadaye</p>
            <div className="flex flex-wrap gap-6 text-white">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>20 Januari 2025</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>19:00 - 21:00</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Uwanja wa Taifa, Dar es Salaam</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>100,000+ Washiriki</span>
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
                  alt="Hotuba ya Kitaifa"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Kuhusu Hotuba</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Hotuba ya kitaifa itafanyika Dar es Salaam, mji mkuu wa kiuchumi wa Tanzania. Katika hotuba hii, Rais
                  atazungumza kuhusu mafanikio makubwa yaliyopatikana katika kipindi cha miaka 4 ya utawala na kutoa
                  malengo mapya ya maendeleo kwa miaka ijayo.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Hotuba hii itakuwa muhimu kwa wananchi wote wa Tanzania kwani itaonyesha mwelekeo wa serikali katika
                  kuendeleza maendeleo ya nchi. Pia kutakuwa na ufunguzi wa miradi mipya ya maendeleo.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4">Mada Kuu za Hotuba</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex gap-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <Mic className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-medium text-blue-900">Mafanikio ya Miaka 4</h4>
                      <p className="text-blue-700 text-sm">Muhtasari wa miradi mikubwa iliyokamilika</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <Mic className="h-6 w-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-medium text-green-900">Malengo ya Miaka 5 Ijayo</h4>
                      <p className="text-green-700 text-sm">Mpango wa maendeleo kwa kipindi kijacho</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                    <Mic className="h-6 w-6 text-yellow-600 mt-1" />
                    <div>
                      <h4 className="font-medium text-yellow-900">Miradi Mipya</h4>
                      <p className="text-yellow-700 text-sm">Uzinduzi wa miradi mipya ya kimkakati</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                    <Mic className="h-6 w-6 text-purple-600 mt-1" />
                    <div>
                      <h4 className="font-medium text-purple-900">Ushirikiano wa Kimataifa</h4>
                      <p className="text-purple-700 text-sm">Mahusiano ya Tanzania na nchi nyingine</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">Mambo Muhimu</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                  <li>Hotuba ya moja kwa moja kutoka kwa Rais</li>
                  <li>Muhtasari wa mafanikio ya miaka 4</li>
                  <li>Malengo mapya ya maendeleo</li>
                  <li>Uzinduzi wa miradi mipya ya kimkakati</li>
                  <li>Mazungumzo kuhusu ushirikiano wa kimataifa</li>
                  <li>Muda wa maswali na majibu</li>
                </ul>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Maelezo ya Hotuba</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="font-medium text-gray-900">Tarehe</div>
                        <div className="text-gray-600">20 Januari 2025</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Muda</div>
                        <div className="text-gray-600">19:00 - 21:00</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Mahali</div>
                        <div className="text-gray-600">Uwanja wa Taifa, Dar es Salaam</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Washiriki</div>
                        <div className="text-gray-600">100,000+ watu</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Utangazaji</div>
                        <div className="text-gray-600">Moja kwa moja TBC, ITV, Star TV</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Shiriki Hotuba</h3>
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
                      <li>• Hotuba itatolewa kwa lugha za Kiswahili na Kiingereza</li>
                      <li>• Utangazaji wa moja kwa moja kwenye mitandao yote</li>
                      <li>• Nakala ya hotuba itapatikana baadaye</li>
                      <li>• Muda wa maswali na majibu umehifadhiwa</li>
                      <li>• Usalama wa kutosha umeandaliwa</li>
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
                  title: "Ziara ya Miradi - Mwanza",
                  date: "25 Januari 2025",
                  location: "Mwanza",
                  type: "Ziara",
                },
                {
                  title: "Mkutano wa Vijana - Arusha",
                  date: "30 Januari 2025",
                  location: "Arusha",
                  type: "Mkutano",
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
                    <Link href={`/kampeni-2025/tukio-${index + 3}`}>
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
