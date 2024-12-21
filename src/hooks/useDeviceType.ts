import { useEffect, useState } from "react"

const MOBILE = 640
const TABLET = 1024

export function useDeviceType() {
  const [displayWidth, setDisplayWidth] = useState(window.innerWidth)

  const updateDisplayWidth = () => setDisplayWidth(window.innerWidth)

  useEffect(() => {
    window.addEventListener("resize", updateDisplayWidth)
    return () => window.removeEventListener("resize", updateDisplayWidth)
  }, [])

  if (displayWidth <= MOBILE) {
    return {
      isMobile: true,
    }
  }
  if (displayWidth > MOBILE && displayWidth <= TABLET) {
    return {
      isTablet: true,
    }
  }
  return {
    isDesktop: true,
  }
}
