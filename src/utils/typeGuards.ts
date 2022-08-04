export const isError = (error?: unknown): error is Error => {
  return error instanceof Error
}

export const isPromise = <T extends unknown = unknown>(
  result?: any
): result is Promise<T> => {
  return typeof result?.then === 'function'
}
