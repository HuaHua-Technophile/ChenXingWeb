/**
 * Vite an advanced feature that supports importing files from the file system through glob mode
 *
 * @see https://cn.vitejs.dev/guide/features.html#glob-import
 */
const assets = import.meta.glob('/src/assets/images/**', {
  eager: true,
  import: 'default',
})

/**
 * A helper function to resolve assets from the src/assets folder in Vue templates.
 * @param path The relative path to the asset from the 'src/assets' directory.
 *             e.g., 'images/home/my-image.png'
 * @returns The resolved public URL for the asset.
 */
export const getAssetUrl = (path: string): string => {
  // Note: The path here is relative to 'src/assets', e.g., 'images/home/my-image.png'
  const fullPath = `/src/assets/${path}`
  if (!assets[fullPath]) {
    console.error(`[getAssetUrl] Asset not found for path: ${fullPath}`)
    return ''
  }
  return assets[fullPath] as string
}
