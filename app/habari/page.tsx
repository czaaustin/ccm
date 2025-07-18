"use client"

import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Download, Search, Calendar, Eye } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function HabariPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const videos = [
    {
      title: "Uzinduzi wa Mradi wa Bwawa la Umeme",
      duration: "15:30",
      views: "125K",
      date: "15 Juni 2023",
      thumbnail: "/placeholder.svg?height=200&width=300",
      description: "Rais akizindua mradi mkubwa wa bwawa la umeme",
      category: "Nishati",
    },
    {
      title: "Ziara ya Kituo cha Afya - Manyara",
      duration: "8:45",
      views: "89K",
      date: "22 Mei 2023",
      thumbnail: "/placeholder.svg?height=200&width=300",
      description: "Waziri wa Afya akitembelea kituo kipya cha afya",
      category: "Afya",
    },
    {
      title: "Uzinduzi wa Barabara ya Lami - Singida",
      duration: "12:15",
      views: "67K",
      date: "10 Aprili 2023",
      thumbnail: "/placeholder.svg?height=200&width=300",
      description: "Uzinduzi wa barabara ya lami ya kilomita 150",
      category: "Uchukuzi",
    },
  ]

  const news = [
    {
      title: "Serikali Yazindua Miradi 50 ya Maendeleo",
      source: "Habari za Kitaifa",
      date: "20 Januari 2024",
      excerpt: "Serikali imezindua miradi 50 mapya ya maendeleo katika sekta mbalimbali...",
      image: "/placeholder.svg?height=150&width=200",
      category: "Maendeleo",
    },
    {
      title: "Ongezeko la Uzalishaji wa Umeme",
      source: "Daily News",
      date: "18 Januari 2024",
      excerpt: "Uzalishaji wa umeme umeongezeka kwa asilimia 40 katika mwaka 2023...",
      image: "/placeholder.svg?height=150&width=200",
      category: "Nishati",
    },
    {
      title: "Mafanikio ya Sekta ya Afya",
      source: "The Guardian",
      date: "15 Januari 2024",
      excerpt: "Vituo vya afya vimeongezeka kwa asilimia 60 katika miaka 4...",
      image: "/placeholder.svg?height=150&width=200",
      category: "Afya",
    },
  ]

  const speeches = [
    {
      title: "Hotuba ya Rais - Sikukuu ya Uhuru",
      date: "9 Desemba 2023",
      occasion: "Sikukuu ya Uhuru",
      ministry: "Ikulu",
      excerpt: "Hotuba ya Rais kuhusu mafanikio ya miaka 4...",
      category: "Siasa",
    },
    {
      title: "Kauli ya Waziri wa Afya",
      date: "15 Novemba 2023",
      occasion: "Mkutano wa Waandishi",
      ministry: "Afya",
      excerpt: "Kauli kuhusu mafanikio ya sekta ya afya...",
      category: "Afya",
    },
    {
      title: "Hotuba ya Waziri wa Elimu",
      date: "20 Oktoba 2023",
      occasion: "Siku ya Mwalimu",
      ministry: "Elimu",
      excerpt: "Hotuba kuhusu mabadiliko ya sekta ya elimu...",
      category: "Elimu",
    },
  ]

  const infographics = [
    {
      title: "Takwimu za Sekta ya Afya",
      category: "Afya",
      downloadSize: "2.5 MB",
      format: "PNG",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Mafanikio ya Miaka 4",
      category: "Jumla",
      downloadSize: "3.2 MB",
      format: "PDF",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Takwimu za Elimu",
      category: "Elimu",
      downloadSize: "1.8 MB",
      format: "PNG",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const filteredVideos = videos.filter(
    (video) =>
      video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const filteredNews = news.filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const filteredSpeeches = speeches.filter(
    (speech) =>
      speech.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      speech.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      speech.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const filteredInfographics = infographics.filter(
    (infographic) =>
      infographic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      infographic.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <section className="bg-[#049132] py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">Kituo cha Habari</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Tazama video, habari, hotuba na vielelezo vya mafanikio ya Serikali katika kipindi cha miaka 4 ya utawala
          </p>
        </div>
      </section>

      {/* Featured Video */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-center text-gray-900 mb-6 md:mb-8">Video Kuu</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow border-2 hover:border-[#edfa10]">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="Video Kuu"
                  width={800}
                  height={400}
                  className="w-full h-48 md:h-64 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Button size="lg" className="bg-white text-[#049132] hover:bg-[#edfa10] hover:text-[#049132]">
                    <Play className="h-4 md:h-6 w-4 md:w-6 mr-2" />
                    Cheza Video
                  </Button>
                </div>
                <div className="absolute bottom-4 right-4">
                  <Badge className="bg-black/70 text-white">25:30</Badge>
                </div>
              </div>
              <CardContent className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                  Miaka 4 ya Maendeleo - Filamu Fupi ya Mafanikio
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Filamu fupi inayoonyesha mafanikio makubwa yaliyopatikana katika kipindi cha miaka 4
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="py-6 md:py-8 border-b bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Tafuta habari, video, au hotuba..."
                className="pl-10 border-2 hover:border-[#edfa10] focus:border-[#edfa10]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            {searchTerm && (
              <div className="mt-2 text-center">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSearchTerm("")}
                  className="text-[#049132] hover:bg-[#edfa10]"
                >
                  Ondoa utafutaji
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="videos" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-6 md:mb-8 h-auto">
              <TabsTrigger
                value="videos"
                className="data-[state=active]:bg-[#049132] data-[state=active]:text-white hover:bg-[#edfa10] text-xs md:text-sm p-2 md:p-3"
              >
                <span className="hidden sm:inline">🎥 </span>Video
              </TabsTrigger>
              <TabsTrigger
                value="news"
                className="data-[state=active]:bg-[#049132] data-[state=active]:text-white hover:bg-[#edfa10] text-xs md:text-sm p-2 md:p-3"
              >
                <span className="hidden sm:inline">📰 </span>Habari
              </TabsTrigger>
              <TabsTrigger
                value="speeches"
                className="data-[state=active]:bg-[#049132] data-[state=active]:text-white hover:bg-[#edfa10] text-xs md:text-sm p-2 md:p-3"
              >
                <span className="hidden sm:inline">🎤 </span>Hotuba
              </TabsTrigger>
              <TabsTrigger
                value="infographics"
                className="data-[state=active]:bg-[#049132] data-[state=active]:text-white hover:bg-[#edfa10] text-xs md:text-sm p-2 md:p-3"
              >
                <span className="hidden sm:inline">📊 </span>Vielelezo
              </TabsTrigger>
            </TabsList>

            <TabsContent value="videos">
              {filteredVideos.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-600">Hakuna video zilizopatikana.</p>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {filteredVideos.map((video, index) => (
                    <Card
                      key={index}
                      className="overflow-hidden hover:shadow-lg transition-shadow border-2 hover:border-[#edfa10]"
                    >
                      <div className="relative">
                        <Image
                          src={video.thumbnail || "/placeholder.svg"}
                          alt={video.title}
                          width={300}
                          height={200}
                          className="w-full h-36 md:h-48 object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                          <Play className="h-8 md:h-12 w-8 md:w-12 text-white" />
                        </div>
                        <div className="absolute bottom-2 right-2">
                          <Badge className="bg-black/70 text-white text-xs">{video.duration}</Badge>
                        </div>
                        <div className="absolute top-2 left-2">
                          <Badge className="bg-[#edfa10] text-[#049132] text-xs">{video.category}</Badge>
                        </div>
                      </div>
                      <CardContent className="p-3 md:p-4">
                        <h3 className="font-bold text-sm md:text-base mb-2 line-clamp-2">{video.title}</h3>
                        <p className="text-gray-600 text-xs md:text-sm mb-3 line-clamp-2">{video.description}</p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <div className="flex items-center">
                            <Eye className="h-3 w-3 mr-1" />
                            {video.views}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {video.date}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>

            <TabsContent value="news">
              {filteredNews.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-600">Hakuna habari zilizopatikana.</p>
                </div>
              ) : (
                <div className="space-y-4 md:space-y-6">
                  {filteredNews.map((article, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow border-2 hover:border-[#edfa10]">
                      <CardContent className="p-4 md:p-6">
                        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                          <Image
                            src={article.image || "/placeholder.svg"}
                            alt={article.title}
                            width={200}
                            height={150}
                            className="w-full md:w-48 h-32 object-cover rounded-lg flex-shrink-0"
                          />
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              <Badge className="bg-[#edfa10] text-[#049132] text-xs">{article.category}</Badge>
                            </div>
                            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{article.title}</h3>
                            <div className="flex flex-wrap items-center gap-2 md:gap-4 text-sm text-gray-600 mb-3">
                              <span>{article.source}</span>
                              <span className="hidden md:inline">•</span>
                              <span>{article.date}</span>
                            </div>
                            <p className="text-gray-700 mb-4 text-sm md:text-base">{article.excerpt}</p>
                            <Button
                              variant="outline"
                              className="w-full md:w-auto border-[#049132] text-[#049132] bg-transparent hover:bg-[#edfa10] hover:border-[#edfa10]"
                            >
                              Soma Zaidi
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>

            <TabsContent value="speeches">
              {filteredSpeeches.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-600">Hakuna hotuba zilizopatikana.</p>
                </div>
              ) : (
                <div className="space-y-3 md:space-y-4">
                  {filteredSpeeches.map((speech, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow border-2 hover:border-[#edfa10]">
                      <CardContent className="p-4 md:p-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              <Badge className="bg-[#edfa10] text-[#049132] text-xs">{speech.category}</Badge>
                            </div>
                            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">{speech.title}</h3>
                            <div className="flex flex-wrap items-center gap-2 md:gap-4 text-sm text-gray-600 mb-2">
                              <span>{speech.date}</span>
                              <span className="hidden md:inline">•</span>
                              <span>{speech.occasion}</span>
                              <span className="hidden md:inline">•</span>
                              <span>{speech.ministry}</span>
                            </div>
                            <p className="text-gray-700 text-sm md:text-base">{speech.excerpt}</p>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-[#049132] text-[#049132] bg-transparent hover:bg-[#edfa10] hover:border-[#edfa10]"
                            >
                              Soma
                            </Button>
                            <Button size="sm" className="bg-[#049132] hover:bg-[#037a28]">
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>

            <TabsContent value="infographics">
              {filteredInfographics.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-600">Hakuna vielelezo vilivyopatikana.</p>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {filteredInfographics.map((infographic, index) => (
                    <Card
                      key={index}
                      className="overflow-hidden hover:shadow-lg transition-shadow border-2 hover:border-[#edfa10]"
                    >
                      <Image
                        src={infographic.image || "/placeholder.svg"}
                        alt={infographic.title}
                        width={400}
                        height={300}
                        className="w-full h-36 md:h-48 object-cover"
                      />
                      <CardContent className="p-3 md:p-4">
                        <h3 className="font-bold text-sm md:text-base mb-2">{infographic.title}</h3>
                        <div className="flex items-center justify-between text-xs text-gray-600 mb-3">
                          <Badge variant="outline" className="text-xs border-[#edfa10] text-[#049132]">
                            {infographic.category}
                          </Badge>
                          <span>{infographic.downloadSize}</span>
                        </div>
                        <Button size="sm" className="w-full bg-[#049132] hover:bg-[#037a28]">
                          <Download className="h-4 w-4 mr-2" />
                          Pakua {infographic.format}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}
