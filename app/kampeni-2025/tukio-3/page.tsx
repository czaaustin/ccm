import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, MapPin, Users, Clock, Share2, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TukioDetailPage3() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-[#049132] py-16">
        <div className="container mx-auto px-4">
          <Link href="/kampeni-2025" className="inline-flex items-center text-white mb-6 hover:underline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Rudi Kampeni 2025
          </Link>
          <div className="max-w-4xl mx-auto">
            <Badge className="bg-[#edfa10] text-[#049132] mb-4">Ziara</Badge>
            <h1 className="text-4xl font-bold text-white mb-4">Ziara ya Miradi - Mwanza</h1>
            <p className="text-xl text-white/90 mb-6">Ziara ya miradi ya maendeleo katika mkoa wa Mwanza</p>
            <div className="flex flex-wrap gap-6 text-white">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>25 Januari 2025</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>09:00 - 16:00</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Mwanza, Tanzania</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>25,000+ Washiriki</span>
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
                  alt="Ziara ya Miradi"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Kuhusu Ziara</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Ziara ya miradi ya maendeleo katika mkoa wa Mwanza itakuwa ni fursa ya kuona kwa macho mafanikio
                  yaliyopatikana katika sekta mbalimbali. Rais pamoja na waziri wake watatembelea miradi mikubwa
                  iliyokamilika na ile inayoendelea.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Ziara hii itajumuisha kutembelea hospitali mpya, shule za kisasa, miradi ya maji, na miundombinu ya
                  uchukuzi. Wananchi watapata fursa ya kuongea moja kwa moja na viongozi wao.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4">Miradi Itakayotembelewa</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex gap-4 p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                    <Eye className="h-6 w-6 text-red-600 mt-1" />
                    <div>
                      <h4 className="font-medium text-red-900">Hospitali ya Rufaa - Mwanza</h4>
                      <p className="text-red-700 text-sm">Hospitali mpya yenye vitanda 500 na vifaa vya kisasa</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <Eye className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-medium text-blue-900">Shule za Sekondari - Mwanza</h4>
                      <p className="text-blue-700 text-sm">Shule 15 mpya za sekondari zenye maabara ya kisasa</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 bg-cyan-50 rounded-lg border-l-4 border-cyan-500">
                    <Eye className="h-6 w-6 text-cyan-600 mt-1" />
                    <div>
                      <h4 className="font-medium text-cyan-900">Mradi wa Maji - Ziwa Victoria</h4>
                      <p className="text-cyan-700 text-sm">Mfumo mpya wa maji unaohudumia watu milioni 1.5</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                    <Eye className="h-6 w-6 text-orange-600 mt-1" />
                    <div>
                      <h4 className="font-medium text-orange-900">Barabara za Lami</h4>
                      <p className="text-orange-700 text-sm">Barabara 200km za lami zilizokamilika</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">Ratiba ya Ziara</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="font-bold text-[#049132] min-w-[80px]">09:00</div>
                    <div>
                      <h4 className="font-medium">Uwasili Mwanza</h4>
                      <p className="text-gray-600 text-sm">Uwasili uwanja wa ndege wa Mwanza</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="font-bold text-[#049132] min-w-[80px]">10:00</div>
                    <div>
                      <h4 className="font-medium">Ziara ya Hospitali</h4>
                      <p className="text-gray-600 text-sm">Kutembelea Hospitali ya Rufaa ya Mwanza</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="font-bold text-[#049132] min-w-[80px]">12:00</div>
                    <div>
                      <h4 className="font-medium">Ziara ya Shule</h4>
                      <p className="text-gray-600 text-sm">Kutembelea shule za sekondari zilizojengwa</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="font-bold text-[#049132] min-w-[80px]">14:00</div>
                    <div>
                      <h4 className="font-medium">Mradi wa Maji</h4>
                      <p className="text-gray-600 text-sm">Kuona mfumo wa maji wa Ziwa Victoria</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="font-bold text-[#049132] min-w-[80px]">15:30</div>
                    <div>
                      <h4 className="font-medium">Mkutano na Wananchi</h4>
                      <p className="text-gray-600 text-sm">Mazungumzo na wananchi wa Mwanza</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Maelezo ya Ziara</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="font-medium text-gray-900">Tarehe</div>
                        <div className="text-gray-600">25 Januari 2025</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Muda</div>
                        <div className="text-gray-600">09:00 - 16:00</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Mkoa</div>
                        <div className="text-gray-600">Mwanza</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Miradi</div>
                        <div className="text-gray-600">4 miradi mikubwa</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Washiriki</div>
                        <div className="text-gray-600">25,000+ watu</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Takwimu za Miradi</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Hospitali</span>
                        <span className="font-medium">1 mpya</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Shule</span>
                        <span className="font-medium">15 mpya</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Watu waliopata maji</span>
                        <span className="font-medium">1.5M</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Barabara (KM)</span>
                        <span className="font-medium">200</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Shiriki Ziara</h3>
                    <div className="space-y-3">
                      <Button className="w-full bg-[#049132] hover:bg-[#037a28]">
                        <Share2 className="h-4 w-4 mr-2" />
                        Shiriki Facebook
                      </Button>
                      <Button variant="outline" className="w-full bg-transparent">
                        <Share2 className="h-4 w-4 mr-2" />
                        Shiriki Twitter
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
