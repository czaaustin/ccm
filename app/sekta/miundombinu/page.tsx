import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Building, MapPin, Calendar, Download } from "lucide-react"
import Image from "next/image"

export default function MiundombinuPage() {
  const achievedProjects = [
    {
      name: "Jengo la Ofisi za Serikali - Dodoma",
      location: "Dodoma",
      completedDate: "Aprili 2023",
      description: "Jengo jipya la ofisi za serikali la ghorofa 15",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Uwanja wa Michezo - Dar es Salaam",
      location: "Dar es Salaam",
      completedDate: "Juni 2023",
      description: "Uwanja mkuu wa michezo wa kiwango cha kimataifa",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Majengo ya Makazi - Mwanza",
      location: "Mwanza",
      completedDate: "Oktoba 2022",
      description: "Majengo 200 ya makazi ya bei nafuu",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const ongoingProjects = [
    {
      name: "Kituo cha Biashara - Arusha",
      location: "Arusha",
      progress: 70,
      expectedCompletion: "Agosti 2024",
      description: "Kituo kikuu cha biashara na mauzo",
    },
    {
      name: "Majengo ya Ofisi - Mbeya",
      location: "Mbeya",
      progress: 55,
      expectedCompletion: "Novemba 2024",
      description: "Majengo mapya ya ofisi za serikali",
    },
  ]

  const plannedProjects = [
    {
      name: "Kituo cha Utamaduni - Kilimanjaro",
      location: "Kilimanjaro",
      startDate: "Februari 2025",
      status: "Bajeti Imeidhinishwa",
      description: "Kituo cha utamaduni na sanaa",
    },
    {
      name: "Majengo ya Makazi - Singida",
      location: "Singida",
      startDate: "Aprili 2025",
      status: "Mpango wa Utekelezaji",
      description: "Majengo 150 ya makazi ya kisasa",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <section className="relative bg-gradient-to-r from-gray-600 to-gray-700 py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <Building className="h-16 w-16 text-white mr-4" />
            <h1 className="text-4xl font-bold text-white">Sekta ya Miundombinu</h1>
          </div>
          <p className="text-xl text-white/90 text-center max-w-3xl mx-auto">
            Ujenzi wa miundombinu ya kimsingi na majengo ya umma
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Muhtasari wa Sekta</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Katika kipindi cha miaka 4 iliyopita, Serikali imewekeza kwa kiwango kikubwa katika ujenzi wa miundombinu
              ya kimsingi. Tumefanikisha kujenga majengo mapya ya serikali, makazi ya bei nafuu, na miundombinu ya
              kijamii.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Malengo makuu yamekuwa ni kujenga miundombinu endelevu, kuboresha mazingira ya kazi, na kutoa makazi
              mazuri kwa wananchi.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-600 mb-2">450</div>
              <div className="text-gray-600">Majengo Mapya</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-600 mb-2">2,500+</div>
              <div className="text-gray-600">Makazi Mapya</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-600 mb-2">85</div>
              <div className="text-gray-600">Ofisi za Serikali</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-600 mb-2">98%</div>
              <div className="text-gray-600">Miradi Iliyokamilika</div>
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
              <Button className="bg-gray-600 hover:bg-gray-700">
                <Download className="h-4 w-4 mr-2" />
                Ripoti ya Sekta ya Miundombinu (PDF)
              </Button>
              <Button variant="outline" className="border-gray-600 text-gray-600 bg-transparent">
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
