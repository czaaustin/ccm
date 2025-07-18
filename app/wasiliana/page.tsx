import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"

export default function WasilianaPage() {
  const contacts = [
    {
      title: "Ofisi Kuu ya Serikali",
      address: "Mtumba, Dodoma",
      phone: "+255 26 232 4000",
      email: "info@serikali.go.tz",
      hours: "Jumatatu - Ijumaa: 8:00 - 16:00",
    },
    {
      title: "Ofisi ya Habari",
      address: "Chamwino, Dodoma",
      phone: "+255 26 232 4100",
      email: "habari@serikali.go.tz",
      hours: "Jumatatu - Ijumaa: 8:00 - 17:00",
    },
    {
      title: "Ofisi ya Mawasiliano",
      address: "Ikulu, Dar es Salaam",
      phone: "+255 22 211 6898",
      email: "mawasiliano@ikulu.go.tz",
      hours: "Jumatatu - Ijumaa: 8:00 - 16:00",
    },
  ]

  const socialMedia = [
    { platform: "Facebook", handle: "@SerikaliTanzania", followers: "2.5M" },
    { platform: "Twitter", handle: "@SerikaliTZ", followers: "1.8M" },
    { platform: "Instagram", handle: "@serikali_tz", followers: "950K" },
    { platform: "YouTube", handle: "Serikali Tanzania", followers: "1.2M" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <section className="bg-[#049132] py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Wasiliana Nasi</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Tuko hapa kukusikiliza. Tuma maoni, maswali au mapendekezo yako
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Tuma Ujumbe</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Jina la Kwanza</label>
                      <Input placeholder="Jina lako la kwanza" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Jina la Mwisho</label>
                      <Input placeholder="Jina lako la mwisho" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Barua Pepe</label>
                    <Input type="email" placeholder="barua@mfano.com" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nambari ya Simu</label>
                    <Input placeholder="+255 xxx xxx xxx" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Mada</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Chagua mada" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="maoni">Maoni ya Jumla</SelectItem>
                        <SelectItem value="malalamiko">Malalamiko</SelectItem>
                        <SelectItem value="mapendekezo">Mapendekezo</SelectItem>
                        <SelectItem value="maswali">Maswali</SelectItem>
                        <SelectItem value="ushirikiano">Ushirikiano</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Ujumbe</label>
                    <Textarea placeholder="Andika ujumbe wako hapa..." className="min-h-[120px]" />
                  </div>

                  <Button className="w-full bg-[#049132] hover:bg-[#037a28]">
                    <Send className="h-4 w-4 mr-2" />
                    Tuma Ujumbe
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Maelezo ya Mawasiliano</h2>

              {contacts.map((contact, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">{contact.title}</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-[#049132] mt-0.5" />
                        <span className="text-gray-700">{contact.address}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-[#049132]" />
                        <span className="text-gray-700">{contact.phone}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-[#049132]" />
                        <span className="text-gray-700">{contact.email}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-[#049132]" />
                        <span className="text-gray-700">{contact.hours}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Tufuate Mitandaoni</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {socialMedia.map((social, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{social.platform}</h3>
                  <p className="text-[#049132] font-medium mb-2">{social.handle}</p>
                  <p className="text-sm text-gray-600">{social.followers} wafuasi</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Maswali Yanayoulizwa Mara kwa Mara</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "Je, ninaweza kupata ripoti za mafanikio wapi?",
                answer:
                  "Ripoti za mafanikio zinapatikana katika kila ukurasa wa sekta. Unaweza pia kuzidownload kutoka sehemu ya 'Ripoti na Takwimu'.",
              },
              {
                question: "Ninawezaje kupata taarifa za miradi katika eneo langu?",
                answer:
                  "Tumia sehemu ya 'Mafanikio kwa Sekta' na uchague sekta na eneo lako ili kuona miradi iliyofanywa.",
              },
              {
                question: "Je, ninaweza kutoa maoni kuhusu huduma za serikali?",
                answer: "Ndio, unaweza kutuma maoni yako kupitia fomu ya mawasiliano au kupitia mitandao ya kijamii.",
              },
              {
                question: "Ni jinsi gani naweza kupata habari za hivi karibuni?",
                answer: "Tembelea sehemu ya 'Kituo cha Habari' kupata habari, video na matangazo ya hivi karibuni.",
              },
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-16 bg-[#049132]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Nambari za Dharura</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { service: "Polisi", number: "999" },
              { service: "Moto na Uokoaji", number: "115" },
              { service: "Huduma za Afya", number: "114" },
            ].map((emergency, index) => (
              <div key={index} className="text-center text-white">
                <h3 className="text-xl font-bold mb-2">{emergency.service}</h3>
                <p className="text-3xl font-bold text-[#edfa10]">{emergency.number}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
