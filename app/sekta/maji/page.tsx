import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Droplets, MapPin, Calendar, Download } from "lucide-react"
import Image from "next/image"

export default function MajiPage() {
  const achievedProjects = [
    {
      name: "Mradi wa Maji Safi - Dodoma",
      location: "Dodoma",
      completedDate: "Aprili 2023",
      description: "Mfumo wa maji safi unaotoa huduma kwa watu 500,000",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Visima vya Maji - Singida",
      location: "Singida",
      completedDate: "Julai 2023",
      description: "Visima 150 vya maji katika vijiji mbalimbali",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Mradi wa Maji - Kigoma",
      location: "Kigoma",
      completedDate: "Oktoba 2022",
      description: "Mfumo wa maji unaotumia nishati ya jua",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const ongoingProjects = [
    {
      name: "Bwawa la Maji - Iringa",
      location: "Iringa",
      progress: 75,
      expectedCompletion: "Mei 2024",
      description: "Bwawa jipya la maji kwa ajili ya uongozi",
    },
    {
      name: "Mfumo wa Maji - Mtwara",
      location: "Mtwara",
      progress: 60,
      expectedCompletion: "Agosti 2024",
      description: "Mfumo wa maji wa kisasa",
    },
  ]

  const plannedProjects = [
    {
      name: "Mradi wa Maji - Tabora",
      location: "Tabora",
      startDate: "Januari 2025",
      status: "Bajeti Imeidhinishwa",
      description: "Mfumo mkuu wa maji kwa mkoa wa Tabora",
    },
    {
      name: "Visima vya Maji - Rukwa",
      location: "Rukwa",
      startDate: "Machi 2025",
      status: "Mpango wa Utekelezaji",
      description: "Visima 200 vya maji katika mkoa wa Rukwa",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <section className="relative bg-blue-600 py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <Droplets className="h-16 w-16 text-white mr-4" />
            <h1 className="text-4xl font-bold text-white">Sekta ya Maji</h1>
          </div>
          <p className="text-xl text-white/90 text-center max-w-3xl mx-auto">
            Upatikanaji wa maji safi na salama kwa wananchi wote
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Muhtasari wa Sekta</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Katika kipindi cha miaka 4 iliyopita, Serikali imewekeza kwa kiwango kikubwa katika sekta ya maji ili
              kuhakikisha upatikanaji wa maji safi na salama kwa wananchi wote. Tumefanikisha kujenga mifumo ya maji,
              visima, na miundombinu ya usafishaji wa maji.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Malengo makuu yamekuwa ni kuongeza upatikanaji wa maji safi, kuboresha ubora wa maji, na kuhakikisha
              uendelevu wa rasilimali za maji.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
            <div className="text-center p-4 bg-white rounded-lg border-2 border-[#edfa10] hover:shadow-lg transition-shadow">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">380</div>
              <div className="text-gray-600 text-sm sm:text-base">Miradi ya Maji</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border-2 border-[#edfa10] hover:shadow-lg transition-shadow">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">2M+</div>
              <div className="text-gray-600 text-sm sm:text-base">Watu Waliopata Maji</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border-2 border-[#edfa10] hover:shadow-lg transition-shadow">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">800</div>
              <div className="text-gray-600 text-sm sm:text-base">Visima vya Maji</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border-2 border-[#edfa10] hover:shadow-lg transition-shadow">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">78%</div>
              <div className="text-gray-600 text-sm sm:text-base">Upatikanaji wa Maji</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Tabs */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="achieved" className="max-w-6xl mx-auto">
            <TabsList className="w-full flex-col sm:flex-row gap-1 h-auto p-1 bg-gray-100">
              <TabsTrigger
                value="achieved"
                className="w-full sm:w-auto text-xs sm:text-sm data-[state=active]:bg-[#edfa10] data-[state=active]:text-[#049132] data-[state=active]:border-[#049132] border-2 border-transparent"
              >
                <span className="hidden sm:inline">Miradi Iliyokamilika</span>
                <span className="sm:hidden">Iliyokamilika</span>
              </TabsTrigger>
              <TabsTrigger
                value="ongoing"
                className="w-full sm:w-auto text-xs sm:text-sm data-[state=active]:bg-[#edfa10] data-[state=active]:text-[#049132] data-[state=active]:border-[#049132] border-2 border-transparent"
              >
                <span className="hidden sm:inline">Miradi Inayoendelea</span>
                <span className="sm:hidden">Inaendelea</span>
              </TabsTrigger>
              <TabsTrigger
                value="planned"
                className="w-full sm:w-auto text-xs sm:text-sm data-[state=active]:bg-[#edfa10] data-[state=active]:text-[#049132] data-[state=active]:border-[#049132] border-2 border-transparent"
              >
                <span className="hidden sm:inline">Miradi Iliyopangwa</span>
                <span className="sm:hidden">Iliyopangwa</span>
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
              <Button className="bg-[#049132] hover:bg-[#037a28]">
                <Download className="h-4 w-4 mr-2" />
                Ripoti ya Sekta ya Maji (PDF)
              </Button>
              <Button variant="outline" className="border-[#049132] text-[#049132] bg-transparent">
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
