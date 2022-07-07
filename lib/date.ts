import { DateTime } from 'luxon'

export const toRelativeTime = (date: string) => {
  return DateTime.fromISO(date).toLocal().toRelative()
}

export const isPast = (date: string) => {
  const now = DateTime.now()

  return now.toJSDate() > DateTime.fromISO(date).toJSDate()
}
