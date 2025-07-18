"use client"

import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Users, Search, Filter } from "lucide-react"
import {DriveImage} from "@/components/drive-image"
import Link from "next/link"
import { useState } from "react"

export default function MiradiMikubwaPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSector, setSelectedSector] = useState("")
  const [selectedStatus, setSelectedStatus] = useState("")
  const [selectedRegion, setSelectedRegion] = useState("")

  const flagshipProjects = [
    {
      name: "Mradi wa Umeme wa Stiegler's Gorge",
      sectors: ["Umeme"],
      location: "Morogoro, Lindi, Pwani",
      region: "Morogoro, Lindi, Pwani",
      status: "Inaendelea",
      statusColor: "bg-yellow-100 text-yellow-800",
      description: "Mradi wa kufua umeme unaotarajiwa kuzalisha megawati 2115 za umeme",
      image: "https://drive.google.com/file/d/10HnpqIIJcEieSfT7txxJNopJNODKKOzC/view?usp=drive_link",
      beneficiaries: "2.5 Million watu",
      budget: "TSh 6.6 Trilioni",
      completion: "91.72%",
      achievements: [
        "Bwawa limefikia ujazo wa mita 164.81",
        "Lita bilioni 14.66 zimejazwa",
        "5,000 biashara ndogo zimeongezeka",
      ],
    },
    {
      name: "Hospitali ya Rufaa Mpya - Mwanza",
      sectors: ["Afya"],
      location: "Mwanza",
      region: "Mwanza",
      status: "Inaendelea",
      statusColor: "bg-yellow-100 text-yellow-800",
      description: "Hospitali ya kisasa yenye vitanda 500 na vifaa vya hali ya juu ya upasuaji wa moyo na ubongo",
      image: "/placeholder.svg?height=250&width=400",
      beneficiaries: "3.2 Million watu",
      budget: "TSh 120 Bilioni",
      completion: "75%",
      achievements: [
        "Jengo kuu limekamilika 90%",
        "Vifaa vya matibabu vimefikishwa 80%",
        "Mafunzo ya watumishi wa afya yameanza",
      ],
    },
    {
      name: "Mradi wa Maji Makuu - Dodoma",
      sectors: ["Maji"],
      location: "Dodoma",
      region: "Dodoma",
      status: "Umekamilika",
      statusColor: "bg-green-100 text-green-800",
      description: "Mfumo wa maji unaohudumia watu milioni 2.1 katika na mkoa wa Dodoma",
      image: "/placeholder.svg?height=250&width=400",
      beneficiaries: "2.1 Million watu",
      budget: "TSh 95 Bilioni",
      completion: "100%",
      achievements: [
        "2.1 milioni ya watu wanapata maji safi",
        "500 km ya mabomba yamejengwa",
        "50 vituo vya kusafishia maji vimejengwa",
      ],
    },
    {
      name: "Uwanja wa Ndege wa Kimataifa - Songwe",
      sectors: ["Uchukuzi", "Miundombinu"],
      location: "Mbeya",
      region: "Mbeya",
      status: "Inaendelea",
      statusColor: "bg-yellow-100 text-yellow-800",
      description: "Uwanja wa ndege wa kisasa unaoweza kushughulikia ndege kubwa za kimataifa",
      image: "/placeholder.svg?height=250&width=400",
      beneficiaries: "5 Million watu",
      budget: "TSh 100 Bilioni",
      completion: "60%",
      achievements: [
        "Runway ya kimataifa imekamilika",
        "Terminal building inaendelea",
        "Miundombinu ya usalama imeanza",
      ],
    },
    {
      name: "Mradi wa Kilimo cha Kisasa - Ihemi",
      sectors: ["Kilimo"],
      location: "Iringa",
      region: "Iringa",
      status: "Imepangwa",
      statusColor: "bg-blue-100 text-blue-800",
      description: "Mradi wa kilimo cha kisasa wenye teknolojia ya umwagiliaji wa kisasa",
      image: "/placeholder.svg?height=250&width=400",
      beneficiaries: "100,000 wakulima",
      budget: "TSh 65 Bilioni",
      completion: "15%",
      achievements: [
        "5,000 wakulima wamepokea mafunzo",
        "Miundombinu ya umwagiliaji imeanza",
        "Makaburi ya nafaka yamejengwa 30%",
      ],
    },
    {
      name: "Mradi wa Reli ya Kisasa - SGR Phase II",
      sectors: ["Uchukuzi"],
      location: "Dar es Salaam - Morogoro",
      region: "Dar es Salaam",
      status: "Inaendelea",
      statusColor: "bg-yellow-100 text-yellow-800",
      description: "Ujenzi wa reli ya kisasa kutoka Dar es Salaam hadi Morogoro",
      image: "/placeholder.svg?height=250&width=400",
      beneficiaries: "10 Million watu",
      budget: "TSh 2.1 Trilioni",
      completion: "45%",
      achievements: [
        "300 km ya reli yamejengwa",
        "5 vituo vya reli vimekamilika",
        "Ajira 5,000 za moja kwa moja zimeundwa",
      ],
    },
  ]

  const filteredProjects = flagshipProjects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSector = selectedSector === "" || project.sectors.includes(selectedSector)
    const matchesStatus = selectedStatus === "" || project.status === selectedStatus
    const matchesRegion = selectedRegion === "" || project.region === selectedRegion

    return matchesSearch && matchesSector && matchesStatus && matchesRegion
  })

  

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedSector("")
    setSelectedStatus("")
    setSelectedRegion("")
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <section className="bg-[#049132] py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Miradi Mikubwa ya Kitaifa</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-6">
            Miradi ya kimkakati inayoleta mabadiliko ya kweli kwa taifa zima
          </p>
          <div className="flex items-center justify-center gap-2 text-white">
            <div className="w-4 h-4 bg-white rounded-full"></div>
            <span>Uongozi wa maendeleo endelevu</span>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="h-5 w-5 text-gray-600" />
              <span className="font-medium text-gray-700">Chuja kwa:</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 sm:gap-4">
              <div className="flex items-center space-x-2">
                <Search className="h-5 w-5 text-gray-500 flex-shrink-0" />
                <Input
                  placeholder="Tafuta mradi..."
                  className="flex-1 border-2 border-gray-200 focus:border-[#edfa10]"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <Select value={selectedSector} onValueChange={setSelectedSector}>
                <SelectTrigger className="border-2 border-gray-200 focus:border-[#edfa10]">
                  <SelectValue placeholder="Chagua Sekta" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Umeme">Umeme</SelectItem>
                  <SelectItem value="Afya">Afya</SelectItem>
                  <SelectItem value="Maji">Maji</SelectItem>
                  <SelectItem value="Uchukuzi">Uchukuzi</SelectItem>
                  <SelectItem value="Kilimo">Kilimo</SelectItem>
                  <SelectItem value="Miundombinu">Miundombinu</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                <SelectTrigger className="border-2 border-gray-200 focus:border-[#edfa10]">
                  <SelectValue placeholder="Chagua Mkoa" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Mbeya">Mbeya</SelectItem>
                  <SelectItem value="Mwanza">Mwanza</SelectItem>
                  <SelectItem value="Dodoma">Dodoma</SelectItem>
                  <SelectItem value="Iringa">Iringa</SelectItem>
                  <SelectItem value="Dar es Salaam">Dar es Salaam</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger className="border-2 border-gray-200 focus:border-[#edfa10]">
                  <SelectValue placeholder="Chagua Hali" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Umekamilika">Umekamilika</SelectItem>
                  <SelectItem value="Inaendelea">Inaendelea</SelectItem>
                  <SelectItem value="Imepangwa">Imepangwa</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex flex-col sm:flex-row gap-2">
                <Button
                  variant="outline"
                  onClick={clearFilters}
                  className="border-2 border-[#edfa10] hover:bg-[#edfa10] hover:text-[#049132] bg-transparent"
                >
                  Ondoa Chujio
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-6">
              <p className="text-gray-600">
                Onyesha miradi {filteredProjects.length} ya {flagshipProjects.length}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {filteredProjects.map((project, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-[#edfa10]"
                >
                  <div className="relative">
                    <DriveImage
                      src={project.image}
                      alt={project.name}
                      width={400}
                      height={250}
                      className="w-full h-40 sm:h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className={`${project.statusColor} text-xs sm:text-sm`}>{project.status}</Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-[#049132] text-white text-xs sm:text-sm border-2 border-[#edfa10]">
                        {project.completion}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-4 sm:p-6">
                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-3">
                      {project.sectors.map((sector) => (
                        <Badge key={sector} variant="outline" className="text-xs border-[#edfa10] text-[#049132]">
                          {sector}
                        </Badge>
                      ))}
                    </div>

                    <h3 className="font-bold text-base sm:text-lg mb-2 line-clamp-2">{project.name}</h3>

                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1 flex-shrink-0" />
                      <span className="text-xs sm:text-sm">{project.location}</span>
                    </div>

                    <div className="flex items-center text-gray-600 mb-3">
                      <Users className="h-3 w-3 sm:h-4 sm:w-4 mr-1 flex-shrink-0" />
                      <span className="text-xs sm:text-sm">{project.beneficiaries}</span>
                    </div>

                    <p className="text-gray-700 text-xs sm:text-sm mb-4 line-clamp-3">{project.description}</p>

                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-xs sm:text-sm">
                        <span className="text-gray-600">Bajeti:</span>
                        <span className="font-medium text-[#049132]">{project.budget}</span>
                      </div>
                      <div className="flex justify-between text-xs sm:text-sm">
                        <span className="text-gray-600">Maendeleo:</span>
                        <span className="font-medium">{project.completion}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-xs sm:text-sm font-medium text-gray-900 mb-2">Mafanikio:</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {project.achievements.slice(0, 2).map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-[#049132] mr-1 flex-shrink-0">•</span>
                            <span className="line-clamp-2">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link href={`/miradi-mikubwa/mradi-${index + 1}`}>
                      <Button className="w-full bg-[#049132] hover:bg-[#037a28] border-2 border-[#edfa10] text-sm">
                        Angalia Maelezo Kamili
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">Hakuna miradi inayolingana na vichujio vyako</p>
                <Button onClick={clearFilters} className="mt-4 bg-transparent" variant="outline">
                  Ondoa Vichujio
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="py-16 bg-[#049132]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Unataka Kuona Miradi Mingine?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Tembelea kurasa za sekta mbalimbali kuona miradi zote zilizotekelezwa
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/sekta">
              <Button size="lg" className="bg-[#edfa10] text-[#049132] hover:bg-yellow-300">
                Angalia Sekta Zote
              </Button>
            </Link>
            <Link href="/mafanikio">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#049132] bg-transparent"
              >
                Tazama Mafanikio Yote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
