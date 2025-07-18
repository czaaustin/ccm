/**
 * Converts Google Drive share URL to direct image URL
 * @param url - Google Drive share URL or direct URL
 * @returns Direct image URL that can be used in img src
 */
export function getGoogleDriveImageUrl(url: string): string {
  // If it's already a direct URL or placeholder, return as is
  if (url.includes("/placeholder.svg") || url.includes("drive.google.com/uc?")) {
    return url
  }

  // Extract file ID from Google Drive share URL
  const fileIdMatch = url.match(/\/d\/([a-zA-Z0-9-_]+)/)
  if (fileIdMatch) {
    const fileId = fileIdMatch[1]
    return `https://drive.google.com/uc?export=view&id=${fileId}`
  }

  // If it's already in the correct format or another URL, return as is
  return url
}

/**
 * Optimizes image URL for better loading
 * @param url - Image URL
 * @param size - Optional size parameter for Google Drive images
 * @returns Optimized image URL
 */
export function optimizeImageUrl(url: string, size?: string): string {
  const directUrl = getGoogleDriveImageUrl(url)

  // Add size parameter for Google Drive images if specified
  if (directUrl.includes("drive.google.com/uc?") && size) {
    return `${directUrl}&sz=${size}`
  }

  return directUrl
}

/**
 * Gets responsive image URLs for different screen sizes
 * @param url - Base image URL
 * @returns Object with URLs for different screen sizes
 */
export function getResponsiveImageUrls(url: string) {
  const baseUrl = getGoogleDriveImageUrl(url)

  return {
    mobile: optimizeImageUrl(baseUrl, "w400"),
    tablet: optimizeImageUrl(baseUrl, "w800"),
    desktop: optimizeImageUrl(baseUrl, "w1200"),
    original: baseUrl,
  }
}
