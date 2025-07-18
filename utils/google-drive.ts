/**
 * Extracts the file ID from a Google Drive sharing link
 *
 * Supports formats:
 * - https://drive.google.com/file/d/{fileId}/view?usp=sharing
 * - https://drive.google.com/open?id={fileId}
 */
export function extractGoogleDriveFileId(url: string): string | null {
  if (!url) return null

  // For links like: https://drive.google.com/file/d/{fileId}/view
  const filePathMatch = url.match(/\/file\/d\/([^/]+)/)
  if (filePathMatch && filePathMatch[1]) {
    return filePathMatch[1]
  }

  // For links like: https://drive.google.com/open?id={fileId}
  const idParamMatch = url.match(/[?&]id=([^&]+)/)
  if (idParamMatch && idParamMatch[1]) {
    return idParamMatch[1]
  }

  return null
}

/**
 * Converts a Google Drive sharing link to a direct image URL
 */
export function getGoogleDriveImageUrl(url: string): string {
  const fileId = extractGoogleDriveFileId(url)
  if (!fileId) return ""

  // Try a different URL format that might work better with Google Drive's security policies
  // This format sometimes works better than the uc?export=view format
  return `https://lh3.googleusercontent.com/d/${fileId}`
}
