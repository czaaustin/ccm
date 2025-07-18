import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Award, Globe } from "lucide-react"
import Image from "next/image"

export default function KuhusuPage() {
  const achievements = [
    { icon: Users, number: "60M+", label: "Wananchi Walioathiriwa" },
    { icon: Target, number: "2,500+", label: "Miradi Iliyokamilika" },
    { icon: Award, number: "15", label: "Tuzo za Kimataifa" },
    { icon: Globe, number: "26", label: "Mikoa Yote" },
  ]

  const leadership = [
    {
      name: "Rais wa Jamhuri",
      title: "Kiongozi Mkuu wa Taifa",
      image: "/placeholder.svg?height=200&width=200",
      description: "Kiongozi mwenye weledi na maono ya kuendeleza Tanzania",
    },
    {
      name: "Makamu wa Rais",
      title: "Mshauri Mkuu wa Rais",
      image: "/placeholder.svg?height=200&width=200",
      description: "Mshauri mkuu katika masuala ya maendeleo",
    },
    {
      name: "Waziri Mkuu",
      title: "Kiongozi wa Serikali",
      image: "/placeholder.svg?height=200&width=200",
      description: "Kiongozi wa utekelezaji wa sera za serikali",
    },
  ]

  const priorities = [
    {
      title: "Elimu Bora kwa Wote",
      description: "Kuhakikisha kila mtoto anapata elimu ya ubora na ya kisasa",
      icon: "🎓",
    },
    {
      title: "Huduma za Afya Bora",
      description: "Kutoa huduma za afya za ubora na za bei nafuu kwa wananchi wote",
      icon: "🏥",
    },
    {
      title: "Miundombinu ya Kisasa",
      description: "Kujenga miundombinu ya kisasa inayoongoza maendeleo",
      icon: "🏗️",
    },
    {
      title: "Uchumi Endelevu",
      description: "Kujenga uchumi wenye nguvu na endelevu kwa kizazi hiki na vijazo",
      icon: "💼",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <section className="bg-[#049132] py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Kuhusu Serikali ya Awamu ya Nne</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Serikali inayojitoa kwa maendeleo ya haraka na endelevu ya Tanzania
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#049132] mb-4">Maono Yetu</h2>
                <p className="text-gray-700 leading-relaxed">
                  Kuwa taifa lenye maendeleo ya haraka na endelevu, lenye wananchi wenye hali ya maisha bora, uchumi
                  wenye nguvu, na mazingira ya amani na utulivu. Tanzania itakuwa kielelezo cha maendeleo barani Afrika
                  na duniani kote.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#049132] mb-4">Dhamira Yetu</h2>
                <p className="text-gray-700 leading-relaxed">
                  Kutoa huduma bora kwa wananchi, kuongoza maendeleo ya haraka na endelevu, na kujenga taifa lenye nguvu
                  za kijamii, kiuchumi na kisiasa. Tunatoa huduma kwa uwazi, uwongozi bora na kuhakikisha maslahi ya
                  wananchi ni kipaumbele.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Mafanikio kwa Takwimu</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#049132] rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-[#049132] mb-2">{achievement.number}</div>
                <div className="text-gray-600">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Uongozi wa Serikali</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {leadership.map((leader, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <Image
                    src={leader.image || "/placeholder.svg"}
                    alt={leader.name}
                    width={150}
                    height={150}
                    className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                  <Badge className="bg-[#edfa10] text-[#049132] mb-3">{leader.title}</Badge>
                  <p className="text-gray-600 text-sm">{leader.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Priorities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Vipaumbele vya Serikali</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {priorities.map((priority, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{priority.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{priority.title}</h3>
                      <p className="text-gray-700">{priority.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Historia ya Serikali</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                { year: "2020", title: "Uchaguzi Mkuu", description: "Serikali ya awamu ya nne ilianza rasmi" },
                { year: "2021", title: "Mwaka wa Kwanza", description: "Kuanzishwa kwa miradi mikubwa ya maendeleo" },
                { year: "2022", title: "Mwaka wa Pili", description: "Kukamilika kwa miradi ya kwanza muhimu" },
                { year: "2023", title: "Mwaka wa Tatu", description: "Kuongezeka kwa kasi ya maendeleo" },
                { year: "2024", title: "Mwaka wa Nne", description: "Mafanikio makubwa na maandalizi ya baadaye" },
              ].map((event, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#049132] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{event.year}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{event.title}</h3>
                    <p className="text-gray-700">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-[#049132]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Maadili Yetu</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { title: "Uwazi", description: "Kufanya kazi kwa uwazi na uwongozi bora" },
              { title: "Uongozi", description: "Kuongoza kwa mfano na kwa maono" },
              { title: "Huduma", description: "Kutoa huduma bora kwa wananchi wote" },
            ].map((value, index) => (
              <div key={index} className="text-center text-white">
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-white/90">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
