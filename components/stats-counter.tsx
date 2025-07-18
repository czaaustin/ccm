"use client"

import type React from "react"

import { useEffect, useState } from "react"

interface StatsCounterProps {
  icon: React.ReactNode
  number: number
  label: string
}

export function StatsCounter({ icon, number, label }: StatsCounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (count < number) {
        setCount((prev) => Math.min(prev + Math.ceil(number / 50), number))
      }
    }, 50)

    return () => clearTimeout(timer)
  }, [count, number])

  return (
    <div className="text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <div className="text-3xl font-bold text-red-600 mb-2">{count.toLocaleString()}+</div>
      <div className="text-gray-600 font-medium">{label}</div>
    </div>
  )
}
