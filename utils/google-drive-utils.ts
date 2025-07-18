/**
 * Converts Google Drive share URL to direct image/video URL
 */
export function convertGoogleDriveUrl(url: string): string {
  // If it's already a placeholder or direct URL, return as is
  if (url.includes("/placeholder.svg") || url.includes("drive.google.com/uc?")) {
    return url
  }

  // Extract file ID from Google Drive share URL
  const fileIdMatch = url.match(/\/d\/([a-zA-Z0-9-_]+)/)
  if (fileIdMatch) {
    const fileId = fileIdMatch[1]
    return `https://drive.google.com/uc?export=view&id=${fileId}`
  }

  // Return original URL if not a Google Drive URL
  return url
}

/**
 * Handles image loading with Google Drive URL conversion
 */
export function handleImageSrc(src: string): string {
  return convertGoogleDriveUrl(src)
}

/**
 * Handles video source with Google Drive URL conversion
 */
export function handleVideoSrc(src: string): string {
  const convertedUrl = convertGoogleDriveUrl(src)

  // For videos, we might need to use the download link
  if (convertedUrl.includes("drive.google.com/uc?export=view")) {
    return convertedUrl.replace("export=view", "export=download")
  }

  return convertedUrl
}
