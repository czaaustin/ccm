"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface GoogleDriveImageProps {
  fileId: string
  alt: string
  width: number
  height: number
  className?: string
}

export function GoogleDriveImage({ fileId, alt, width, height, className }: GoogleDriveImageProps) {
  const [imageUrl, setImageUrl] = useState<string>("")

  useEffect(() => {
    // Convert Google Drive sharing link to direct image URL
    if (fileId) {
      setImageUrl(`https://drive.google.com/uc?export=view&id=${fileId}`)
    }
  }, [fileId])

  if (!imageUrl) {
    return <div className={`bg-muted animate-pulse ${className}`} style={{ width, height }} />
  }

  return (
    <Image
      src={imageUrl || "/placeholder.svg"}
      alt={alt}
      width={width}
      height={height}
      className={className}
      unoptimized // Use this for external images that can't be optimized by Next.js
    />
  )
}
