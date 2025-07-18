import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, MapPin, Users, Calendar, DollarSign } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function MradiDetailPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <section className="bg-[#049132] py-16">
        <div className="container mx-auto px-4">
          <Link href="/miradi-mikubwa" className="inline-flex items-center text-white mb-6 hover:underline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Rudi Miradi Mikubwa
          </Link>
          <h1 className="text-4xl font-bold text-white mb-4">Mradi wa Bwawa la Umeme - Mto Rufiji</h1>
          <div className="flex flex-wrap gap-4">
            <Badge className="bg-green-100 text-green-800">✅ Umekamilika</Badge>
            <Badge variant="outline" className="border-white text-white bg-transparent">
              Nishati
            </Badge>
            <Badge variant="outline" className="border-white text-white bg-transparent">
              Mazingira
            </Badge>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Main Content */}
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Bwawa la Umeme"
                width={600}
                height={400}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Maelezo ya Mradi</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Mradi wa Bwawa la Umeme wa Mto Rufiji ni mmoja wa miradi mikubwa ya kitaifa inayolenga kuongeza
                uzalishaji wa umeme nchini Tanzania. Mradi huu umefanikisha kujenga bwawa lenye uwezo wa kuzalisha
                megawati 2,115 za umeme, jambo ambalo litasaidia kutatua tatizo la upungufu wa umeme nchini.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Bwawa hili limejengwa kwa kutumia teknolojia ya kisasa na limeathiri mazingira kwa njia chanya kupitia
                uongozi bora wa rasilimali za maji. Mradi huu umeongoza katika kuongeza upatikanaji wa umeme katika
                maeneo ya vijijini na mijini.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Faida za Mradi</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Kuongeza uzalishaji wa umeme kwa megawati 2,115</li>
                <li>Kutoa umeme kwa kaya zaidi ya 12,000</li>
                <li>Kuongeza ajira kwa watu zaidi ya 5,000</li>
                <li>Kuboresha mazingira ya biashara katika mkoa</li>
                <li>Kuongeza kipato cha serikali kupitia ushuru</li>
              </ul>
            </div>

            {/* Sidebar */}
            <div>
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Takwimu za Mradi</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-[#049132] mr-3" />
                      <div>
                        <div className="font-medium">Eneo</div>
                        <div className="text-gray-600">Morogoro, Lindi, Pwani</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-[#049132] mr-3" />
                      <div>
                        <div className="font-medium">Tarehe ya Kukamilika</div>
                        <div className="text-gray-600">Juni 2026</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-[#049132] mr-3" />
                      <div>
                        <div className="font-medium">Wanufaika</div>
                        <div className="text-gray-600">12,000 Kaya</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="h-5 w-5 text-[#049132] mr-3" />
                      <div>
                        <div className="font-medium">Gharama</div>
                        <div className="text-gray-600">USD 2.9 Bilioni</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Washirika wa Mradi</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Wizara ya Nishati</li>
                    <li>• TANESCO</li>
                    <li>• Benki ya Dunia</li>
                    <li>• Makampuni ya Kimataifa</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Picha za Mradi</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Image
                key={i}
                src={`/placeholder.svg?height=200&width=300`}
                alt={`Picha ya mradi ${i}`}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#049132]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Tazama Miradi Mingine</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">Angalia miradi mingine mikubwa iliyofanywa na serikali</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/miradi-mikubwa">
              <Button size="lg" className="bg-[#edfa10] text-[#049132] hover:bg-yellow-300">
                Miradi Mikubwa
              </Button>
            </Link>
            <Link href="/sekta">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#049132] bg-transparent"
              >
                Mafanikio kwa Sekta
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
