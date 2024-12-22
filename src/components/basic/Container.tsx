import React, { HtmlHTMLAttributes, PropsWithChildren } from "react"
import * as Styled from "./Container.styled"
import { useDeviceType } from "../../hooks/useDeviceType"
import { DeviceColumns } from "../../utils/constants"

type Props = {
  autoColumns?: boolean
  columns?: number
  centered?: boolean
  noPadding?: boolean
  colorizeBackgroundColorOnHover?: boolean
}

export function Container({
  autoColumns,
  columns,
  centered,
  noPadding,
  colorizeBackgroundColorOnHover,
  children,
  ...props
}: PropsWithChildren<Props & HtmlHTMLAttributes<HTMLDivElement>>) {
  const { isMobile, isTablet } = useDeviceType()

  const getAutoColumns = () => {
    if (!autoColumns) {
      return
    }

    if (isMobile) {
      return DeviceColumns.MOBILE
    }
    if (isTablet) {
      return DeviceColumns.TABLET
    }
    return DeviceColumns.DESKTOP
  }

  return (
    <Styled.Wrapper
      {...props}
      $columns={getAutoColumns() ?? columns}
      $noPadding={noPadding}
      $centered={centered}
      $colorizeBackgroundColorOnHover={colorizeBackgroundColorOnHover}
    >
      {children}
    </Styled.Wrapper>
  )
}
