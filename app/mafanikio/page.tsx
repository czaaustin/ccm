import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  ArrowRight,
  Heart,
  GraduationCap,
  Building,
  Wheat,
  Truck,
  Zap,
  Droplets,
  Factory,
  TreePine,
  CheckCircle,
  Clock,
  Target,
  Users,
} from "lucide-react"

export default function MafanikioPage() {
  const sectors = [
    {
      name: "Afya",
      icon: Heart,
      href: "/sekta/afya",
      count: "257 Miradi",
      color: "bg-red-50 border-red-200 hover:border-red-300",
      iconColor: "text-red-600",
      description: "Vituo vya afya vimejengwa",
    },
    {
      name: "Elimu",
      icon: GraduationCap,
      href: "/sekta/elimu",
      count: "800 Miradi",
      color: "bg-blue-50 border-blue-200 hover:border-blue-300",
      iconColor: "text-blue-600",
      description: "Shule mpya zimejengwa",
    },
    {
      name: "Miundombinu",
      icon: Building,
      href: "/sekta/miundombinu",
      count: "450 Miradi",
      color: "bg-gray-50 border-gray-200 hover:border-gray-300",
      iconColor: "text-gray-600",
      description: "Majengo ya serikali yamejengwa",
    },
    {
      name: "Kilimo",
      icon: Wheat,
      href: "/sekta/kilimo",
      count: "320 Miradi",
      color: "bg-green-50 border-green-200 hover:border-green-300",
      iconColor: "text-green-600",
      description: "Miradi ya kilimo imetekelezwa",
    },
    {
      name: "Uchukuzi",
      icon: Truck,
      href: "/sekta/uchukuzi",
      count: "180 Miradi",
      color: "bg-orange-50 border-orange-200 hover:border-orange-300",
      iconColor: "text-orange-600",
      description: "Barabara na miundombinu ya uchukuzi",
    },
    {
      name: "Maji",
      icon: Droplets,
      href: "/sekta/maji",
      count: "290 Miradi",
      color: "bg-blue-50 border-blue-200 hover:border-blue-300",
      iconColor: "text-blue-600",
      description: "Miradi ya maji safi",
    },
    {
      name: "Umeme",
      icon: Zap,
      href: "/sekta/nishati",
      count: "150 Miradi",
      color: "bg-yellow-50 border-yellow-200 hover:border-yellow-300",
      iconColor: "text-yellow-600",
      description: "Miradi ya umeme na nishati",
    },
    {
      name: "Viwanda",
      icon: Factory,
      href: "/sekta/viwanda",
      count: "95 Miradi",
      color: "bg-purple-50 border-purple-200 hover:border-purple-300",
      iconColor: "text-purple-600",
      description: "Viwanda vya uzalishaji",
    },
    {
      name: "Mazingira",
      icon: TreePine,
      href: "/sekta/mazingira",
      count: "120 Miradi",
      color: "bg-emerald-50 border-emerald-200 hover:border-emerald-300",
      iconColor: "text-emerald-600",
      description: "Uhifadhi wa mazingira",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <section className="bg-[#049132] py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Mafanikio ya Serikali</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-6">
            Tazama mafanikio yaliyofikiwa katika sekta mbalimbali katika kipindi cha miaka 5
          </p>
          <div className="flex items-center justify-center gap-2 text-white">
            <CheckCircle className="h-5 w-5" />
            <span>Maendeleo ya kweli kwa kila Mtanzania</span>
          </div>
        </div>
      </section>

      {/* Overall Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Takwimu za Jumla</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Muhtasari wa miradi yote iliyotekelezwa katika sekta zote
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white rounded-lg border border-yellow-200">
              <CheckCircle className="h-8 w-8 text-[#049132] mx-auto mb-4" />
              <div className="text-3xl font-bold text-[#049132] mb-2">2,737</div>
              <div className="text-gray-600 font-medium">Jumla ya Miradi Iliyokamilika</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg border border-yellow-200">
              <Clock className="h-8 w-8 text-[#049132] mx-auto mb-4" />
              <div className="text-3xl font-bold text-[#049132] mb-2">485</div>
              <div className="text-gray-600 font-medium">Miradi Inayoendelea</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg border border-yellow-200">
              <Target className="h-8 w-8 text-[#049132] mx-auto mb-4" />
              <div className="text-3xl font-bold text-[#049132] mb-2">312</div>
              <div className="text-gray-600 font-medium">Miradi Iliyopangwa</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg border border-yellow-200">
              <Users className="h-8 w-8 text-[#049132] mx-auto mb-4" />
              <div className="text-3xl font-bold text-[#049132] mb-2">5.2M</div>
              <div className="text-gray-600 font-medium">Wananchi Walioguziwa</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Mafanikio kwa Sekta</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Chagua sekta unayotaka kuona maelezo kamili ya mafanikio yaliyofikiwa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {sectors.map((sector) => (
              <Link key={sector.name} href={sector.href}>
                <Card className={`hover:shadow-lg transition-all duration-300 border-2 ${sector.color} h-full group`}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <sector.icon className={`h-12 w-12 ${sector.iconColor}`} />
                      <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-[#049132] transition-colors" />
                    </div>
                    <h3 className="font-bold text-xl text-gray-900 mb-2">{sector.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{sector.description}</p>
                    <div className="flex items-center justify-between">
                      <Badge className="bg-[#edfa10] text-[#049132]">{sector.count}</Badge>
                      <span className="text-[#049132] text-sm font-medium">Angalia Zaidi</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Uchunguzi wa Haraka</h2>
          <p className="text-center text-gray-600 mb-8">Njia za haraka za kupata taarifa unazozitaka</p>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: Building,
                title: "Miradi Mikubwa",
                subtitle: "Miradi ya kimkakati ya kitaifa",
                href: "/miradi-mikubwa",
                description: "Miradi ya kimkakati ya kitaifa",
              },
              {
                icon: ArrowRight,
                title: "Kabla na Baada",
                subtitle: "Mabadiliko ya kuonekana",
                href: "/kabla-na-baada",
                description: "Mabadiliko ya kuonekana",
              },
              {
                icon: Users,
                title: "Mashuhuda",
                subtitle: "Sauti za wananchi",
                href: "/mashuhuda",
                description: "Sauti za wananchi",
              },
              {
                icon: Heart,
                title: "Habari",
                subtitle: "Matukio na taarifa",
                href: "/habari",
                description: "Matukio na taarifa",
              },
            ].map((item, i) => (
              <Link key={i} href={item.href}>
                <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer h-full group">
                  <CardContent className="p-6">
                    <item.icon className="h-12 w-12 text-[#049132] mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.subtitle}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
