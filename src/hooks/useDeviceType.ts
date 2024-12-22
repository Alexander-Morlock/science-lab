import { useCallback, useEffect, useState } from "react"
import {
  MOBILE_DEVICE_MAX_WIDTH_PX,
  TABLET_DEVICE_MAX_WIDTH_PX,
} from "../utils/constants"

export function useDeviceType() {
  const [displayWidth, setDisplayWidth] = useState(window.innerWidth)

  const updateDisplayWidth = useCallback(
    () => setDisplayWidth(window.innerWidth),
    []
  )

  useEffect(() => {
    window.addEventListener("resize", updateDisplayWidth)
    return () => window.removeEventListener("resize", updateDisplayWidth)
  }, [updateDisplayWidth])

  if (displayWidth <= MOBILE_DEVICE_MAX_WIDTH_PX) {
    return {
      isMobile: true,
    }
  }
  if (
    displayWidth > MOBILE_DEVICE_MAX_WIDTH_PX &&
    displayWidth <= TABLET_DEVICE_MAX_WIDTH_PX
  ) {
    return {
      isTablet: true,
    }
  }
  return {
    isDesktop: true,
  }
}
