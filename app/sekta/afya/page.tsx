import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import {
  Heart,
  MapPin,
  Calendar,
  Download,
  Building,
  Users,
  TrendingUp,
  Activity,
  Stethoscope,
  Ambulance,
  Pill,
  Microscope,
  Shield,
  Factory,
  Eye,
  ArrowUp,
  CheckCircle,
} from "lucide-react"
import { DriveImage } from "@/components/drive-image"

export default function AfyaPage() {
  const keyStats = [
    {
      icon: Building,
      value: "1,061",
      label: "Vituo Vipya vya Afya",
      description: "Vituo vimeongezeka kutoka 8,549 (2021) hadi 9,610 (2024)",
      color: "text-red-600",
    },
    {
      icon: Users,
      value: "35,450",
      label: "Watumishi Wapya wa Afya",
      description: "Wataalam wa kada mbalimbali wameajiriwa (2021-2023)",
      color: "text-red-600",
    },
    {
      icon: TrendingUp,
      value: "6.722T",
      label: "Uwekezaji (TSh)",
      description: "Kiasi kilichotolewa kwa sekta ya afya katika miaka 3",
      color: "text-red-600",
    },
    {
      icon: Activity,
      value: "84%",
      label: "Upatikanaji wa Dawa",
      description: "Ongezeko kutoka 58% (2022) hadi 84% (2023)",
      color: "text-red-600",
    },
  ]

  const infrastructureProjects = [
    {
      name: "Hospitali ya Rufaa ya Kanda - Mtwara",
      status: "Umekamilika",
      description: "Awamu ya kwanza ya ujenzi imekamilika na imeanza kutoa huduma",
      location: "Mtwara",
      completedDate: "2023",
      image: "https://drive.google.com/file/d/1k6r_exp-CIsBhjqedZh_8p90EfkZSNFu/view?usp=drive_link",
      details:
        "Hospitali hii ya rufaa ya kanda imeanza kutoa huduma za kibingwa kwa wananchi wa mkoa wa Mtwara na mikoa jirani.",
    },
    {
      name: "Hospitali ya Rufaa ya Kanda - Chato",
      status: "Umekamilika",
      description: "Awamu ya pili ya ujenzi imekamilika na imeanza kutoa huduma",
      location: "Chato",
      completedDate: "2023",
      image: "/placeholder.svg?height=200&width=300",
      details: "Hospitali hii inasaidia kupunguza msongamano wa wagonjwa katika hospitali za rufaa za mikoa.",
    },
    {
      name: "Hospitali za Rufaa za Mikoa Mipya",
      status: "Inaendelea",
      description: "Ujenzi wa hospitali za mikoa mipya 5: Katavi, Njombe, Songwe, Simiyu, Geita",
      location: "Mikoa Mipya",
      progress: 85,
      image: "/placeholder.svg?height=200&width=300",
      details: "Hospitali hizi zimeanza kutoa huduma kwa wananchi wa maeneo husika na zitakamilika kabisa mwaka 2024.",
    },
    {
      name: "Uhamishaji wa Hospitali 4",
      status: "Umekamilika",
      description: "Hospitali za Shinyanga, Singida, Mara na Ruvuma zimehamishwa majengo mapya",
      location: "Mikoa Mbalimbali",
      completedDate: "2023",
      image: "/placeholder.svg?height=200&width=300",
      details:
        "Hospitali hizi zimehamishwa kutoka majengo yake ya zamani kwa kujenga hospitali mpya katika maeneo mapya.",
    },
  ]

  const medicalEquipment = [
    {
      equipment: "CT SCAN",
      before: 13,
      new: 32,
      total: 45,
      description: "Huduma za CT Scan sasa zinapatikana katika hospitali 27 kati ya 28 za rufaa za mikoa",
    },
    {
      equipment: "MRI",
      before: 7,
      new: 6,
      total: 13,
      description: "Mashine za MRI zimeongezeka kwa asilimia 86",
    },
    {
      equipment: "Digital X-Ray",
      before: 147,
      new: 199,
      total: 346,
      description: "Ongezeko la asilimia 135 la mashine za X-Ray za kidijitali",
    },
    {
      equipment: "Ultrasound",
      before: 476,
      new: 192,
      total: 668,
      description: "Mashine za ultrasound zimeongezeka kwa asilimia 40",
    },
    {
      equipment: "Mitambo ya Oksijeni",
      before: 0,
      new: 21,
      total: 21,
      description: "Mitambo ya kuzalisha hewa tiba ya oksijeni kwa wagonjwa mahututi",
    },
  ]

  const maternalHealthStats = [
    {
      metric: "Wajawazito wanaojifungulia vituo vya afya",
      before: "63% (2021)",
      current: "85% (2023)",
      target: "95% (2030)",
      improvement: "+22%",
    },
    {
      metric: "Vifo vya wajawazito (kwa vizazi hai 100,000)",
      before: "556 (2016)",
      current: "104 (2023)",
      target: "Kupungua zaidi",
      improvement: "-81%",
    },
    {
      metric: "Vifo vya watoto chini ya miaka 5 (kwa vizazi hai 1,000)",
      before: "67 (2016)",
      current: "43 (2022)",
      target: "Kupungua zaidi",
      improvement: "-36%",
    },
    {
      metric: "Vifo vya watoto chini ya mwaka 1 (kwa vizazi hai 1,000)",
      before: "43 (2016)",
      current: "33 (2023)",
      target: "Kupungua zaidi",
      improvement: "-23%",
    },
  ]

  const specializedServices = [
    {
      service: "Upandikizaji wa Figo",
      patients: 27,
      recent: "16 wagonjwa (2023/24)",
      description: "Huduma za upandikizaji wa figo zinapatikana nchini",
    },
    {
      service: "Upandikizaji Vifaa vya Usikivu",
      patients: 25,
      recent: "11 watoto (2023/24)",
      description: "Watoto wamewekewa vifaa vya usikivu (Cochlea implants)",
    },
    {
      service: "Upasuaji wa Moyo kwa Tundu Dogo",
      patients: 5954,
      recent: "2,289 wagonjwa (2023/24)",
      description: "Upasuaji wa moyo bila kufungua kifua",
    },
    {
      service: "Kuweka Goti Bandia",
      patients: 662,
      recent: "385 wagonjwa (2023/24)",
      description: "Huduma za kuweka goti bandia",
    },
    {
      service: "Upandikizaji Uloto",
      patients: 15,
      recent: "Tangu 2021",
      description: "Upandikizaji wa uloto (Bone Marrow Transplant)",
    },
  ]

  const emergencyServices = [
    {
      title: "Majengo ya Huduma za Dharura (EMD)",
      completed: 105,
      before: 7,
      description: "EMD 23 za hospitali za kanda na mikoa, EMD 66 za halmashauri",
      beneficiaries: "262,260 wateja wamenufaika",
    },
    {
      title: "Ambulances",
      total: 727,
      distributed: 327,
      description: "Magari ya kubebea wagonjwa yamenunuliwa na kusambazwa",
      impact: "Kusaidia kusafirisha wagonjwa wa dharura",
    },
  ]

  const diseaseControl = [
    {
      disease: "UKIMWI",
      tested2023: "8,145,576",
      positive2023: "163,131",
      onTreatment: "1,663,651",
      deaths2023: "22,000",
      improvement: "Kupungua kwa vifo kutoka 29,000 (2022)",
    },
    {
      disease: "Malaria",
      tested2023: "19.8M",
      positive2023: "3.46M",
      deaths2023: "1,540",
      improvement: "Kupungua kwa vifo kutoka 1,735 (2022)",
    },
    {
      disease: "Kifua Kikuu (TB)",
      tested2023: "440,988",
      positive2023: "90,585",
      deaths2023: "18,100",
      improvement: "Kupungua kwa vifo kutoka 25,800 (2022)",
    },
  ]

  const msdAchievements = [
    {
      title: "Upatikanaji wa Bidhaa za Afya",
      current: "67% (Feb 2025)",
      before: "42% (2021/22)",
      improvement: "+25%",
      description: "Bidhaa ashiria zimeongezeka kutoka 290 hadi 382",
    },
    {
      title: "Mashine za Dialysis",
      total: 137,
      before: 60,
      hospitals: "15 hospitali",
      description: "Gharama imepungua kutoka TSh 200,000-230,000 hadi chini ya TSh 100,000",
    },
    {
      title: "Bidhaa za Afya ya Kinywa",
      value: "TSh 21.5B",
      equipment: "647 viti, 331 mashine za mionzi",
      period: "Miaka 4",
      description: "Vifaa vya kisasa vya huduma za kinywa na meno",
    },
    {
      title: "Kiwanda cha Barakoa",
      capacity: "6M barakoa/mwaka",
      types: "Barakoa za kawaida na N95",
      status: "Kinazalisha",
      description: "Kiwanda kinakidhi mahitaji ya nchi nzima",
    },
    {
      title: "Kiwanda cha Gloves - Idofi",
      capacity: "24.4M gloves/mwaka",
      investment: "TSh 16B",
      coverage: "60% ya mahitaji ya nchi",
      description: "Kiwanda pekee cha kuzalisha mipira ya mikono nchini",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <section className="relative bg-gradient-to-r from-red-600 to-red-700 py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <Heart className="h-16 w-16 text-white mr-4" />
            <h1 className="text-4xl font-bold text-white" data-translate="health-sector">
              Sekta ya Afya
            </h1>
          </div>
          <p className="text-xl text-white/90 text-center max-w-3xl mx-auto">
            Maendeleo ya huduma za afya na miundombinu ya kitabibu nchini Tanzania - Miaka 4 ya Mafanikio
          </p>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Takwimu Kuu za Mafanikio</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {keyStats.map((stat, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow border-2 border-transparent hover:border-[#edfa10]"
              >
                <CardContent className="p-4 sm:p-6">
                  <stat.icon className={`h-8 w-8 sm:h-12 sm:w-12 ${stat.color} mx-auto mb-3 sm:mb-4`} />
                  <div className="text-2xl sm:text-3xl font-bold text-red-600 mb-2">{stat.value}</div>
                  <div className="text-gray-900 font-medium mb-2 text-sm sm:text-base">{stat.label}</div>
                  <div className="text-xs sm:text-sm text-gray-600">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Tabs defaultValue="iliyokamilika" className="container mx-auto px-4 py-16">
        <TabsList className="w-full flex-col sm:flex-row gap-1 h-auto p-1 bg-gray-100">
          <TabsTrigger
            value="iliyokamilika"
            className="w-full sm:w-auto text-xs sm:text-sm data-[state=active]:bg-[#edfa10] data-[state=active]:text-[#049132] data-[state=active]:border-[#049132] border-2 border-transparent"
          >
            <span className="hidden sm:inline">Miradi Iliyokamilika</span>
            <span className="sm:hidden">Iliyokamilika</span>
          </TabsTrigger>
          <TabsTrigger
            value="inaendelea"
            className="w-full sm:w-auto text-xs sm:text-sm data-[state=active]:bg-[#edfa10] data-[state=active]:text-[#049132] data-[state=active]:border-[#049132] border-2 border-transparent"
          >
            <span className="hidden sm:inline">Miradi Inayoendelea</span>
            <span className="sm:hidden">Inaendelea</span>
          </TabsTrigger>
          <TabsTrigger
            value="iliyopangwa"
            className="w-full sm:w-auto text-xs sm:text-sm data-[state=active]:bg-[#edfa10] data-[state=active]:text-[#049132] data-[state=active]:border-[#049132] border-2 border-transparent"
          >
            <span className="hidden sm:inline">Miradi Iliyopangwa</span>
            <span className="sm:hidden">Iliyopangwa</span>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="iliyokamilika" className="mt-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {infrastructureProjects
              .filter((project) => project.status === "Umekamilika")
              .map((project, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6">
                    <Badge className="mb-3 bg-green-100 text-green-800">✅ Umekamilika</Badge>
                    <h3 className="font-bold text-lg mb-2">{project.name}</h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{project.location}</span>
                    </div>
                    {project.completedDate && (
                      <div className="flex items-center text-gray-600 mb-3">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="text-sm">Umekamilika: {project.completedDate}</span>
                      </div>
                    )}
                    <p className="text-gray-700 text-sm mb-4">{project.description}</p>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="border-red-600 text-red-600 bg-transparent text-sm">
                          Angalia Maelezo
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>{project.name}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <p>{project.details}</p>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <strong>Eneo:</strong> {project.location}
                            </div>
                            <div>
                              <strong>Hali:</strong> {project.status}
                            </div>
                            {project.completedDate && (
                              <div>
                                <strong>Umekamilika:</strong> {project.completedDate}
                              </div>
                            )}
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>
        <TabsContent value="inaendelea" className="mt-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {infrastructureProjects
              .filter((project) => project.status === "Inaendelea")
              .map((project, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <DriveImage
                    src={project.image}
                    alt={project.name}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6">
                    <Badge className="mb-3 bg-yellow-100 text-yellow-800">🔄 Inaendelea</Badge>
                    <h3 className="font-bold text-lg mb-2">{project.name}</h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{project.location}</span>
                    </div>
                    {project.completedDate && (
                      <div className="flex items-center text-gray-600 mb-3">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="text-sm">Umekamilika: {project.completedDate}</span>
                      </div>
                    )}
                    {project.progress && (
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span>Maendeleo</span>
                          <span>{project.progress}%</span>
                        </div>
                        <Progress value={project.progress} className="h-2" />
                      </div>
                    )}
                    <p className="text-gray-700 text-sm mb-4">{project.description}</p>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="border-red-600 text-red-600 bg-transparent text-sm">
                          Angalia Maelezo
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>{project.name}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <p>{project.details}</p>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <strong>Eneo:</strong> {project.location}
                            </div>
                            <div>
                              <strong>Hali:</strong> {project.status}
                            </div>
                            {project.completedDate && (
                              <div>
                                <strong>Umekamilika:</strong> {project.completedDate}
                              </div>
                            )}
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>
        <TabsContent value="iliyopangwa" className="mt-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div>No planned projects</div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Medical Equipment */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Vifaa vya Matibabu Vimepya</h2>
          <p className="text-center text-gray-600 mb-8">Thamani ya TSh 290.9 Bilioni</p>
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-4 sm:gap-6">
              {medicalEquipment.map((item, index) => (
                <Card key={index} className="border-2 border-transparent hover:border-[#edfa10] transition-colors">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                      <h3 className="font-bold text-base sm:text-lg">{item.equipment}</h3>
                      <Badge className="bg-red-100 text-red-600 w-fit">Jumla: {item.total}</Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-lg sm:text-2xl font-bold text-gray-600">{item.before}</div>
                        <div className="text-xs sm:text-sm text-gray-500">Zilizokuwepo</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg sm:text-2xl font-bold text-red-600">+{item.new}</div>
                        <div className="text-xs sm:text-sm text-gray-500">Mpya</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg sm:text-2xl font-bold text-green-600">{item.total}</div>
                        <div className="text-xs sm:text-sm text-gray-500">Jumla</div>
                      </div>
                    </div>
                    <p className="text-gray-700 text-xs sm:text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Maternal Health */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Afya ya Mama na Mtoto</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div>
              <h3 className="text-xl font-bold mb-6">Maboresho ya Miundombinu</h3>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Jengo la Mama na Mtoto - Mbeya</h4>
                    <p className="text-sm text-gray-600 mb-2">Thamani: TSh 13.2 Bilioni</p>
                    <Badge className="bg-green-100 text-green-800">Umekamilika</Badge>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Maternity Blocks - Hospitali 6</h4>
                    <p className="text-sm text-gray-600 mb-2">Sekou Toure, Geita, Simiyu, Mawenzi, Njombe, Songwe</p>
                    <p className="text-sm text-gray-600 mb-2">Thamani: TSh 71.1 Bilioni</p>
                    <Badge className="bg-yellow-100 text-yellow-800">Inaendelea</Badge>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Vituo vya CEMoNC</h4>
                    <p className="text-sm text-gray-600 mb-2">Ongezeko: 340 (2021) → 523 (2023)</p>
                    <Badge className="bg-blue-100 text-blue-800">+183 Vituo</Badge>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Neonatal Care Units (NCU)</h4>
                    <p className="text-sm text-gray-600 mb-2">Ongezeko: 14 (2018) → 189 (2023)</p>
                    <Badge className="bg-purple-100 text-purple-800">+175 Hospitali</Badge>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Matokeo ya Mafanikio</h3>
              <div className="space-y-4">
                {maternalHealthStats.map((stat, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-2">{stat.metric}</h4>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="text-gray-500">Zamani:</span>
                          <div className="font-medium">{stat.before}</div>
                        </div>
                        <div>
                          <span className="text-gray-500">Sasa:</span>
                          <div className="font-medium text-green-600">{stat.current}</div>
                        </div>
                      </div>
                      <div className="flex items-center mt-2">
                        <ArrowUp className="h-4 w-4 text-green-600 mr-1" />
                        <span className="text-green-600 font-medium">{stat.improvement}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Huduma za Ubingwa na Ubingwa Bobezi</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {specializedServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Stethoscope className="h-8 w-8 text-red-600 mb-4" />
                  <h3 className="font-bold text-lg mb-2">{service.service}</h3>
                  <div className="text-2xl font-bold text-red-600 mb-2">{service.patients}</div>
                  <div className="text-sm text-gray-600 mb-2">{service.recent}</div>
                  <p className="text-gray-700 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Tiba Utalii (Medical Tourism)</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600">6,931</div>
                    <div className="text-gray-600">Wagonjwa wa kigeni (2023)</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600">3,957</div>
                    <div className="text-gray-600">Wagonjwa wa kigeni (2022)</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600">75</div>
                    <div className="text-gray-600">Wagonjwa wa kigeni (2021)</div>
                  </div>
                </div>
                <p className="text-gray-700 mt-4">
                  Wagonjwa wanatoka nchi za Comoro, Malawi, Burundi, Zambia, Congo DRC, Uganda, Zimbabwe na Kenya
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Huduma za Dharura na Ajali</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {emergencyServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Ambulance className="h-8 w-8 text-red-600 mr-3" />
                    <h3 className="font-bold text-lg">{service.title}</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-2xl font-bold text-red-600">{service.completed || service.total}</div>
                      <div className="text-sm text-gray-600">Jumla</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">{service.before || service.distributed}</div>
                      <div className="text-sm text-gray-600">{service.before ? "Zamani" : "Zimesambazwa"}</div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm mb-2">{service.description}</p>
                  <p className="text-green-600 text-sm font-medium">{service.beneficiaries || service.impact}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Disease Control */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Udhibiti wa Magonjwa</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {diseaseControl.map((disease, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Shield className="h-8 w-8 text-red-600 mr-3" />
                    <h3 className="font-bold text-lg">{disease.disease}</h3>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm text-gray-600">Waliopimwa (2023)</div>
                      <div className="font-bold text-red-600">{disease.tested2023}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Walio na ugonjwa</div>
                      <div className="font-bold text-orange-600">{disease.positive2023}</div>
                    </div>
                    {disease.onTreatment && (
                      <div>
                        <div className="text-sm text-gray-600">Wanatumia dawa</div>
                        <div className="font-bold text-blue-600">{disease.onTreatment}</div>
                      </div>
                    )}
                    <div>
                      <div className="text-sm text-gray-600">Vifo (2023)</div>
                      <div className="font-bold text-gray-800">{disease.deaths2023}</div>
                    </div>
                    <div className="pt-2 border-t">
                      <div className="text-green-600 text-sm font-medium">{disease.improvement}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* MSD Achievements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Mafanikio ya Bohari ya Dawa (MSD)</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {msdAchievements.map((achievement, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {index === 0 && <Pill className="h-8 w-8 text-red-600 mr-3" />}
                    {index === 1 && <Microscope className="h-8 w-8 text-red-600 mr-3" />}
                    {index === 2 && <Eye className="h-8 w-8 text-red-600 mr-3" />}
                    {index === 3 && <Factory className="h-8 w-8 text-red-600 mr-3" />}
                    {index === 4 && <Factory className="h-8 w-8 text-red-600 mr-3" />}
                    <h3 className="font-bold text-lg">{achievement.title}</h3>
                  </div>
                  <div className="space-y-2">
                    {achievement.current && (
                      <div>
                        <span className="text-sm text-gray-600">Hali ya sasa: </span>
                        <span className="font-bold text-red-600">{achievement.current}</span>
                      </div>
                    )}
                    {achievement.before && (
                      <div>
                        <span className="text-sm text-gray-600">Zamani: </span>
                        <span className="font-medium">{achievement.before}</span>
                      </div>
                    )}
                    {achievement.improvement && (
                      <div>
                        <span className="text-green-600 font-medium">{achievement.improvement}</span>
                      </div>
                    )}
                    {achievement.total && (
                      <div>
                        <span className="text-sm text-gray-600">Jumla: </span>
                        <span className="font-bold text-red-600">{achievement.total}</span>
                      </div>
                    )}
                    {achievement.value && (
                      <div>
                        <span className="text-sm text-gray-600">Thamani: </span>
                        <span className="font-bold text-red-600">{achievement.value}</span>
                      </div>
                    )}
                    {achievement.capacity && (
                      <div>
                        <span className="text-sm text-gray-600">Uwezo: </span>
                        <span className="font-bold text-red-600">{achievement.capacity}</span>
                      </div>
                    )}
                  </div>
                  <p className="text-gray-700 text-sm mt-3">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Health Insurance */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Sheria ya Bima ya Afya kwa Wote</h2>
            <Card>
              <CardContent className="p-8">
                <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-4">Imepitishwa Bungeni - Novemba 19, 2023</h3>
                <p className="text-gray-700 mb-6">
                  Sheria ya Bima ya Afya kwa Wote Na. 13 ya mwaka 2023 imewekwa saini na Mheshimiwa Dkt. Samia Suluhu
                  Hassan
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Malengo Makuu:</h4>
                    <ul className="text-left text-sm text-gray-700 space-y-1">
                      <li>• Kuwezesha wananchi wote kuwa na uhakika wa kupata huduma za afya</li>
                      <li>• Kuondoa kikwazo cha fedha hususan kwa kaya masikini</li>
                      <li>• Kuanzisha mfuko wa kugharamia bima ya afya</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Matokeo Yanayotarajiwa:</h4>
                    <ul className="text-left text-sm text-gray-700 space-y-1">
                      <li>• Vituo vya afya kuwa na mapato ya uhakika</li>
                      <li>• Kuboresha huduma za afya kwa wananchi</li>
                      <li>• Kuimarisha mfumo wa ugharamiaji wa huduma za afya</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Ripoti na Takwimu</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-red-600 hover:bg-red-700">
                <Download className="h-4 w-4 mr-2" />
                Ripoti ya Sekta ya Afya (PDF)
              </Button>
              <Button variant="outline" className="border-red-600 text-red-600 bg-transparent">
                <Download className="h-4 w-4 mr-2" />
                Takwimu za Mafanikio
              </Button>
              <Button variant="outline" className="border-red-600 text-red-600 bg-transparent">
                <Download className="h-4 w-4 mr-2" />
                Taarifa ya MSD
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
