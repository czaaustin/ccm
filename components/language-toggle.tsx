"use client"

import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { useState, useEffect } from "react"

interface TranslationData {
  [key: string]: {
    sw: string
    en: string
  }
}

const translations: TranslationData = {
  // Navigation
  "nav-home": { sw: "Nyumbani", en: "Home" },
  "nav-achievements": { sw: "Mafanikio", en: "Achievements" },
  "nav-major-projects": { sw: "Miradi Mikubwa", en: "Major Projects" },
  "nav-before-after": { sw: "Kabla na Baada", en: "Before & After" },
  "nav-news": { sw: "Habari", en: "News" },
  "nav-testimonials": { sw: "Mashuhuda", en: "Testimonials" },
  "nav-campaign": { sw: "Kampeni 2025", en: "Campaign 2025" },
  "nav-about": { sw: "Kuhusu", en: "About" },
  "nav-contact": { sw: "Wasiliana", en: "Contact" },

  // Common terms
  government: { sw: "Serikali", en: "Government" },
  achievements: { sw: "Mafanikio", en: "Achievements" },
  projects: { sw: "Miradi", en: "Projects" },
  completed: { sw: "Umekamilika", en: "Completed" },
  ongoing: { sw: "Inaendelea", en: "Ongoing" },
  planned: { sw: "Imepangwa", en: "Planned" },
  health: { sw: "Afya", en: "Health" },
  education: { sw: "Elimu", en: "Education" },
  infrastructure: { sw: "Miundombinu", en: "Infrastructure" },
  agriculture: { sw: "Kilimo", en: "Agriculture" },
  transport: { sw: "Uchukuzi", en: "Transport" },
  water: { sw: "Maji", en: "Water" },
  energy: { sw: "Umeme", en: "Energy" },
  industry: { sw: "Viwanda", en: "Viwanda" },
  environment: { sw: "Mazingira", en: "Environment" },

  // Health sector specific
  "health-facilities": { sw: "Vituo vya Afya", en: "Health Facilities" },
  hospitals: { sw: "Hospitali", en: "Hospitals" },
  dispensaries: { sw: "Zahanati", en: "Dispensaries" },
  "health-centers": { sw: "Vituo vya Afya", en: "Health Centers" },
  medicines: { sw: "Dawa", en: "Medicines" },
  "medical-equipment": { sw: "Vifaa vya Matibabu", en: "Medical Equipment" },
  "maternal-health": { sw: "Afya ya Mama na Mtoto", en: "Maternal & Child Health" },
  "specialized-services": { sw: "Huduma za Ubingwa", en: "Specialized Services" },

  // Statistics
  "total-projects": { sw: "Jumla ya Miradi", en: "Total Projects" },
  beneficiaries: { sw: "Wananchi Walioguziwa", en: "Beneficiaries" },
  investment: { sw: "Uwekezaji", en: "Investment" },
  budget: { sw: "Bajeti", en: "Budget" },

  // Actions
  "view-more": { sw: "Angalia Zaidi", en: "View More" },
  download: { sw: "Pakua", en: "Download" },
  "read-more": { sw: "Soma Zaidi", en: "Read More" },
  back: { sw: "Rudi", en: "Back" },
  next: { sw: "Mbele", en: "Next" },

  // Page titles
  "health-sector": { sw: "Sekta ya Afya", en: "Health Sector" },
  "education-sector": { sw: "Sekta ya Elimu", en: "Education Sector" },
  "infrastructure-sector": { sw: "Sekta ya Miundombinu", en: "Infrastructure Sector" },

  // Common phrases
  "years-of-achievements": { sw: "Miaka ya Mafanikio", en: "Years of Achievements" },
  "development-for-all": { sw: "Maendeleo ya kweli kwa kila Mtanzania", en: "Real development for every Tanzanian" },
  "sixth-phase-government": { sw: "Serikali ya Awamu ya Sita", en: "Sixth Phase Government" },
}

export function LanguageToggle() {
  const [language, setLanguage] = useState<"sw" | "en">("sw")

  const translatePage = (newLanguage: "sw" | "en") => {
    // Update all elements with data-translate attribute
    const elementsToTranslate = document.querySelectorAll("[data-translate]")
    elementsToTranslate.forEach((element) => {
      const key = element.getAttribute("data-translate")
      if (key && translations[key]) {
        element.textContent = translations[key][newLanguage]
      }
    })

    // Update page title
    const titleElement = document.querySelector("title")
    if (titleElement) {
      titleElement.textContent =
        newLanguage === "sw"
          ? "Serikali ya Awamu ya Sita - Mafanikio ya Miaka 5"
          : "Sixth Phase Government - 5 Years of Achievements"
    }

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        newLanguage === "sw"
          ? "Tazama mafanikio yaliyofikiwa na Serikali ya Awamu ya Sita katika sekta mbalimbali"
          : "View achievements made by the Sixth Phase Government across various sectors",
      )
    }
  }

  const toggleLanguage = () => {
    const newLanguage = language === "sw" ? "en" : "sw"
    setLanguage(newLanguage)
    translatePage(newLanguage)

    // Store language preference
    localStorage.setItem("preferred-language", newLanguage)
  }

  // Load saved language preference on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("preferred-language") as "sw" | "en" | null
    if (savedLanguage && savedLanguage !== language) {
      setLanguage(savedLanguage)
      translatePage(savedLanguage)
    }
  }, [])

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center space-x-2 border-[#049132] text-[#049132] hover:bg-[#049132] hover:text-white bg-transparent"
    >
      <Globe className="h-4 w-4" />
      <span data-translate="language">{language === "sw" ? "EN" : "SW"}</span>
    </Button>
  )
}
