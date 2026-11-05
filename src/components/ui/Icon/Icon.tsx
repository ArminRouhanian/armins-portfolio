import React from 'react'
import styles from './Icon.module.css'

export type IconName =
  | 'chevron-left'
  | 'chevron-right'
  | 'arrow-left'
  | 'arrow-right'
  | 'arrow-up'
  | 'close'
  | 'info'
  | 'plus'
  | 'star'
  | 'warning'
  | 'menu'
  | (string & {})

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  name?: IconName
  src?: string
  size?: number | string
  className?: string
  style?: React.CSSProperties
}

export default function Icon({
  name,
  src,
  size = 20,
  className = '',
  style,
  ...rest
}: IconProps) {
  const iconPath =
    src && (src.includes('/') || src.endsWith('.svg'))
      ? src
      : name
        ? `/assets/icons/${name}.svg`
        : src
          ? `/assets/icons/${src}.svg`
          : undefined

  if (!iconPath) return null

  const sizeStyle = typeof size === 'number' ? `${size}px` : size

  const maskStyle: React.CSSProperties = {
    width: sizeStyle,
    height: sizeStyle,
    WebkitMask: `url("${iconPath}") no-repeat center / contain`,
    mask: `url("${iconPath}") no-repeat center / contain`,
    ...style
  }

  const combinedClass = className ? `${styles.icon} ${className}` : styles.icon

  return (
    <span
      className={combinedClass}
      style={maskStyle}
      aria-hidden="true"
      {...rest}
    />
  )
}
