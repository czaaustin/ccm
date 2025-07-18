import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Truck, MapPin, Calendar, Download } from "lucide-react"
import Image from "next/image"

export default function UchukuziPage() {
  const achievedProjects = [
    {
      name: "Barabara ya Lami - Dar-Morogoro",
      location: "Dar es Salaam - Morogoro",
      completedDate: "Mei 2023",
      description: "Ukarabati wa barabara ya kilomita 200 kwa lami",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Uwanda wa Ndege - Songwe",
      location: "Mbeya",
      completedDate: "Agosti 2023",
      description: "Uwanda mpya wa ndege wa kimataifa",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Bandari ya Mtwara",
      location: "Mtwara",
      completedDate: "Desemba 2022",
      description: "Upanuzi wa bandari ya Mtwara",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const ongoingProjects = [
    {
      name: "Reli ya Kisasa - SGR",
      location: "Dar es Salaam - Dodoma",
      progress: 85,
      expectedCompletion: "Desemba 2024",
      description: "Reli ya kisasa ya kiwango cha juu",
    },
    {
      name: "Barabara ya Lami - Arusha-Musoma",
      location: "Arusha - Musoma",
      progress: 70,
      expectedCompletion: "Oktoba 2024",
      description: "Ujenzi wa barabara mpya ya lami",
    },
  ]

  const plannedProjects = [
    {
      name: "Uwanda wa Ndege - Kigoma",
      location: "Kigoma",
      startDate: "Februari 2025",
      status: "Bajeti Imeidhinishwa",
      description: "Uwanda mpya wa ndege katika mkoa wa Kigoma",
    },
    {
      name: "Barabara za Vijijini - Lindi",
      location: "Lindi",
      startDate: "Aprili 2025",
      status: "Mpango wa Utekelezaji",
      description: "Barabara 50 za vijijini katika mkoa wa Lindi",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <section className="relative bg-gradient-to-r from-orange-600 to-orange-700 py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <Truck className="h-16 w-16 text-white mr-4" />
            <h1 className="text-4xl font-bold text-white">Sekta ya Uchukuzi</h1>
          </div>
          <p className="text-xl text-white/90 text-center max-w-3xl mx-auto">
            Maendeleo ya miundombinu ya uchukuzi na barabara
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Muhtasari wa Sekta</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Katika kipindi cha miaka 4 iliyopita, Serikali imewekeza kwa kiwango kikubwa katika sekta ya uchukuzi ili
              kuboresha miundombinu ya barabara, reli, na anga. Tumefanikisha kujenga na kukarabati barabara nyingi,
              kujenga uwanda wa ndege, na kuendeleza mradi wa reli ya kisasa.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Malengo makuu yamekuwa ni kurahisisha uchukuzi wa watu na mizigo, kupunguza gharama za uchukuzi, na
              kuunganisha maeneo yote ya nchi.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">1,500</div>
              <div className="text-gray-600">KM za Barabara</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">8</div>
              <div className="text-gray-600">Uwanda wa Ndege</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">3</div>
              <div className="text-gray-600">Bandari Mpya</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">90%</div>
              <div className="text-gray-600">Barabara za Lami</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Tabs */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="achieved" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="achieved" className="data-[state=active]:bg-[#049132] data-[state=active]:text-white">
                Miradi Iliyokamilika
              </TabsTrigger>
              <TabsTrigger value="ongoing" className="data-[state=active]:bg-[#049132] data-[state=active]:text-white">
                Miradi Inayoendelea
              </TabsTrigger>
              <TabsTrigger value="planned" className="data-[state=active]:bg-[#049132] data-[state=active]:text-white">
                Miradi Iliyopangwa
              </TabsTrigger>
            </TabsList>

            <TabsContent value="achieved">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievedProjects.map((project, index) => (
                  <Card key={index} className="overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.name}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <CardContent className="p-6">
                      <Badge className="bg-green-100 text-green-800 mb-3">✅ Umekamilika</Badge>
                      <h3 className="font-bold text-lg mb-2">{project.name}</h3>
                      <div className="flex items-center text-gray-600 mb-2">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="text-sm">{project.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600 mb-3">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="text-sm">{project.completedDate}</span>
                      </div>
                      <p className="text-gray-700 text-sm">{project.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="ongoing">
              <div className="grid md:grid-cols-2 gap-6">
                {ongoingProjects.map((project, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <Badge className="bg-yellow-100 text-yellow-800 mb-3">🔄 Inaendelea</Badge>
                      <h3 className="font-bold text-lg mb-2">{project.name}</h3>
                      <div className="flex items-center text-gray-600 mb-2">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="text-sm">{project.location}</span>
                      </div>
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span>Maendeleo</span>
                          <span>{project.progress}%</span>
                        </div>
                        <Progress value={project.progress} className="h-2" />
                      </div>
                      <div className="flex items-center text-gray-600 mb-3">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="text-sm">Itakamilika: {project.expectedCompletion}</span>
                      </div>
                      <p className="text-gray-700 text-sm">{project.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="planned">
              <div className="grid md:grid-cols-2 gap-6">
                {plannedProjects.map((project, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <Badge className="bg-blue-100 text-blue-800 mb-3">📋 Imepangwa</Badge>
                      <h3 className="font-bold text-lg mb-2">{project.name}</h3>
                      <div className="flex items-center text-gray-600 mb-2">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="text-sm">{project.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600 mb-2">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="text-sm">Itaanza: {project.startDate}</span>
                      </div>
                      <Badge variant="outline" className="mb-3">
                        {project.status}
                      </Badge>
                      <p className="text-gray-700 text-sm">{project.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Ripoti na Takwimu</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-orange-600 hover:bg-orange-700">
                <Download className="h-4 w-4 mr-2" />
                Ripoti ya Sekta ya Uchukuzi (PDF)
              </Button>
              <Button variant="outline" className="border-orange-600 text-orange-600 bg-transparent">
                <Download className="h-4 w-4 mr-2" />
                Takwimu za Mafanikio
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
