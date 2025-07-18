"use client"

import { useState } from "react"
import Image from "next/image"
import { getGoogleDriveImageUrl } from "@/utils/google-drive"

interface DriveImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  sizes?: string
  fill?: boolean
}

export function DriveImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  sizes,
  fill = false,
}: DriveImageProps) {
  const [imgSrc, setImgSrc] = useState<string>(() => {
    // Check if the src contains placeholder text
    const isPlaceholder =
      src.includes("_ID/view") ||
      src.includes("PROJECT_") ||
      src.includes("BLOG_") ||
      src.includes("FEATURED_") ||
      src.includes("AUTHOR_") ||
      src.includes("/placeholder.svg")

    // Only convert to Google Drive URL if it's not a placeholder
    return isPlaceholder ? "/placeholder.svg" : getGoogleDriveImageUrl(src)
  })

  // Handle error internally
  const handleError = () => {
    if (imgSrc !== "/placeholder.svg") {
      console.log("Image failed to load, using placeholder instead")
      setImgSrc("/placeholder.svg")
    }
  }

  if (fill) {
    return (
      <div className="relative" style={{ width: "100%", height: "100%" }}>
        <Image
          src={imgSrc || "/placeholder.svg"}
          alt={alt}
          fill
          className={className}
          priority={priority}
          sizes={sizes || "(max-width: 768px) 100vw, 50vw"}
          unoptimized={true}
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
          onError={handleError}
        />
      </div>
    )
  }

  return (
    <Image
      src={imgSrc || "/placeholder.svg"}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      sizes={sizes}
      unoptimized={true}
      referrerPolicy="no-referrer"
      crossOrigin="anonymous"
      onError={handleError}
    />
  )
}
