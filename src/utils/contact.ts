export const EMAIL_ADDRESS = 'armin.rouhanian@gmail.com'

export interface MailtoOptions {
  subject?: string
  body?: string
}

/**
 * Returns a standardized mailto: URL for contacting Armin.
 */
export function getMailtoHref(options?: MailtoOptions): string {
  if (!options || (!options.subject && !options.body)) {
    return `mailto:${EMAIL_ADDRESS}`
  }

  const params: string[] = []
  if (options.subject) {
    params.push(`subject=${encodeURIComponent(options.subject)}`)
  }
  if (options.body) {
    params.push(`body=${encodeURIComponent(options.body)}`)
  }

  return `mailto:${EMAIL_ADDRESS}?${params.join('&')}`
}

/**
 * Triggers the user's default email client via mailto.
 */
export function openEmail(options?: MailtoOptions): void {
  window.location.href = getMailtoHref(options)
}
