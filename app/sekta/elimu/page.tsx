import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { GraduationCap, MapPin, Calendar, Download } from "lucide-react"
import Image from "next/image"

export default function ElimuPage() {
  const achievedProjects = [
    {
      name: "Shule za Msingi - Mtwara",
      location: "Mtwara",
      completedDate: "Februari 2023",
      description: "Shule 25 mpya za msingi zilizojengwa katika mkoa wa Mtwara",
      image: "https://drive.google.com/file/d/1vwxS1zlKnLvOuJvbpZLpsHu1bQzVlFXk/view?usp=drive_link",
    },
    {
      name: "Chuo Kikuu cha Teknolojia - Arusha",
      location: "Arusha",
      completedDate: "Mei 2023",
      description: "Chuo kipya cha teknolojia na sayansi",
      image: "https://drive.google.com/file/d/1BpSLlRJWmDdDNsVtrTOykNzJZajp2LdS/view?usp=drive_link",
    },
    {
      name: "Maabara ya Sayansi - Shule za Sekondari",
      location: "Mwanza",
      completedDate: "Septemba 2022",
      description: "Maabara 50 ya sayansi katika shule za sekondari",
      image: "https://drive.google.com/file/d/18SyodQYOG8hmWvtoVKm85A-pXBYN0sBs/view?usp=drive_link",
    },
  ]

  const ongoingProjects = [
    {
      name: "Chuo cha Ualimu - Dodoma",
      location: "Dodoma",
      progress: 80,
      expectedCompletion: "Mei 2024",
      description: "Chuo kipya cha mafunzo ya walimu",
    },
    {
      name: "Shule za Sekondari - Kagera",
      location: "Kagera",
      progress: 65,
      expectedCompletion: "Julai 2024",
      description: "Shule 15 za sekondari katika mkoa wa Kagera",
    },
  ]

  const plannedProjects = [
    {
      name: "Chuo Kikuu cha Kilimo - Morogoro",
      location: "Morogoro",
      startDate: "Januari 2025",
      status: "Bajeti Imeidhinishwa",
      description: "Chuo kikuu kipya cha kilimo na mifugo",
    },
    {
      name: "Vituo vya Mafunzo ya Ufundi - Mbeya",
      location: "Mbeya",
      startDate: "Machi 2025",
      status: "Mpango wa Utekelezaji",
      description: "Vituo 10 vya mafunzo ya ufundi na teknolojia",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-700 py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <GraduationCap className="h-16 w-16 text-white mr-4" />
            <h1 className="text-4xl font-bold text-white">Sekta ya Elimu</h1>
          </div>
          <p className="text-xl text-white/90 text-center max-w-3xl mx-auto">
            Maendeleo ya elimu na mafunzo nchini Tanzania
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Muhtasari wa Sekta</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Katika kipindi cha miaka 4 iliyopita, Serikali imewekeza kwa kiwango kikubwa katika sekta ya elimu ili
              kuhakikisha elimu bora na ya ubora kwa watoto wote wa Tanzania. Tumefanikisha kujenga shule mpya,
              kuboresha miundombinu ya elimu, na kuongeza idadi ya walimu.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Malengo makuu yamekuwa ni kuongeza upatikanaji wa elimu, kuboresha ubora wa mafunzo, na kuhakikisha elimu
              ya msingi inapatikana bure kwa watoto wote.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
            <div className="text-center p-4 bg-white rounded-lg border-2 border-[#edfa10] hover:shadow-lg transition-shadow">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">800</div>
              <div className="text-gray-600 text-sm sm:text-base">Shule Mpya</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border-2 border-[#edfa10] hover:shadow-lg transition-shadow">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">15,000+</div>
              <div className="text-gray-600 text-sm sm:text-base">Walimu Wapya</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border-2 border-[#edfa10] hover:shadow-lg transition-shadow">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">200</div>
              <div className="text-gray-600 text-sm sm:text-base">Maabara</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border-2 border-[#edfa10] hover:shadow-lg transition-shadow">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-600 text-sm sm:text-base">Uandikishaji Shule</div>
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
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Download className="h-4 w-4 mr-2" />
                Ripoti ya Sekta ya Elimu (PDF)
              </Button>
              <Button variant="outline" className="border-blue-600 text-blue-600 bg-transparent">
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
