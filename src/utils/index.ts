export const hasStringValue = (str?: unknown) =>
  typeof str === 'string' && str.length > 0

export const toBoolean = (str?: string | null) => {
  if (str) {
    const trueValues = ['y', 'yes', 'true']
    return trueValues.includes(str)
  }

  return false
}

export const toBase64 = (file: File): Promise<FileReader['result']> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })

export const isObjEmpty = (obj?: Record<any, any> | null) =>
  Object.keys(obj || {}).length === 0

// AA: Do not sent Authorization: "Bearer undefined" as its a malformed request
export const getAuthHeaders = (
  token?: string
): { Authorization: string } | {} =>
  token ? { Authorization: `Bearer ${token}` } : {}

export const valid24hr = (time: string) =>
  /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(time)

export const valid12hr = (time: string) =>
  /^[01]?\d:[0-5]\d( (am|pm))?$/i.test(time)

export const isValidTime = (time: string, use24h?: boolean) => {
  return use24h ? valid24hr(time) : valid12hr(time)
}

export async function copyTextToClipboard(text: string) {
  if ('clipboard' in navigator) {
    return await navigator.clipboard.writeText(text)
  } else {
    // document.execCommand shows a deprecated warning but is used as a fallback so I guess that's the point
    return document.execCommand('copy', true, text)
  }
}

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

export const formatNumberAsCurrency = (num: number) => formatter.format(num)

export const randomIntBetween = (min: number, max: number) => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// Handle undefined, zeros, and empty strings
export const toFloatString = (
  num: string | number | undefined,
  point?: number
) => {
  const floatInt = num ? parseFloat(num.toString()) : 0
  if (isNaN(floatInt)) return '0'

  return point !== undefined ? floatInt.toFixed(point) : floatInt.toString()
}

// 100000000000.000 => 100,000,000,000.000
export const formatBigCurrency = (number: string, point = 2) =>
  toFloatString(number, point).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
