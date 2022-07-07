import { formatDistanceToNowStrict, isValid } from 'date-fns'
import { enUS } from 'date-fns/locale'
import { useCallback, useEffect, useState } from 'react'

export const useTimeDistance = (date?: string | null) => {
  const [timeDistance, setTimeDistance] = useState<string>()

  const handleDistanceUpdate = useCallback(
    (date: Date) =>
      setTimeDistance(
        formatDistanceToNowStrict(date, {
          addSuffix: true,
          locale: {
            ...enUS,
            formatDistance: (unit: string, count: number) => {
              switch (true) {
                case unit === 'xDays':
                  return `${count} day${count > 1 ? 's' : ''} ago`
                case unit === 'xHours':
                  return `${count} hour${count > 1 ? 's' : ''} ago`
                case unit === 'xMinutes':
                  return `${count} min${count > 1 ? 's' : ''} ago`
                case unit === 'xMonths':
                  return `${count} month${count > 1 ? 's' : ''} ago`
                case unit === 'xSeconds':
                  return 'just now'
                case unit === 'xYears':
                  return `${count} year${count > 1 ? 's' : ''} ago`
              }
              return '%d hours'
            },
          },
        })
      ),
    []
  )

  useEffect(() => {
    if (date) {
      const asDate = new Date(date)
      if (isValid(asDate)) {
        handleDistanceUpdate(asDate)
        const interval = setInterval(() => handleDistanceUpdate(asDate), 60000)
        return () => clearInterval(interval)
      }
    }
  }, [date, handleDistanceUpdate])

  return { timeDistance }
}
