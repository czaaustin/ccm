import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { DriveImage } from "@/components/drive-image"
import {
  ArrowRight,
  Users,
  Building,
  Heart,
  GraduationCap,
  Zap,
  Truck,
  Droplets,
  Wheat,
  CheckCircle,
  Clock,
  Target,
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { StatsCounter } from "@/components/stats-counter"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-[#049132] py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" data-translate="sixth-phase-government">
            Serikali ya Awamu ya Sita
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto" data-translate="years-of-achievements">
            Miaka 4 ya Mafanikio - Tazama maendeleo yaliyofikiwa katika sekta mbalimbali
          </p>
          <div className="flex items-center justify-center gap-2 text-white mb-8">
            <CheckCircle className="h-5 w-5" />
            <span data-translate="development-for-all">Maendeleo ya kweli kwa kila Mtanzania</span>
          </div>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
            <Link href="/mafanikio">
              <Button
                size="lg"
                className="bg-[#edfa10] text-[#049132] hover:bg-yellow-300 border-2 border-[#049132] shadow-lg hover:shadow-xl transition-all duration-200 w-full sm:w-auto"
                data-translate="view-achievements"
              >
                Tazama Mafanikio
              </Button>
            </Link>
            <Link href="/kampeni-2025">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-[#edfa10] hover:text-[#049132] hover:border-[#edfa10] bg-transparent transition-all duration-200 w-full sm:w-auto"
                data-translate="nav-campaign"
              >
                Kampeni 2025
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12" data-translate="total-statistics">
            Takwimu za Jumla
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Muhtasari wa miradi yote iliyotekelezwa katika sekta zote
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 max-w-4xl mx-auto">
            <div className="text-center p-4 sm:p-6 bg-white rounded-lg border-2 border-[#edfa10] hover:shadow-lg transition-all duration-200 hover:border-[#049132]">
              <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-[#049132] mx-auto mb-4" />
              <StatsCounter number={2737} label="Jumla ya Miradi Iliyokamilika" />
            </div>
            <div className="text-center p-4 sm:p-6 bg-white rounded-lg border-2 border-[#edfa10] hover:shadow-lg transition-all duration-200 hover:border-[#049132]">
              <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-[#049132] mx-auto mb-4" />
              <StatsCounter number={485} label="Miradi Inayoendelea" />
            </div>
            <div className="text-center p-4 sm:p-6 bg-white rounded-lg border-2 border-[#edfa10] hover:shadow-lg transition-all duration-200 hover:border-[#049132]">
              <Target className="h-6 w-6 sm:h-8 sm:w-8 text-[#049132] mx-auto mb-4" />
              <StatsCounter number={312} label="Miradi Iliyopangwa" />
            </div>
            <div className="text-center p-4 sm:p-6 bg-white rounded-lg border-2 border-[#edfa10] hover:shadow-lg transition-all duration-200 hover:border-[#049132]">
              <Users className="h-6 w-6 sm:h-8 sm:w-8 text-[#049132] mx-auto mb-4" />
              <div className="text-2xl sm:text-3xl font-bold text-[#dc2626] mb-2">5.2M</div>
              <div className="text-gray-600 font-medium text-sm sm:text-base" data-translate="beneficiaries">
                Wananchi Walioguziwa
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" data-translate="achievements-by-sector">
              Mafanikio kwa Sekta
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Chagua sekta unayotaka kuona maelezo kamili ya mafanikio yaliyofikiwa
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "Afya",
                icon: Heart,
                href: "/sekta/afya",
                count: "257 Miradi",
                color: "bg-red-50 border-red-200 hover:border-red-300",
                iconColor: "text-red-600",
              },
              {
                name: "Elimu",
                icon: GraduationCap,
                href: "/sekta/elimu",
                count: "800 Miradi",
                color: "bg-blue-50 border-blue-200 hover:border-blue-300",
                iconColor: "text-blue-600",
              },
              {
                name: "Miundombinu",
                icon: Building,
                href: "/sekta/miundombinu",
                count: "450 Miradi",
                color: "bg-gray-50 border-gray-200 hover:border-gray-300",
                iconColor: "text-gray-600",
              },
              {
                name: "Kilimo",
                icon: Wheat,
                href: "/sekta/kilimo",
                count: "320 Miradi",
                color: "bg-green-50 border-green-200 hover:border-green-300",
                iconColor: "text-green-600",
              },
              {
                name: "Uchukuzi",
                icon: Truck,
                href: "/sekta/uchukuzi",
                count: "180 Miradi",
                color: "bg-orange-50 border-orange-200 hover:border-orange-300",
                iconColor: "text-orange-600",
              },
              {
                name: "Maji",
                icon: Droplets,
                href: "/sekta/maji",
                count: "290 Miradi",
                color: "bg-blue-50 border-blue-200 hover:border-blue-300",
                iconColor: "text-blue-600",
              },
              {
                name: "Umeme",
                icon: Zap,
                href: "/sekta/nishati",
                count: "150 Miradi",
                color: "bg-yellow-50 border-yellow-200 hover:border-yellow-300",
                iconColor: "text-yellow-600",
              },
              {
                name: "Viwanda",
                icon: Building,
                href: "/sekta/viwanda",
                count: "95 Miradi",
                color: "bg-purple-50 border-purple-200 hover:border-purple-300",
                iconColor: "text-purple-600",
              },
              {
                name: "Mazingira",
                icon: Wheat,
                href: "/sekta/mazingira",
                count: "120 Miradi",
                color: "bg-emerald-50 border-emerald-200 hover:border-emerald-300",
                iconColor: "text-emerald-600",
              },
            ].map((sector) => (
              <Link key={sector.name} href={sector.href}>
                <Card
                  className={`hover:shadow-lg transition-all duration-300 border-2 ${sector.color} hover:border-[#edfa10] h-full group`}
                >
                  <CardContent className="p-4 sm:p-6 text-center">
                    <sector.icon
                      className={`h-8 w-8 sm:h-12 sm:w-12 ${sector.iconColor} mx-auto mb-4 group-hover:scale-110 transition-transform`}
                    />
                    <h3
                      className="font-bold text-gray-900 mb-2 text-sm sm:text-base"
                      data-translate={sector.name.toLowerCase()}
                    >
                      {sector.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mb-3">{sector.count}</p>
                    <div className="mt-4">
                      <span
                        className="text-[#049132] text-xs sm:text-sm font-medium flex items-center justify-center group-hover:text-[#edfa10] transition-colors"
                        data-translate="view-more"
                      >
                        Angalia Zaidi <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" data-translate="nav-major-projects">
              Miradi Mikubwa ya Kitaifa
            </h2>
            <p className="text-gray-600">Miradi ya kimkakati yanayoleta mabadiliko ya kweli kwa taifa zima</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Mradi wa Umeme wa Stiegler's Gorge",
                location: "Morogoro, Pwani, Lindi",
                status: "Inaendelea",
                description: "Kufua megawati 2115 za umeme kuoka mto Rufiji",
                image: "https://drive.google.com/file/d/10HnpqIIJcEieSfT7txxJNopJNODKKOzC/view?usp=drive_link",
                beneficiaries: "2.5M watu",
              },
              {
                title: "Hospitali ya Rufaa Mpya ya Sekou Toure",
                location: "Mwanza",
                status: "Inaendelea",
                description: "Hospitali ya kisasa yenye vitanda 500",
                image: "https://drive.google.com/file/d/19YKNrKgO8hmG5ShoafJ7lCY-UeBWifIP/view?usp=drive_link",
                beneficiaries: "3.2M watu",
              },
              {
                title: "Mradi wa Maji Makuu",
                location: "Dodoma",
                status: "Umekamilika",
                description: "Mfumo wa maji unaohudumia watu milioni 2.1",
                image: "https://drive.google.com/file/d/1abZrAAnhDtsMsZ_wRhiySUUdQkkf64Wn/view?usp=drive_link",
                beneficiaries: "2.1M watu",
              },
            ].map((project, i) => (
              <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow">
                <DriveImage
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="w-full h-40 sm:h-48 object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <CardContent className="p-6">
                  <Badge
                    className={`mb-3 ${project.status === "Umekamilika" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}
                  >
                    {project.status}
                  </Badge>
                  <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{project.location}</p>
                  <p className="text-gray-700 text-sm mb-4">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{project.beneficiaries}</span>
                    <Link href={`/miradi-mikubwa/mradi-${i + 1}`}>
                      <Button
                        variant="outline"
                        className="border-[#049132] text-[#049132] bg-transparent text-sm"
                        data-translate="view-more"
                      >
                        Angalia Zaidi
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/miradi-mikubwa">
              <Button className="bg-[#049132] hover:bg-[#037a28]">
                <span data-translate="view-all-projects">Angalia Miradi Yote</span>{" "}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#049132]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Tuendelee Kujenga Pamoja</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Mafanikio haya ni ya wote. Tuendelee kuchangia katika kujenga Tanzania yetu
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/mashuhuda">
              <Button size="lg" className="bg-[#edfa10] text-[#049132] hover:bg-yellow-300">
                Toa Mchango Wako
              </Button>
            </Link>
            <Link href="/wasiliana">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#049132] bg-transparent"
              >
                Wasiliana Nasi
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
