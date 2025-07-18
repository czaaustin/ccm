"use client"

import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, MapPin, Quote } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function MashuhudaPage() {
  const [selectedSector, setSelectedSector] = useState("")
  const [selectedRegion, setSelectedRegion] = useState("")

  const testimonials = [
    {
      name: "Mama Asha Mwalimu",
      location: "Mtwara",
      sector: "Afya",
      role: "Mkulima",
      rating: 5,
      testimonial:
        "Miaka minne iliyopita tulikuwa tunatembea kilomita 20 kupata huduma za afya. Sasa kituo cha afya kipo kijijini kwetu na tunapata huduma bora. Asante serikali!",
      image: "/placeholder.svg?height=100&width=100",
      project: "Kituo cha Afya - Mtwara",
    },
    {
      name: "Mwalimu John Mwanga",
      location: "Singida",
      sector: "Elimu",
      role: "Mwalimu",
      rating: 5,
      testimonial:
        "Shule yetu sasa ina madarasa ya kisasa, maktaba na maabara. Watoto wanasoma katika mazingira mazuri. Ni mabadiliko makubwa!",
      image: "/placeholder.svg?height=100&width=100",
      project: "Shule ya Msingi - Singida",
    },
    {
      name: "Bi. Fatuma Hassan",
      location: "Dodoma",
      sector: "Maji",
      role: "Mama Mjasiriamali",
      rating: 5,
      testimonial:
        "Mradi wa maji umebadilisha maisha yetu. Sasa tunapata maji safi nyumbani na biashara yangu ya chakula imekua sana.",
      image: "/placeholder.svg?height=100&width=100",
      project: "Mradi wa Maji - Dodoma",
    },
    {
      name: "Ndugu Hamisi Juma",
      location: "Morogoro",
      sector: "Kilimo",
      role: "Mkulima",
      rating: 5,
      testimonial:
        "Mfumo wa umwagiliaji umeongeza mazao yangu mara tatu. Sasa ninaweza kuuza na kupata kipato cha kutosha kwa familia yangu.",
      image: "/placeholder.svg?height=100&width=100",
      project: "Mradi wa Umwagiliaji - Morogoro",
    },
    {
      name: "Mama Grace Mollel",
      location: "Arusha",
      sector: "Biashara",
      role: "Mfanyabiashara",
      rating: 5,
      testimonial:
        "Soko jipya la kisasa limerahisisha biashara yangu. Wateja wengi wanakuja na mazao yangu yanapata bei nzuri.",
      image: "/placeholder.svg?height=100&width=100",
      project: "Soko la Kisasa - Arusha",
    },
    {
      name: "Bwana Peter Mwakasege",
      location: "Mwanza",
      sector: "Uchukuzi",
      role: "Dereva",
      rating: 5,
      testimonial:
        "Barabara mpya ya lami imerahisisha safari na kupunguza gharama za ukarabati wa magari. Safari sasa ni salama zaidi.",
      image: "/placeholder.svg?height=100&width=100",
      project: "Barabara ya Lami - Mwanza",
    },
    {
      name: "Dkt. Sarah Mwalimu",
      location: "Mbeya",
      sector: "Afya",
      role: "Daktari",
      rating: 5,
      testimonial: "Hospitali yetu sasa ina vifaa vya kisasa na tunaweza kutoa huduma bora zaidi kwa wagonjwa.",
      image: "/placeholder.svg?height=100&width=100",
      project: "Hospitali ya Rufaa - Mbeya",
    },
    {
      name: "Mama Neema Kimaro",
      location: "Kilimanjaro",
      sector: "Maji",
      role: "Mkulima",
      rating: 5,
      testimonial: "Mradi wa maji umerahisisha kilimo changu. Sasa nina maji ya kutosha kwa mazao yangu.",
      image: "/placeholder.svg?height=100&width=100",
      project: "Mradi wa Maji - Kilimanjaro",
    },
  ]

  const stats = [
    { number: "95%", label: "Kuridhika kwa Wananchi" },
    { number: "2.5M+", label: "Watu Walioathiriwa Chanya" },
    { number: "1,200+", label: "Mashuhuda Yaliyokusanywa" },
    { number: "26", label: "Mikoa Yote" },
  ]

  const filteredTestimonials = testimonials.filter((testimonial) => {
    const sectorMatch = selectedSector === "" || testimonial.sector.toLowerCase() === selectedSector.toLowerCase()
    const regionMatch = selectedRegion === "" || testimonial.location.toLowerCase() === selectedRegion.toLowerCase()
    return sectorMatch && regionMatch
  })

  const clearFilters = () => {
    setSelectedSector("")
    setSelectedRegion("")
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <section className="bg-[#049132] py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">Mashuhuda ya Wananchi</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Sikiliza sauti za wananchi kuhusu jinsi miradi ya maendeleo imebadilisha maisha yao
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#049132] mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 md:py-8 border-b bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Select value={selectedSector} onValueChange={setSelectedSector}>
              <SelectTrigger className="w-full sm:w-48 border-2 hover:border-[#edfa10] focus:border-[#edfa10]">
                <SelectValue placeholder="Chagua Sekta" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="afya">Afya</SelectItem>
                <SelectItem value="elimu">Elimu</SelectItem>
                <SelectItem value="maji">Maji</SelectItem>
                <SelectItem value="kilimo">Kilimo</SelectItem>
                <SelectItem value="uchukuzi">Uchukuzi</SelectItem>
                <SelectItem value="biashara">Biashara</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedRegion} onValueChange={setSelectedRegion}>
              <SelectTrigger className="w-full sm:w-48 border-2 hover:border-[#edfa10] focus:border-[#edfa10]">
                <SelectValue placeholder="Chagua Mkoa" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mtwara">Mtwara</SelectItem>
                <SelectItem value="singida">Singida</SelectItem>
                <SelectItem value="dodoma">Dodoma</SelectItem>
                <SelectItem value="morogoro">Morogoro</SelectItem>
                <SelectItem value="arusha">Arusha</SelectItem>
                <SelectItem value="mwanza">Mwanza</SelectItem>
                <SelectItem value="mbeya">Mbeya</SelectItem>
                <SelectItem value="kilimanjaro">Kilimanjaro</SelectItem>
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
          {(selectedSector || selectedRegion) && (
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Inaonyesha matokeo {filteredTestimonials.length} kati ya {testimonials.length}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          {filteredTestimonials.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">Hakuna mashuhuda yaliyopatikana kwa vichujio vilivyochaguliwa.</p>
              <Button onClick={clearFilters} className="mt-4 bg-[#049132] hover:bg-[#037a28] text-white">
                Ondoa Vichujio
              </Button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredTestimonials.map((testimonial, index) => (
                <Card key={index} className="h-full hover:shadow-lg transition-shadow border-2 hover:border-[#edfa10]">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-start gap-3 md:gap-4 mb-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className="w-12 md:w-15 h-12 md:h-15 rounded-full object-cover flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-gray-900 text-sm md:text-base truncate">{testimonial.name}</h3>
                        <p className="text-xs md:text-sm text-gray-600">{testimonial.role}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <MapPin className="h-3 w-3 text-gray-500 flex-shrink-0" />
                          <span className="text-xs text-gray-500 truncate">{testimonial.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    <div className="relative mb-4">
                      <Quote className="h-5 md:h-6 w-5 md:w-6 text-[#049132] opacity-50 absolute -top-1 md:-top-2 -left-1" />
                      <p className="text-gray-700 italic pl-4 md:pl-5 text-sm md:text-base leading-relaxed">
                        {testimonial.testimonial}
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                      <Badge className="bg-[#edfa10] text-[#049132] border-2 border-[#edfa10] text-xs">
                        {testimonial.sector}
                      </Badge>
                      <span className="text-xs text-gray-500 text-right">{testimonial.project}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">Mashuhuda ya Video</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[1, 2, 3].map((i) => (
              <Card
                key={i}
                className="overflow-hidden hover:shadow-lg transition-shadow border-2 hover:border-[#edfa10]"
              >
                <div className="relative">
                  <Image
                    src={`/placeholder.svg?height=200&width=300`}
                    alt={`Video testimonial ${i}`}
                    width={300}
                    height={200}
                    className="w-full h-36 md:h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <Button size="lg" className="bg-white text-[#049132] hover:bg-[#edfa10] hover:text-[#049132]">
                      ▶️ Cheza
                    </Button>
                  </div>
                </div>
                <CardContent className="p-3 md:p-4">
                  <h3 className="font-bold text-sm md:text-base mb-2">Ushuhuda wa Mama Maria - Kilimo</h3>
                  <p className="text-xs md:text-sm text-gray-600">
                    Mkulima kutoka Iringa akieleza jinsi mradi wa umwagiliaji umebadilisha maisha yake
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-[#049132]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Toa Ushuhuda Wako</h2>
          <p className="text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-base">
            Je, umefaidika na mradi wa maendeleo? Tuambie jinsi umebadilika
          </p>
          <Button size="lg" className="bg-[#edfa10] text-[#049132] hover:bg-yellow-300 border-2 border-[#edfa10]">
            Toa Ushuhuda
          </Button>
        </div>
      </section>
    </div>
  )
}
