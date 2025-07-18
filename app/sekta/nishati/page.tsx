import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Zap, MapPin, Calendar, Download } from "lucide-react"
import Image from "next/image"

export default function NishatiPage() {
  const achievedProjects = [
    {
      name: "Bwawa la Umeme - Mto Rufiji",
      location: "Morogoro",
      completedDate: "Juni 2023",
      description: "Bwawa jipya la uzalishaji wa umeme la MW 2,115",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Mradi wa Nishati ya Jua - Shinyanga",
      location: "Shinyanga",
      completedDate: "Septemba 2023",
      description: "Kituo cha nishati ya jua cha MW 50",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Umeme Vijijini - Kigoma",
      location: "Kigoma",
      completedDate: "Januari 2023",
      description: "Mradi wa kufikisha umeme katika vijiji 200",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const ongoingProjects = [
    {
      name: "Bwawa la Umeme - Mto Ruvuma",
      location: "Ruvuma",
      progress: 80,
      expectedCompletion: "Novemba 2024",
      description: "Bwawa jipya la uzalishaji wa umeme",
    },
    {
      name: "Nishati ya Upepo - Singida",
      location: "Singida",
      progress: 65,
      expectedCompletion: "Januari 2025",
      description: "Kituo cha nishati ya upepo",
    },
  ]

  const plannedProjects = [
    {
      name: "Mradi wa Gesi Asilia - Mtwara",
      location: "Mtwara",
      startDate: "Machi 2025",
      status: "Bajeti Imeidhinishwa",
      description: "Kituo cha umeme kutoka gesi asilia",
    },
    {
      name: "Nishati ya Jua - Dodoma",
      location: "Dodoma",
      startDate: "Mei 2025",
      status: "Mpango wa Utekelezaji",
      description: "Kituo kikuu cha nishati ya jua",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <section className="relative bg-gradient-to-r from-yellow-600 to-amber-600 py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <Zap className="h-16 w-16 text-white mr-4" />
            <h1 className="text-4xl font-bold text-white">Sekta ya Nishati</h1>
          </div>
          <p className="text-xl text-white/90 text-center max-w-3xl mx-auto">
            Maendeleo ya uzalishaji na usambazaji wa nishati
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Muhtasari wa Sekta</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Katika kipindi cha miaka 4 iliyopita, Serikali imewekeza kwa kiwango kikubwa katika sekta ya nishati ili
              kuongeza uzalishaji wa umeme na kufikisha umeme kwa wananchi wote. Tumefanikisha kujenga mabwawa mapya ya
              umeme, vituo vya nishati mbadala, na kuendeleza mradi wa umeme vijijini.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Malengo makuu yamekuwa ni kuongeza uzalishaji wa umeme, kutumia nishati mbadala, na kufikisha umeme kwa
              kila kijiji nchini.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">2,500</div>
              <div className="text-gray-600">MW Umeme Mpya</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">5,000+</div>
              <div className="text-gray-600">Vijiji Vimepata Umeme</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">15</div>
              <div className="text-gray-600">Vituo vya Nishati</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">75%</div>
              <div className="text-gray-600">Upatikanaji wa Umeme</div>
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
              <Button className="bg-yellow-600 hover:bg-yellow-700">
                <Download className="h-4 w-4 mr-2" />
                Ripoti ya Sekta ya Nishati (PDF)
              </Button>
              <Button variant="outline" className="border-yellow-600 text-yellow-600 bg-transparent">
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
