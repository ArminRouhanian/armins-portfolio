import { Icon } from '../Icon'
import styles from './Button.module.css'

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'iconOnly' | 'iconPlain' | 'cta'
export type ButtonTheme = 'light' | 'dark'
export type ButtonIconPosition = 'left' | 'right'

export interface ButtonProps extends Omit<React.AllHTMLAttributes<HTMLElement>, 'as'> {
  as?: React.ElementType
  variant?: ButtonVariant
  theme?: ButtonTheme
  icon?: string
  iconSize?: number
  iconPosition?: ButtonIconPosition
  to?: string
}

function getVariantClass(variant: ButtonVariant, theme: ButtonTheme): string {
  const isDark = theme === 'dark'

  switch (variant) {
    case 'secondary':
      return `${styles.button} ${styles.secondary}`
    case 'tertiary':
      return `${styles.tertiary} ${isDark ? styles.tertiaryDark : styles.tertiaryLight}`
    case 'iconOnly':
      return `${styles.iconOnly}${isDark ? ` ${styles.iconOnlyDark}` : ''}`
    case 'iconPlain':
      return `${styles.iconPlain}${isDark ? ` ${styles.iconPlainDark}` : ''}`
    case 'cta':
      return styles.cta
    case 'primary':
    default:
      return `${styles.button} ${styles.primary}`
  }
}

export default function Button({
  as,
  variant = 'primary',
  theme = 'light',
  icon,
  iconSize = 20,
  iconPosition = 'left',
  children,
  className = '',
  ...rest
}: ButtonProps) {
  const Component = as || 'button'
  const variantClass = getVariantClass(variant, theme)
  const combinedClass = className ? `${variantClass} ${className}` : variantClass

  const defaultButtonType =
    Component === 'button' && !('type' in rest)
      ? { type: 'button' as const }
      : {}

  const iconElement = icon && (
    <Icon
      src={icon}
      size={iconSize}
      className={styles.icon}
    />
  )

  if (variant === 'iconOnly' || variant === 'iconPlain') {
    return (
      <Component
        className={combinedClass}
        {...defaultButtonType}
        {...rest}
      >
        {iconElement || children}
      </Component>
    )
  }

  const isPrimary = variant === 'primary'

  return (
    <Component
      className={combinedClass}
      {...defaultButtonType}
      {...rest}
    >
      {iconPosition === 'left' && iconElement}
      <span className={styles.label}>
        {children}
      </span>
      {iconPosition === 'right' && iconElement}
      {isPrimary && !icon && (
        <span
          className={styles.primaryArrow}
          aria-hidden="true"
        >
          <Icon
            name="arrow-right"
            size={16}
          />
        </span>
      )}
    </Component>
  )
}
