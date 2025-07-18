import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Factory, MapPin, Calendar, Download } from "lucide-react"
import Image from "next/image"

export default function ViwandaPage() {
  const achievedProjects = [
    {
      name: "Kiwanda cha Nguo - Dar es Salaam",
      location: "Dar es Salaam",
      completedDate: "Mei 2023",
      description: "Kiwanda kipya cha uzalishaji wa nguo na ajira 2,000",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Kiwanda cha Chakula - Arusha",
      location: "Arusha",
      completedDate: "Agosti 2023",
      description: "Kiwanda cha usindikaji wa mazao ya kilimo",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Kiwanda cha Chuma - Mtwara",
      location: "Mtwara",
      completedDate: "Desemba 2022",
      description: "Kiwanda cha uzalishaji wa bidhaa za chuma",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const ongoingProjects = [
    {
      name: "Kiwanda cha Kemikali - Lindi",
      location: "Lindi",
      progress: 70,
      expectedCompletion: "Julai 2024",
      description: "Kiwanda cha uzalishaji wa kemikali za kilimo",
    },
    {
      name: "Kiwanda cha Plastiki - Mwanza",
      location: "Mwanza",
      progress: 55,
      expectedCompletion: "Oktoba 2024",
      description: "Kiwanda cha bidhaa za plastiki",
    },
  ]

  const plannedProjects = [
    {
      name: "Kiwanda cha Teknolojia - Dodoma",
      location: "Dodoma",
      startDate: "Februari 2025",
      status: "Bajeti Imeidhinishwa",
      description: "Kiwanda cha uzalishaji wa vifaa vya teknolojia",
    },
    {
      name: "Viwanda vya Mazao - Morogoro",
      location: "Morogoro",
      startDate: "Aprili 2025",
      status: "Mpango wa Utekelezaji",
      description: "Viwanda 5 vya usindikaji wa mazao",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <section className="relative bg-gradient-to-r from-purple-600 to-purple-700 py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <Factory className="h-16 w-16 text-white mr-4" />
            <h1 className="text-4xl font-bold text-white">Sekta ya Viwanda</h1>
          </div>
          <p className="text-xl text-white/90 text-center max-w-3xl mx-auto">
            Maendeleo ya viwanda na uzalishaji wa bidhaa mbalimbali
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Muhtasari wa Sekta</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Katika kipindi cha miaka 4 iliyopita, Serikali imewekeza kwa kiwango kikubwa katika sekta ya viwanda ili
              kuongeza uzalishaji wa bidhaa za ndani na kuongeza ajira. Tumefanikisha kujenga viwanda vipya, kuboresha
              viwanda vilivyopo, na kuongeza uwezo wa uzalishaji.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Malengo makuu yamekuwa ni kuongeza uzalishaji wa bidhaa za ndani, kuongeza ajira, na kupunguza utegemezi
              wa bidhaa za nje.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">150</div>
              <div className="text-gray-600">Viwanda Vipya</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">80,000+</div>
              <div className="text-gray-600">Ajira Mpya</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">25</div>
              <div className="text-gray-600">Aina za Bidhaa</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">65%</div>
              <div className="text-gray-600">Ongezeko la Uzalishaji</div>
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
              <Button className="bg-purple-600 hover:bg-purple-700">
                <Download className="h-4 w-4 mr-2" />
                Ripoti ya Sekta ya Viwanda (PDF)
              </Button>
              <Button variant="outline" className="border-purple-600 text-purple-600 bg-transparent">
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
