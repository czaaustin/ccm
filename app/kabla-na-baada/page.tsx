"use client"

import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, ArrowRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function KablaNaBaadaPage() {
  const [selectedSector, setSelectedSector] = useState("")
  const [selectedRegion, setSelectedRegion] = useState("")

  const comparisons = [
    {
      title: "Zahanati - Kiteto, Manyara",
      location: "Manyara",
      sector: "Afya",
      beforeImage: "/placeholder.svg?height=300&width=400",
      afterImage: "/placeholder.svg?height=300&width=400",
      description: "Zahanati iliyokuwa haitumiki tangu 2001, sasa inatoa huduma kwa watu 12,000+",
    },
    {
      title: "Barabara - Singida-Dodoma",
      location: "Singida",
      sector: "Uchukuzi",
      beforeImage: "/placeholder.svg?height=300&width=400",
      afterImage: "/placeholder.svg?height=300&width=400",
      description: "Barabara ya udongo imebadilishwa kuwa lami ya kisasa",
    },
    {
      title: "Shule ya Msingi - Mtwara",
      location: "Mtwara",
      sector: "Elimu",
      beforeImage: "/placeholder.svg?height=300&width=400",
      afterImage: "/placeholder.svg?height=300&width=400",
      description: "Shule iliyokuwa na madarasa 3 sasa ina madarasa 12 ya kisasa",
    },
    {
      title: "Soko la Mboga - Arusha",
      location: "Arusha",
      sector: "Biashara",
      beforeImage: "/placeholder.svg?height=300&width=400",
      afterImage: "/placeholder.svg?height=300&width=400",
      description: "Soko la jadi limebadilishwa kuwa soko la kisasa lenye miundombinu bora",
    },
    {
      title: "Kituo cha Maji - Dodoma",
      location: "Dodoma",
      sector: "Maji",
      beforeImage: "/placeholder.svg?height=300&width=400",
      afterImage: "/placeholder.svg?height=300&width=400",
      description: "Mradi wa maji umeongeza upatikanaji wa maji safi kwa asilimia 60",
    },
    {
      title: "Uwanja wa Ndege - Mwanza",
      location: "Mwanza",
      sector: "Uchukuzi",
      beforeImage: "/placeholder.svg?height=300&width=400",
      afterImage: "/placeholder.svg?height=300&width=400",
      description: "Uwanja wa ndege umeongezwa na kupanuliwa kwa viwango vya kimataifa",
    },
  ]

  const filteredComparisons = comparisons.filter((comparison) => {
    const sectorMatch = selectedSector === "" || comparison.sector.toLowerCase() === selectedSector.toLowerCase()
    const regionMatch = selectedRegion === "" || comparison.location.toLowerCase() === selectedRegion.toLowerCase()
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
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">Kabla na Baada ya Miradi ya Maendeleo</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Picha zinasema zaidi ya maneno – angalia mabadiliko halisi yaliyoletwa na serikali
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 md:py-8 border-b bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Select value={selectedSector} onValueChange={setSelectedSector}>
              <SelectTrigger className="w-full sm:w-48 border-2 hover:border-[#edfa10] focus:border-[#edfa10]">
                <SelectValue placeholder="Chagua Sekta" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="afya">Afya</SelectItem>
                <SelectItem value="elimu">Elimu</SelectItem>
                <SelectItem value="uchukuzi">Uchukuzi</SelectItem>
                <SelectItem value="maji">Maji</SelectItem>
                <SelectItem value="biashara">Biashara</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedRegion} onValueChange={setSelectedRegion}>
              <SelectTrigger className="w-full sm:w-48 border-2 hover:border-[#edfa10] focus:border-[#edfa10]">
                <SelectValue placeholder="Chagua Mkoa" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="manyara">Manyara</SelectItem>
                <SelectItem value="singida">Singida</SelectItem>
                <SelectItem value="mtwara">Mtwara</SelectItem>
                <SelectItem value="arusha">Arusha</SelectItem>
                <SelectItem value="dodoma">Dodoma</SelectItem>
                <SelectItem value="mwanza">Mwanza</SelectItem>
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
                Inaonyesha matokeo {filteredComparisons.length} kati ya {comparisons.length}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Comparisons */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          {filteredComparisons.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">Hakuna matokeo yaliyopatikana kwa vichujio vilivyochaguliwa.</p>
              <Button onClick={clearFilters} className="mt-4 bg-[#049132] hover:bg-[#037a28] text-white">
                Ondoa Vichujio
              </Button>
            </div>
          ) : (
            <div className="space-y-8 md:space-y-12">
              {filteredComparisons.map((comparison, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-lg transition-shadow border-2 hover:border-[#edfa10]"
                >
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-2">
                      {/* Before */}
                      <div className="relative">
                        <div className="absolute top-4 left-4 z-10">
                          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                            KABLA
                          </span>
                        </div>
                        <Image
                          src={comparison.beforeImage || "/placeholder.svg"}
                          alt="Kabla"
                          width={400}
                          height={300}
                          className="w-full h-48 md:h-64 lg:h-80 object-cover"
                        />
                      </div>

                      {/* After */}
                      <div className="relative">
                        <div className="absolute top-4 left-4 z-10">
                          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                            BAADA
                          </span>
                        </div>
                        <Image
                          src={comparison.afterImage || "/placeholder.svg"}
                          alt="Baada"
                          width={400}
                          height={300}
                          className="w-full h-48 md:h-64 lg:h-80 object-cover"
                        />
                      </div>
                    </div>

                    <div className="p-4 md:p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                        <h3 className="text-lg md:text-xl font-bold text-gray-900">{comparison.title}</h3>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span className="text-sm">{comparison.location}</span>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4 text-sm md:text-base">{comparison.description}</p>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                        <span className="bg-[#edfa10] text-[#049132] px-3 py-1 rounded-full text-sm font-medium border-2 border-[#edfa10]">
                          {comparison.sector}
                        </span>
                        <Button
                          variant="outline"
                          className="w-full sm:w-auto border-[#049132] text-[#049132] bg-transparent hover:bg-[#edfa10] hover:border-[#edfa10]"
                        >
                          Soma Zaidi <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Stats Comparison */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
            Mabadiliko ya Takwimu
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-[#edfa10]">
              <CardContent className="p-4 md:p-6 text-center">
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-4">Vituo vya Afya Vijijini</h3>
                <div className="flex items-center justify-center space-x-4">
                  <div>
                    <div className="text-xl md:text-2xl font-bold text-red-500">188</div>
                    <div className="text-xs md:text-sm text-gray-600">2019</div>
                  </div>
                  <ArrowRight className="h-4 md:h-6 w-4 md:w-6 text-gray-400" />
                  <div>
                    <div className="text-xl md:text-2xl font-bold text-green-500">405</div>
                    <div className="text-xs md:text-sm text-gray-600">2024</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-[#edfa10]">
              <CardContent className="p-4 md:p-6 text-center">
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-4">Wanafunzi kwa Darasa</h3>
                <div className="flex items-center justify-center space-x-4">
                  <div>
                    <div className="text-xl md:text-2xl font-bold text-red-500">90</div>
                    <div className="text-xs md:text-sm text-gray-600">2019</div>
                  </div>
                  <ArrowRight className="h-4 md:h-6 w-4 md:w-6 text-gray-400" />
                  <div>
                    <div className="text-xl md:text-2xl font-bold text-green-500">45</div>
                    <div className="text-xs md:text-sm text-gray-600">2024</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-[#edfa10] sm:col-span-2 lg:col-span-1">
              <CardContent className="p-4 md:p-6 text-center">
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-4">Upatikanaji wa Maji</h3>
                <div className="flex items-center justify-center space-x-4">
                  <div>
                    <div className="text-xl md:text-2xl font-bold text-red-500">47%</div>
                    <div className="text-xs md:text-sm text-gray-600">2019</div>
                  </div>
                  <ArrowRight className="h-4 md:h-6 w-4 md:w-6 text-gray-400" />
                  <div>
                    <div className="text-xl md:text-2xl font-bold text-green-500">78%</div>
                    <div className="text-xs md:text-sm text-gray-600">2024</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">Sauti za Wananchi</h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-[#edfa10]">
              <CardContent className="p-4 md:p-6">
                <p className="text-gray-700 italic mb-4 text-sm md:text-base">
                  "Miaka minne iliyopita tulikuwa tunatembea kilomita 20 kupata maji. Sasa kisima kipo kijijini."
                </p>
                <div className="font-medium text-gray-900 text-sm md:text-base">— Mama Asha, Mtwara</div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-[#edfa10]">
              <CardContent className="p-4 md:p-6">
                <p className="text-gray-700 italic mb-4 text-sm md:text-base">
                  "Watoto wangu sasa wanasoma katika madarasa mazuri ya kisasa. Ni tofauti kubwa."
                </p>
                <div className="font-medium text-gray-900 text-sm md:text-base">— Mwalimu John, Singida</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
