"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { StatsCounter } from "@/components/stats-counter"
import { TreePine, Droplets, Recycle, Wind, Sun, Leaf, Factory, Fish, Mountain, Zap } from "lucide-react"
import Image from "next/image"

export default function MazingiraPage() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  const environmentStats = [
    {
      icon: TreePine,
      title: "Miti Iliyopandwa",
      value: 15000000,
      suffix: "+",
      description: "Miti iliyopandwa katika miaka 5 iliyopita",
      color: "text-green-600",
    },
    {
      icon: Droplets,
      title: "Mazingira Yaliyohifadhiwa",
      value: 2500,
      suffix: " km²",
      description: "Eneo la mazingira yaliyohifadhiwa",
      color: "text-blue-600",
    },
    {
      icon: Recycle,
      title: "Miradi ya Usafi",
      value: 450,
      suffix: "+",
      description: "Miradi ya usafi na mazingira",
      color: "text-purple-600",
    },
    {
      icon: Wind,
      title: "Nishati Safi",
      value: 35,
      suffix: "%",
      description: "Asilimia ya nishati safi",
      color: "text-cyan-600",
    },
  ]

  const majorProjects = [
    {
      id: "hifadhi-msitu",
      title: "Mradi wa Hifadhi ya Misitu",
      description: "Hifadhi na uongezaji wa misitu ya asili",
      status: "Unaendelea",
      progress: 75,
      budget: "Sh. Bilioni 25",
      location: "Mkoa wa Morogoro, Iringa, na Mbeya",
      startDate: "2022",
      endDate: "2025",
      beneficiaries: "500,000 wakazi",
      image: "/placeholder.svg?height=200&width=400",
      achievements: [
        "Miti milioni 8 imepandwa",
        "Hekta 50,000 za msitu zimehifadhiwa",
        "Vikundi 200 vya mazingira vimeundwa",
        "Kazi 15,000 zimeundwa",
      ],
    },
    {
      id: "usafi-miji",
      title: "Mpango wa Usafi Mijini",
      description: "Kuboresha mazingira ya miji kwa usafi na uongozi wa taka",
      status: "Unaendelea",
      progress: 60,
      budget: "Sh. Bilioni 18",
      location: "Miji mikuu 15",
      startDate: "2023",
      endDate: "2026",
      beneficiaries: "3 milioni wakazi",
      image: "/placeholder.svg?height=200&width=400",
      achievements: [
        "Vituo 150 vya kukusanya taka vimeundwa",
        "Mashine 45 za kusafisha barabara zimesambazwa",
        "Wafanyakazi 2,500 wa usafi wameajiriwa",
        "Miji 8 imepata alama za usafi",
      ],
    },
    {
      id: "nishati-safi",
      title: "Mradi wa Nishati Safi",
      description: "Kuongeza matumizi ya nishati safi na mazingira",
      status: "Unaendelea",
      progress: 45,
      budget: "Sh. Bilioni 40",
      location: "Nchi nzima",
      startDate: "2023",
      endDate: "2027",
      beneficiaries: "10 milioni wakazi",
      image: "/placeholder.svg?height=200&width=400",
      achievements: [
        "Viwanda 25 vya nishati ya jua vimeundwa",
        "Turbine 50 za upepo zimesimamishwa",
        "Kaya 100,000 zimepata nishati safi",
        "Mazingira yamepunguza uchafuzi kwa 30%",
      ],
    },
  ]

  const initiatives = [
    {
      title: "Kampeni ya Kupanda Miti",
      description: "Kila mwananchi apande mti mmoja kwa mwaka",
      icon: TreePine,
      status: "Inaendelea",
      participants: "2.5M",
    },
    {
      title: "Usafi wa Bahari na Maziwa",
      description: "Kuhifadhi mazingira ya majini",
      icon: Fish,
      status: "Inaendelea",
      participants: "500K",
    },
    {
      title: "Mazingira Salama Mijini",
      description: "Kujenga miji yenye mazingira safi",
      icon: Factory,
      status: "Inaendelea",
      participants: "1.2M",
    },
    {
      title: "Hifadhi ya Mlima Kilimanjaro",
      description: "Kuhifadhi mazingira ya mlima Kilimanjaro",
      icon: Mountain,
      status: "Inaendelea",
      participants: "300K",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-cyan-50">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="p-3 sm:p-4 bg-green-100 rounded-full">
                <Leaf className="h-8 w-8 sm:h-12 sm:w-12 text-green-600" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              Sekta ya <span className="text-green-600">Mazingira</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Tunajivunia mafanikio makubwa katika kuhifadhi mazingira, kupanda miti, na kujenga mazingira safi na
              salama kwa vizazi vijavyo.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
            {environmentStats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex justify-center mb-3 sm:mb-4">
                    <div className="p-2 sm:p-3 bg-gray-50 rounded-full">
                      <stat.icon className={`h-6 w-6 sm:h-8 sm:w-8 ${stat.color}`} />
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                    <StatsCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">{stat.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="miradi" className="w-full">
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 mb-6 sm:mb-8">
              <TabsTrigger value="miradi" className="text-sm sm:text-base">
                Miradi Mikuu
              </TabsTrigger>
              <TabsTrigger value="mipango" className="text-sm sm:text-base">
                Mipango ya Mazingira
              </TabsTrigger>
              <TabsTrigger value="malengo" className="text-sm sm:text-base">
                Malengo ya Baadaye
              </TabsTrigger>
            </TabsList>

            <TabsContent value="miradi" className="space-y-6 sm:space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                {majorProjects.map((project) => (
                  <Card
                    key={project.id}
                    className="hover:shadow-lg transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                  >
                    <div className="relative h-40 sm:h-48">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover rounded-t-lg"
                      />
                      <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                        <Badge variant={project.status === "Unaendelea" ? "default" : "secondary"}>
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader className="p-4 sm:p-6">
                      <CardTitle className="text-lg sm:text-xl">{project.title}</CardTitle>
                      <CardDescription className="text-sm sm:text-base">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 sm:p-6 pt-0">
                      <div className="space-y-3 sm:space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-1 sm:mb-2">
                            <span>Maendeleo</span>
                            <span>{project.progress}%</span>
                          </div>
                          <Progress value={project.progress} className="h-2" />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm">
                          <div>
                            <span className="font-medium">Bajeti:</span>
                            <p className="text-gray-600">{project.budget}</p>
                          </div>
                          <div>
                            <span className="font-medium">Eneo:</span>
                            <p className="text-gray-600">{project.location}</p>
                          </div>
                          <div>
                            <span className="font-medium">Muda:</span>
                            <p className="text-gray-600">
                              {project.startDate} - {project.endDate}
                            </p>
                          </div>
                          <div>
                            <span className="font-medium">Wafaidika:</span>
                            <p className="text-gray-600">{project.beneficiaries}</p>
                          </div>
                        </div>

                        {selectedProject === project.id && (
                          <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gray-50 rounded-lg">
                            <h4 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Mafanikio Makuu:</h4>
                            <ul className="space-y-1 sm:space-y-2">
                              {project.achievements.map((achievement, index) => (
                                <li key={index} className="flex items-start text-xs sm:text-sm">
                                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0" />
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="mipango" className="space-y-6 sm:space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {initiatives.map((initiative, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="p-4 sm:p-6">
                      <div className="flex items-center justify-between mb-2 sm:mb-4">
                        <div className="p-2 sm:p-3 bg-green-100 rounded-full">
                          <initiative.icon className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                        </div>
                        <Badge variant="outline">{initiative.status}</Badge>
                      </div>
                      <CardTitle className="text-base sm:text-lg">{initiative.title}</CardTitle>
                      <CardDescription className="text-sm">{initiative.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 sm:p-6 pt-0">
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm text-gray-600">Washiriki:</span>
                        <span className="font-semibold text-sm sm:text-base">{initiative.participants}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="malengo" className="space-y-6 sm:space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex items-center mb-3 sm:mb-4">
                      <Sun className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-500 mr-2 sm:mr-3" />
                      <CardTitle className="text-lg sm:text-xl">Malengo ya Muda Mfupi (2024-2026)</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <ul className="space-y-2 sm:space-y-3">
                      <li className="flex items-start text-sm sm:text-base">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0" />
                        Kupanda miti milioni 20 zaidi
                      </li>
                      <li className="flex items-start text-sm sm:text-base">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0" />
                        Kuongeza nishati safi hadi 50%
                      </li>
                      <li className="flex items-start text-sm sm:text-base">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0" />
                        Kujenga vituo 500 vya kukusanya taka
                      </li>
                      <li className="flex items-start text-sm sm:text-base">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0" />
                        Kuhifadhi mazingira ya bahari
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex items-center mb-3 sm:mb-4">
                      <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500 mr-2 sm:mr-3" />
                      <CardTitle className="text-lg sm:text-xl">Malengo ya Muda Mrefu (2027-2030)</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <ul className="space-y-2 sm:space-y-3">
                      <li className="flex items-start text-sm sm:text-base">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0" />
                        Kufikia nishati safi 80%
                      </li>
                      <li className="flex items-start text-sm sm:text-base">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0" />
                        Kuwa nchi ya kwanza Afrika kwa mazingira safi
                      </li>
                      <li className="flex items-start text-sm sm:text-base">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0" />
                        Kupunguza uchafuzi kwa 70%
                      </li>
                      <li className="flex items-start text-sm sm:text-base">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0" />
                        Kujenga mazingira endelevu
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-xl sm:text-2xl text-center">Changamoto na Fursa</CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                    <div>
                      <h4 className="font-semibold mb-3 sm:mb-4 text-red-600 text-base sm:text-lg">Changamoto:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start text-sm sm:text-base">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0" />
                          Mabadiliko ya tabianchi
                        </li>
                        <li className="flex items-start text-sm sm:text-base">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0" />
                          Ukosefu wa fedha za kutosha
                        </li>
                        <li className="flex items-start text-sm sm:text-base">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0" />
                          Ongezeko la idadi ya watu
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 sm:mb-4 text-green-600 text-base sm:text-lg">Fursa:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start text-sm sm:text-base">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0" />
                          Teknolojia mpya za mazingira
                        </li>
                        <li className="flex items-start text-sm sm:text-base">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0" />
                          Ushirikiano wa kimataifa
                        </li>
                        <li className="flex items-start text-sm sm:text-base">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0" />
                          Ongezeko la uelewa wa mazingira
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
            Tuungane Kuhifadhi Mazingira
          </h2>
          <p className="text-lg sm:text-xl text-green-100 mb-6 sm:mb-8">
            Mazingira ni urithi wetu. Tuungane kujenga mazingira safi na salama kwa vizazi vijavyo.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-base sm:text-lg px-6 sm:px-8">
              Jiunge na Kampeni ya Mazingira
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base sm:text-lg px-6 sm:px-8 bg-transparent border-white text-white hover:bg-white hover:text-green-600"
            >
              Pata Maelezo Zaidi
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
