import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Wheat, MapPin, Calendar, Download } from "lucide-react"
import Image from "next/image"

export default function KilimoPage() {
  const achievedProjects = [
    {
      name: "Ruzuku ya Mbolea",
      location: "Nchi nzima",
      completedDate: "Machi 2024",
      description: "Serikali imetoa mbolea ya ruzuku yenye jumla ya tani 1,454,974.721",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Ongezeko la Matumizi ya Mbolea",
      location: "Nchi nzima",
      completedDate: "Julai 2024",
      description: "Matumizi ya mbolea yameongezeka kutoka tani 363,599 hadi tani 848,884",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Uzalishaji wa Mbolea Ndani ya Nchi",
      location: "Dodoma, Shinyanga",
      completedDate: "Novemba 2023",
      description: "Uzalishaji wa mbolea umeongezeka kutoka tani 32,230 hadi tani 158,628",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Urasimishaji wa Wakulima Wadogo",
      location: "Iramba, Mbinga, Songwe, Chamwino",
      completedDate: "Machi 2024",
      description: "Jumla ya mashamba ya wakulima 9,117 yamepimiwa ardhi na kupatiwa hati",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Usajili wa Wakulima",
      location: "Nchi nzima",
      completedDate: "Machi 2024",
      description: "Wakulima 4,522,011 wamesajiliwa kwenye mfumo wa Pembejeo za Kilimo",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Ongezeko la Wafanyabiashara wa Mbolea",
      location: "Nchi nzima",
      completedDate: "Februari 2025",
      description: "Wafanyabiashara wa mbolea waliopewa leseni wameongezeka kutoka 3,069 hadi 7,302",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Usambazaji wa Mashine za Uchujaji Damu",
      location: "Amana, Mwananyamala, Temeke, Morogoro, Katavi, Tumbi, Chato, Sekoe Toure na UDOM",
      completedDate: "Februari 2025",
      description: "Idadi ya mashine imeongezeka na kufikia mashine 137 kutoka mashine 60",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const ongoingProjects = [
    {
      name: "Mradi wa Umwagiliaji",
      location: "Mikoa mbalimbali",
      progress: 75,
      expectedCompletion: "Desemba 2025",
      description: "Ujenzi wa maghala mapya toka mwezi Agosti 2023 katika Kanda ya Mtwara na Dodoma",
    },
    {
      name: "Usimikaji wa Nishati Mbadala",
      location: "Dodoma, Dar es Salaam, Tanga, Mtwara, Mwanza",
      progress: 60,
      expectedCompletion: "Desemba 2025",
      description: "Mradi wa kuhifadhi mazingira kwa kutumia umeme wa jua",
    },
  ]

  const plannedProjects = [
    {
      name: "Mradi wa Kilimo cha Kisasa - Ruvuma",
      location: "Ruvuma",
      startDate: "Januari 2025",
      status: "Bajeti Imeidhinishwa",
      description: "Mradi wa kilimo cha kisasa na teknolojia",
    },
    {
      name: "Vituo vya Mifugo - Tabora",
      location: "Tabora",
      startDate: "Machi 2025",
      status: "Mpango wa Utekelezaji",
      description: "Vituo 8 vya mifugo na mazao ya mifugo",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <section className="relative bg-gradient-to-r from-green-600 to-green-700 py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <Wheat className="h-16 w-16 text-white mr-4" />
            <h1 className="text-4xl font-bold text-white" data-translate="agriculture-sector">
              Sekta ya Kilimo
            </h1>
          </div>
          <p className="text-xl text-white/90 text-center max-w-3xl mx-auto">
            Maendeleo ya kilimo na mifugo nchini Tanzania
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6" data-translate="sector-overview">
              Muhtasari wa Sekta
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Katika kipindi cha miaka 4 iliyopita, Serikali imewekeza kwa kiwango kikubwa katika sekta ya kilimo na
              mifugo ili kuongeza uzalishaji na kuboresha maisha ya wakulima. Tumefanikisha kujenga miundombinu ya
              umwagiliaji, vituo vya mafunzo, na makaburi ya nafaka.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Malengo makuu yamekuwa ni kuongeza uzalishaji wa mazao, kuboresha teknolojia za kilimo, na kuongeza kipato
              cha wakulima.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">320</div>
              <div className="text-gray-600" data-translate="total-projects">
                Miradi ya Kilimo
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">50,000+</div>
              <div className="text-gray-600" data-translate="beneficiaries">
                Wakulima Walifaidika
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">150</div>
              <div className="text-gray-600" data-translate="grain-storage">
                Makaburi ya Nafaka
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
              <div className="text-gray-600" data-translate="production-increase">
                Ongezeko la Uzalishaji
              </div>
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
                      <Badge className="bg-green-100 text-green-800 mb-3" data-translate="completed">
                        ✅ Umekamilika
                      </Badge>
                      <h3 className="font-bold text-lg mb-2" data-translate="project-name">
                        {project.name}
                      </h3>
                      <div className="flex items-center text-gray-600 mb-2">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="text-sm" data-translate="location">
                          {project.location}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-600 mb-3">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="text-sm" data-translate="completed-date">
                          {project.completedDate}
                        </span>
                      </div>
                      <p className="text-gray-700 text-sm" data-translate="project-description">
                        {project.description}
                      </p>
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
                      <Badge className="bg-yellow-100 text-yellow-800 mb-3" data-translate="ongoing">
                        🔄 Inaendelea
                      </Badge>
                      <h3 className="font-bold text-lg mb-2" data-translate="project-name">
                        {project.name}
                      </h3>
                      <div className="flex items-center text-gray-600 mb-2">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="text-sm" data-translate="location">
                          {project.location}
                        </span>
                      </div>
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span data-translate="progress">Maendeleo</span>
                          <span>{project.progress}%</span>
                        </div>
                        <Progress value={project.progress} className="h-2" />
                      </div>
                      <div className="flex items-center text-gray-600 mb-3">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="text-sm" data-translate="expected-completion">
                          Itakamilika: {project.expectedCompletion}
                        </span>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-6" data-translate="reports-statistics">
              Ripoti na Takwimu
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-green-600 hover:bg-green-700">
                <Download className="h-4 w-4 mr-2" />
                Ripoti ya Sekta ya Kilimo (PDF)
              </Button>
              <Button variant="outline" className="border-green-600 text-green-600 bg-transparent">
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
