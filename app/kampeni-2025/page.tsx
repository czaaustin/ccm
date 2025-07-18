"use client"

import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, MapPin, Play, Search, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Kampeni2025Page() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedType, setSelectedType] = useState("")
  const [selectedRegion, setSelectedRegion] = useState("")

  const campaignEvents = [
    {
      title: "Mkutano Mkuu - Dodoma",
      date: "15 Januari 2025",
      location: "Dodoma",
      type: "Mkutano",
      status: "Imepangwa",
      description: "Mkutano mkuu wa uzinduzi wa kampeni za uchaguzi mkuu",
      image: "/placeholder.svg?height=200&width=300",
      attendees: "50,000+",
    },
    {
      title: "Hotuba ya Kitaifa - Dar es Salaam",
      date: "20 Januari 2025",
      location: "Dar es Salaam",
      type: "Hotuba",
      status: "Imepangwa",
      description: "Hotuba ya kitaifa kuhusu mafanikio na malengo ya baadaye",
      image: "/placeholder.svg?height=200&width=300",
      attendees: "100,000+",
    },
    {
      title: "Ziara ya Miradi - Mwanza",
      date: "25 Januari 2025",
      location: "Mwanza",
      type: "Ziara",
      status: "Imepangwa",
      description: "Ziara ya miradi ya maendeleo katika mkoa wa Mwanza",
      image: "/placeholder.svg?height=200&width=300",
      attendees: "25,000+",
    },
    {
      title: "Mkutano wa Wafanyabiashara - Arusha",
      date: "30 Januari 2025",
      location: "Arusha",
      type: "Mkutano",
      status: "Imepangwa",
      description: "Mkutano na wafanyabiashara kuhusu fursa za uongozi",
      image: "/placeholder.svg?height=200&width=300",
      attendees: "15,000+",
    },
    {
      title: "Matangazo ya Miradi Mipya - Mbeya",
      date: "5 Februari 2025",
      location: "Mbeya",
      type: "Matangazo",
      status: "Imepangwa",
      description: "Matangazo ya miradi mipya ya maendeleo mkoa wa Mbeya",
      image: "/placeholder.svg?height=200&width=300",
      attendees: "30,000+",
    },
  ]

  const highlights = [
    {
      title: "Uzinduzi wa Kampeni",
      description: "Picha na video za uzinduzi rasmi wa kampeni za uchaguzi",
      image: "/placeholder.svg?height=300&width=500",
      type: "Video",
    },
    {
      title: "Ahadi Mpya za Maendeleo",
      description: "Ahadi mpya za miradi ya maendeleo kwa miaka ijayo",
      image: "/placeholder.svg?height=300&width=500",
      type: "Matangazo",
    },
  ]

  const filteredEvents = campaignEvents.filter((event) => {
    const searchMatch =
      searchTerm === "" ||
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase())

    const typeMatch = selectedType === "" || event.type.toLowerCase() === selectedType.toLowerCase()
    const regionMatch = selectedRegion === "" || event.location.toLowerCase() === selectedRegion.toLowerCase()

    return searchMatch && typeMatch && regionMatch
  })

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedType("")
    setSelectedRegion("")
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <section className="bg-[#049132] py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">Kampeni 2025</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-4 md:mb-6">
            Safari Inaendelea - Fuata matukio ya kampeni na ahadi mpya za maendeleo
          </p>
          <Badge className="bg-white text-[#049132] text-sm md:text-lg px-3 md:px-4 py-1 md:py-2 border-2 border-white">
            Kampeni Rasmi: Januari - Oktoba 2025
          </Badge>
        </div>
      </section>

      {/* Highlights Carousel */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-center text-gray-900 mb-6 md:mb-8">Mambo Muhimu</h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow border-2 hover:border-[#edfa10]"
              >
                <div className="relative">
                  <Image
                    src={highlight.image || "/placeholder.svg"}
                    alt={highlight.title}
                    width={500}
                    height={300}
                    className="w-full h-48 md:h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <Button size="lg" className="bg-white text-[#049132] hover:bg-[#edfa10] hover:text-[#049132]">
                      <Play className="h-4 md:h-6 w-4 md:w-6 mr-2" />
                      {highlight.type === "Video" ? "Cheza Video" : "Soma Zaidi"}
                    </Button>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#edfa10] text-[#049132] border-2 border-[#edfa10]">{highlight.type}</Badge>
                  </div>
                </div>
                <CardContent className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{highlight.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-6 md:py-8 border-b bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-4">
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Tafuta matukio..."
                className="pl-10 border-2 hover:border-[#edfa10] focus:border-[#edfa10]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-full sm:w-48 border-2 hover:border-[#edfa10] focus:border-[#edfa10]">
                  <SelectValue placeholder="Aina ya Tukio" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mkutano">Mkutano</SelectItem>
                  <SelectItem value="hotuba">Hotuba</SelectItem>
                  <SelectItem value="ziara">Ziara</SelectItem>
                  <SelectItem value="matangazo">Matangazo</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                <SelectTrigger className="w-full sm:w-48 border-2 hover:border-[#edfa10] focus:border-[#edfa10]">
                  <SelectValue placeholder="Chagua Mkoa" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dodoma">Dodoma</SelectItem>
                  <SelectItem value="dar es salaam">Dar es Salaam</SelectItem>
                  <SelectItem value="mwanza">Mwanza</SelectItem>
                  <SelectItem value="arusha">Arusha</SelectItem>
                  <SelectItem value="mbeya">Mbeya</SelectItem>
                </SelectContent>
              </Select>

              <Button
                variant="outline"
                onClick={clearFilters}
                className="w-full sm:w-auto border-[#049132] text-[#049132] hover:bg-[#edfa10] hover:border-[#edfa10] bg-transparent"
              >
                Ondoa Vichujio
              </Button>
            </div>

            {(searchTerm || selectedType || selectedRegion) && (
              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Inaonyesha matokeo {filteredEvents.length} kati ya {campaignEvents.length}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Campaign Events */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">Matukio ya Kampeni</h2>

          {filteredEvents.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">Hakuna matukio yaliyopatikana.</p>
              <Button onClick={clearFilters} className="mt-4 bg-[#049132] hover:bg-[#037a28] text-white">
                Ondoa Vichujio
              </Button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredEvents.map((event, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-lg transition-shadow border-2 hover:border-[#edfa10]"
                >
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    width={300}
                    height={200}
                    className="w-full h-36 md:h-48 object-cover"
                  />
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge className="bg-[#edfa10] text-[#049132] border-2 border-[#edfa10] text-xs">
                        {event.type}
                      </Badge>
                      <Badge variant="outline" className="text-xs border-green-500 text-green-600">
                        {event.status}
                      </Badge>
                    </div>

                    <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 line-clamp-2">{event.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{event.description}</p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600 text-sm">
                        <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <Users className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span>{event.attendees} watarajiwa</span>
                      </div>
                    </div>

                    <Button className="w-full bg-[#049132] hover:bg-[#037a28] text-white" asChild>
                      <Link href={`/kampeni-2025/tukio-${index + 1}`}>Maelezo Zaidi</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Campaign Timeline */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">Ratiba ya Kampeni</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4 md:space-y-6">
              {[
                { month: "Januari 2025", events: "Uzinduzi wa Kampeni", status: "Inaendelea" },
                { month: "Februari - Machi", events: "Ziara za Mikoa", status: "Imepangwa" },
                { month: "Aprili - Mei", events: "Mikutano ya Wananchi", status: "Imepangwa" },
                { month: "Juni - Julai", events: "Matangazo ya Ahadi", status: "Imepangwa" },
                { month: "Agosti - Septemba", events: "Kampeni za Mwisho", status: "Imepangwa" },
                { month: "Oktoba 2025", events: "Uchaguzi Mkuu", status: "Imepangwa" },
              ].map((phase, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow border-2 hover:border-[#edfa10]">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <h3 className="text-base md:text-lg font-bold text-gray-900">{phase.month}</h3>
                        <p className="text-gray-600 text-sm md:text-base">{phase.events}</p>
                      </div>
                      <Badge
                        className={`w-fit ${
                          phase.status === "Inaendelea"
                            ? "bg-green-100 text-green-800 border-green-200"
                            : "bg-blue-100 text-blue-800 border-blue-200"
                        }`}
                      >
                        {phase.status}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-[#049132]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Fuata Kampeni</h2>
          <p className="text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-base">
            Pata habari za hivi karibuni kuhusu matukio ya kampeni na ahadi za maendeleo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#edfa10] text-[#049132] hover:bg-yellow-300 border-2 border-[#edfa10]">
              Jiunge na Kampeni
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#049132] bg-transparent"
            >
              Pata Taarifa
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
