import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Serikali ya Awamu ya Nne - Mafanikio ya Miaka 4",
  description: "Tovuti rasmi ya mafanikio ya serikali katika kipindi cha miaka minne ya utawala",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sw">
      <body className={inter.className}>
        {children}

        {/* Chatbot Script */}
        <Script id="chatbot-script" strategy="afterInteractive">
          {`
          (function(){
            if(!window.chatbase||window.chatbase("getState")!=="initialized"){
              window.chatbase=(...arguments)=>{
                if(!window.chatbase.q){window.chatbase.q=[]}
                window.chatbase.q.push(arguments)
              };
              window.chatbase=new Proxy(window.chatbase,{
                get(target,prop){
                  if(prop==="q"){return target.q}
                  return(...args)=>target(prop,...args)
                }
              })
            }
            const onLoad=function(){
              const script=document.createElement("script");
              script.src="https://www.chatbase.co/embed.min.js";
              script.id="B6I4bNwe3FPcGvrQwX00O";
              script.domain="www.chatbase.co";
              document.body.appendChild(script)
            };
            if(document.readyState==="complete"){
              onLoad()
            }else{
              window.addEventListener("load",onLoad)
            }
          })();
        `}
        </Script>

        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-[#049132] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">TZ</span>
                  </div>
                  <span className="font-bold text-lg">Serikali</span>
                </div>
                <p className="text-gray-400 text-sm">Tovuti rasmi ya mafanikio ya serikali ya awamu ya nne</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Viungo Muhimu</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <a href="/sekta" className="hover:text-white">
                      Mafanikio kwa Sekta
                    </a>
                  </li>
                  <li>
                    <a href="/miradi-mikubwa" className="hover:text-white">
                      Miradi Mikubwa
                    </a>
                  </li>
                  <li>
                    <a href="/kampeni-2025" className="hover:text-white">
                      Kampeni 2025
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Mawasiliano</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>info@serikali.go.tz</li>
                  <li>+255 123 456 789</li>
                  <li>Dodoma, Tanzania</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Mitandao ya Kijamii</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white">
                    Facebook
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Twitter
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    YouTube
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
              <p>&copy; 2024 Serikali ya Jamhuri ya Muungano wa Tanzania. Haki zote zimehifadhiwa.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
